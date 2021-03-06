package com.hackaton.server.domain.dto;

import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Data
public class GameResponse {

    private String gameId;
    private int wordLength;
    private Instant gameEnd;
}
