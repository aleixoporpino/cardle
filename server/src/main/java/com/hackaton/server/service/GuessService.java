package com.hackaton.server.service;

import com.hackaton.server.domain.dto.GuessRequest;
import com.hackaton.server.domain.dto.GuessResponse;
import com.hackaton.server.domain.dto.LetterResult;
import com.hackaton.server.domain.dto.LetterResultType;
import com.hackaton.server.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuessService {

    private final GameRepository gameRepository;

    public GuessResponse guess(GuessRequest request) {
        final var game = gameRepository.findById(request.getGameId())
            .orElseThrow(() -> new RuntimeException("Invalid game"));

        final var word = game.getMake().getName().toUpperCase();
        final var wordGuess = request.getWord().toUpperCase();

        if (word.length() != wordGuess.length()) {
            throw new RuntimeException("Guess has incorrect number of letters");
        }

        final var response = new GuessResponse();
        final var result = response.getResult();

        for (int i = 0; i < word.length(); i++) {
            result.add(LetterResult.builder()
                    .letter(wordGuess.substring(i, i + 1))
                    .result(getLetterResult(word, wordGuess, i))
                .build());
        }

        response.setGuessNumber(request.getGuessNumber());

        return response;
    }

    private LetterResultType getLetterResult(String word, String wordGuess, int letterAt) {
        final var letterGuess = wordGuess.substring(letterAt, letterAt + 1);
        if (letterGuess.equals(word.substring(letterAt, letterAt + 1))) {
            return LetterResultType.CORRECT;
        }

        if (word.contains(letterGuess)) {
            return LetterResultType.WRONG_POSITION;
        }

        return LetterResultType.WRONG;
    }


}
