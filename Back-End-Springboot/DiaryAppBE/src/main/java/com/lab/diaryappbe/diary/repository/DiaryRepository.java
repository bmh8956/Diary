package com.lab.diaryappbe.diary.repository;

import com.lab.diaryappbe.diary.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

}
