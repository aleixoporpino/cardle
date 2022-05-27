package com.hackaton.server.repository;

import com.hackaton.server.domain.entity.Game;
import com.hackaton.server.domain.entity.Make;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;

public interface MakeRepository extends JpaRepository<Make, String> {

    @Query(nativeQuery = true,
        value = "SELECT make.* FROM make " +
            "LEFT JOIN game g on make.id = g.make_id " +
            "WHERE g.make_id IS NULL " +
            "ORDER BY rand() LIMIT 1")
    Make findRandomMake();
}
