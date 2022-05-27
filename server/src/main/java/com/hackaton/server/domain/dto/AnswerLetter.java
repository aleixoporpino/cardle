package com.hackaton.server.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AnswerLetter {
    private String letter;
    private boolean resolved;
}
