package com.hackaton.server.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LetterResult {
    private String letter;
    private LetterResultType result;
}
