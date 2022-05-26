package com.hackaton.server.domain;

import lombok.Data;

import java.util.List;

@Data
public class GuessRequest {

    private String word;
    private int guessNumber;
}
