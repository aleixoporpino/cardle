package com.hackaton.server.controller;

import com.hackaton.server.domain.dto.*;
import com.hackaton.server.domain.entity.Game;
import com.hackaton.server.repository.GameRepository;
import com.hackaton.server.service.GuessService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@Slf4j
@RestController
@RequiredArgsConstructor
public class WordController {

    private final GuessService guessService;
    private final GameRepository gameRepository;

    @GetMapping(
        path = "/game",
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public GameResponse getGame() {
        final var game = gameRepository.findByCurrentTimeBetweenGameStartAndEnd(Instant.now());

        final var response = new GameResponse();
        response.setGameId(game.getId());

        final var wordWithNoSpacesOrDashes = game.getMake().getName()
            .replaceAll("-", "")
            .replaceAll(" ", "");
        response.setWordLength(wordWithNoSpacesOrDashes.length());
        response.setGameEnd(game.getGameEnd());

        return response;
    }

    @PostMapping(
        path = "/word/guess",
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public @ResponseBody GuessResponse guess(@RequestBody GuessRequest request) {
        final var guessResponse = guessService.guess(request);
        if (request.getGuessNumber() == 5) {
            final var game = gameRepository.findByCurrentTimeBetweenGameStartAndEnd(Instant.now());
            guessResponse.setAnswer(game.getMake().getName());
        }
        return guessResponse;
    }
}
