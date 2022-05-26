package com.hackaton.server.controller;

import com.hackaton.server.domain.GuessRequest;
import com.hackaton.server.domain.GuessResponse;
import com.hackaton.server.domain.LetterResult;
import com.hackaton.server.domain.LetterResultType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class WordController {

    @GetMapping(
        path = "/word/length",
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public int getWordLength() {
        return 5;
    }

    @PostMapping(
        path = "/word/guess",
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public @ResponseBody GuessResponse guess(@RequestBody GuessRequest request) {

        final var response = new GuessResponse();

        response.getResult().add(LetterResult.builder()
                .letter("B")
                .result(LetterResultType.WRONG)
            .build());
        response.getResult().add(LetterResult.builder()
            .letter("U")
            .result(LetterResultType.WRONG)
            .build());
        response.getResult().add(LetterResult.builder()
            .letter("I")
            .result(LetterResultType.WRONG)
            .build());
        response.getResult().add(LetterResult.builder()
            .letter("C")
            .result(LetterResultType.WRONG)
            .build());
        response.getResult().add(LetterResult.builder()
            .letter("K")
            .result(LetterResultType.WRONG)
            .build());

        response.setGuessNumber(request.getGuessNumber());

        return response;
    }
}
