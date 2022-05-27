package com.hackaton.server.domain.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
@Table(name = "make")
public class Make {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", length = 36, columnDefinition = "CHAR(36)", nullable = false)
    private String id;

    @Column(name = "name", length = 36, nullable = false)
    private String name;
}
