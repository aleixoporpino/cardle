package com.hackaton.server.domain.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class GuessResponse {

    private String gameId;
    private List<LetterResult> result = new ArrayList<>();
    private int guessNumber;
}
