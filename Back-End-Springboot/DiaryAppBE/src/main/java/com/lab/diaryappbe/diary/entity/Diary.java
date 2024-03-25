package com.lab.diaryappbe.diary.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Diary {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="date_str")
	private String date;

	private String content;

	private int emotionId;
}
