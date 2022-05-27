package com.hackaton.server.service;

import com.hackaton.server.domain.dto.*;
import com.hackaton.server.repository.GameRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuessService {

    private final GameRepository gameRepository;

    public GuessResponse guess(GuessRequest request) {
        final var game = gameRepository.findById(request.getGameId())
            .orElseThrow(() -> new RuntimeException("Invalid game"));

        final var answer = game.getMake().getName().toUpperCase();
        final var guess = request.getWord().toUpperCase();

        if (answer.length() != guess.length()) {
            throw new RuntimeException("Guess has incorrect number of letters");
        }

        final var response = new GuessResponse(guess);
        final var guessLetters = response.getResult();

        final var answerLetters = Arrays.stream(answer.split(""))
            .map(it -> new AnswerLetter(it, false))
            .collect(Collectors.toList());

        evaluateCorrect(guessLetters, answerLetters);
        evaluateWrongPosition(guessLetters, answerLetters);

        response.setGuessNumber(request.getGuessNumber());

        return response;
    }

    private void evaluateCorrect(List<GuessLetter> guessLetters, List<AnswerLetter> wordLetters) {
        for (int i = 0; i < wordLetters.size(); i++) {
            final var guessLetter = guessLetters.get(i);
            if (guessLetter.getLetter().equals(wordLetters.get(i).getLetter())) {
                guessLetter.setResult(LetterResultType.CORRECT);
                wordLetters.get(i).setResolved(true);
            }
        }
    }

    private void evaluateWrongPosition(List<GuessLetter> guessLetters, List<AnswerLetter> wordLetters) {
        for (final var guessLetter : guessLetters) {
            if (guessLetter.getResult() != null) {
                return;
            }

            final var match = wordLetters.stream()
                .filter(it -> it.getLetter().equals(guessLetter.getLetter()) && !it.isResolved())
                .findFirst();

            if (match.isPresent()) {
                match.get().setResolved(true);
                guessLetter.setResult(LetterResultType.WRONG_POSITION);
            } else {
                guessLetter.setResult(LetterResultType.WRONG);
            }
        }
    }

}
