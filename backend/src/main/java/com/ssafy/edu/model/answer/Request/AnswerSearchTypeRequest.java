package com.ssafy.edu.model.answer.Request;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Valid
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerSearchTypeRequest {
    @ApiModelProperty(required = true)
    @NotNull
    String sortType;

    @ApiModelProperty(required = true)
    @NotNull
    String searchType;

    @ApiModelProperty(required = true)
    @NotNull
    String keyword;

    @ApiModelProperty(required = true)
    @NotNull
    String keywordType;

    @ApiModelProperty(required = true)
    @NotNull
    int pageNum;
}
