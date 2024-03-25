package com.lab.diaryappbe.diary.controller;

import com.lab.diaryappbe.diary.dto.DiaryDTO;
import com.lab.diaryappbe.diary.entity.Diary;
import com.lab.diaryappbe.diary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/diary")
public class DiaryController {

	private final DiaryService diaryService;

	@PostMapping
	public ResponseEntity<?> postDiary(@RequestBody Diary diary) {
		System.out.println(diary);
		String msg = "";
		try {
			diaryService.create(diary);
			msg = "success";
		} catch (Exception e) {
			msg = "error";
		}
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<?> getList() {
		List<Diary> list = new ArrayList<>();
		try {
			list =  diaryService.getList();
		} catch (Exception e) {

		}
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<?> putDiary(@RequestBody Diary diary) {
		String msg = "";
		try {
			diaryService.update(diary);
			msg = "success";
		} catch (Exception e) {
			msg = "error";
		}
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	@DeleteMapping
	public ResponseEntity<?> deleteDiary(Long id) {
		String msg = "";
		try {
			Diary diary = new Diary();
			diary.setId(id);
			diaryService.deleteDiary(diary);
			msg = "success";
		} catch (Exception e) {
			msg = "error";
		}
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}
}
