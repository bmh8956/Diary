package com.lab.diaryappbe.diary.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class DiaryDTO {

	private Long id;

	private String date;

	private String content;

	private int emotionId;

}
