package com.example.repoinfo.service;

import com.example.repoinfo.model.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Service
public class GithubService {
    private final WebClient webClient;

    public GithubService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://api.github.com").build();
    }

    public Flux<Repository> getPublicRepos(String username) {
        return webClient.get()
                .uri("/users/{username}/repos", username)
                .retrieve()
                .bodyToFlux(Repository.class);
    }
}
