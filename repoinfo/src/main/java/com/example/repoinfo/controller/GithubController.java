package com.example.repoinfo.controller;

import com.example.repoinfo.model.Repository;
import com.example.repoinfo.service.GithubService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class GithubController {
    private final GithubService githubService;

    public GithubController(GithubService githubService) {
        this.githubService = githubService;
    }

    @GetMapping("/repos/{username}")
    public Flux<Repository> getPublicRepos(@PathVariable String username) {
        return githubService.getPublicRepos(username);
    }

    @GetMapping(value = "/repos/{username}/report", produces = "text/html")
    public String getPublicReposReport(@PathVariable String username) {
        Flux<Repository> reposFlux = githubService.getPublicRepos(username);

        // Collecting the repositories into a List
        List<Repository> reposList = reposFlux.collectList().block();

        // Generating the HTML report
        StringBuilder report = new StringBuilder();
        report.append("<html><head><title>Public Repositories Report</title></head><body>");
        report.append("<h1>Public Repositories for ").append(username).append("</h1>");
        report.append("<table border='1'>");
        report.append("<tr><th>#</th><th>Repo Name</th><th>URL</th><th>Description</th><th>Stars</th></tr>");

        if (reposList != null && !reposList.isEmpty()) {
            for (int i = 0; i < reposList.size(); i++) {
                Repository repo = reposList.get(i);
                report.append("<tr>");
                report.append("<td>").append(i + 1).append("</td>");
                report.append("<td>").append(repo.getName()).append("</td>");
                report.append("<td><a href='").append(repo.getHtml_url()).append("'>").append(repo.getHtml_url())
                        .append("</a></td>");
                report.append("<td>")
                        .append(repo.getDescription() != null ? repo.getDescription() : "No description available")
                        .append("</td>");
                report.append("<td>").append(repo.getStargazers_count()).append("</td>");
                report.append("</tr>");
            }
        } else {
            report.append("<tr><td colspan='5'>No public repositories found for this user.</td></tr>");
        }

        report.append("</table></body></html>");

        return report.toString();
    }

}
