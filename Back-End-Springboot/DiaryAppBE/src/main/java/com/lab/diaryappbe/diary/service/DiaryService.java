package com.lab.diaryappbe.diary.service;

import com.lab.diaryappbe.diary.dto.DiaryDTO;
import com.lab.diaryappbe.diary.entity.Diary;
import com.lab.diaryappbe.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DiaryService {
	private final DiaryRepository diaryRepository;

	public void create(Diary diary) {
		diaryRepository.save(diary);
	}

	public void update(Diary diary) {
		diaryRepository.save(diary);
	}

	public List<Diary> getList() {
		return diaryRepository.findAll();
	}

	public void deleteDiary(Diary diary) {
		diaryRepository.delete(diary);
	}
}
