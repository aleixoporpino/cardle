package com.hackaton.server.domain;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class GuessResponse {

    private List<LetterResult> result = new ArrayList<>();
    private int guessNumber;
}
