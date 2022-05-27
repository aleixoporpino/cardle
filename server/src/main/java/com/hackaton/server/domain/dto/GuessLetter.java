package com.hackaton.server.domain.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GuessLetter {
    private String letter;
    private LetterResultType result;
}
