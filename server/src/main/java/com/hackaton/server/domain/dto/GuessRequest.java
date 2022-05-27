package com.hackaton.server.domain.dto;

import lombok.Data;

import java.util.List;

@Data
public class GuessRequest {

    private String gameId;
    private String word;
    private int guessNumber;
}
