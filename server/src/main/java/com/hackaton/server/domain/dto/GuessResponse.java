package com.hackaton.server.domain.dto;

import lombok.Data;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class GuessResponse {

    public GuessResponse(String guess) {
        result = Arrays.stream(guess.split(""))
            .map(it -> new GuessLetter(it, null))
            .collect(Collectors.toList());
    }

    private String gameId;
    private List<GuessLetter> result;
    private int guessNumber;
    private String answer;
}
