package com.example.repoinfo.model;

import lombok.Data;

@Data
public class Repository {
    private String name;
    private String html_url;

    private String description; // Add description field
    private int stargazers_count; // Add stars field
}
