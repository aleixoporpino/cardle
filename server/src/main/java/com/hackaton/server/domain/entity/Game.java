package com.hackaton.server.domain.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.Instant;

@Data
@Entity
@Table(name = "game")
@EqualsAndHashCode(exclude = {"id"})
@ToString(exclude = {"id"})
public class Game {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", length = 36, columnDefinition = "CHAR(36)", nullable = false)
    private String id;

    @ManyToOne
    @JoinColumn(name = "make_id", columnDefinition = "CHAR(36)", nullable = false, updatable = false)
    private Make make;

    @Column(name = "game_start", nullable = false)
    private Instant gameStart;

    @Column(name = "game_end", nullable = false)
    private Instant gameEnd;
}
