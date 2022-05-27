package com.hackaton.server.repository;

import com.hackaton.server.domain.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;

public interface GameRepository extends JpaRepository<Game, String> {

    @Query("SELECT g FROM Game g WHERE g.gameStart < (:now) AND g.gameEnd > (:now)")
    Game findByCurrentTimeBetweenGameStartAndEnd(Instant now);
}
