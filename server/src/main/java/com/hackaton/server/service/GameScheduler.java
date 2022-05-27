package com.hackaton.server.service;

import com.hackaton.server.domain.entity.Game;
import com.hackaton.server.repository.GameRepository;
import com.hackaton.server.repository.MakeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;

@Slf4j
@Service
@RequiredArgsConstructor
public class GameScheduler {

    private final GameRepository gameRepository;
    private final MakeRepository makeRepository;

    @Transactional
    @Scheduled(initialDelay = 1000, fixedDelay = 60000)
    public void scheduleGame() {
        final var existingGame = gameRepository.findByCurrentTimeBetweenGameStartAndEnd(Instant.now());

        if (existingGame != null) {
            // Game already exists
            return;
        }

        final var newGame = new Game();

        final var today = LocalDate.ofInstant(Instant.now(), ZoneId.of("UTC"));
        newGame.setGameStart(today.atStartOfDay().toInstant(ZoneOffset.UTC));
        newGame.setGameEnd(today.plus(1, ChronoUnit.DAYS).atStartOfDay().toInstant(ZoneOffset.UTC));

        final var randomMake = makeRepository.findRandomMake();
        newGame.setMake(randomMake);

        gameRepository.save(newGame);

        log.info("New game created for {}", today);
    }
}
