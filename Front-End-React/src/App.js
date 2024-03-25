import logo from './logo.svg';
import './App.css';
import React, {useReducer, useEffect, useRef, useState} from 'react';

//Routing  처리 라이브러리 import  <== 요청 (/company) ==> 컴포넌트를 연결 
// Routes, Route  <== Controller 역활 : 요청 ==> View (컴포넌트) 연결 
// Link , useNavigete : 요청을 보내는 역활 
import {Routes, Route, Link, useNavigate, Await} from 'react-router-dom';

import Header from './include/Header';
import Footer from './include/Footer';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import ButtonTest from './test/ButtonTest';
import ImgTest from './test/ImgTest';
import diaryService from "./service/DiaryService";

// 1. Context 선언 : 상태 값을 처리 , 이벤트 처리 
export const DiaryStateContext = React.createContext();   //상태값을 전송 하는 context
export const DiaryDispatchContext = React.createContext();  // 이벤트를 처리하는 context , 상태값을 변경 

//상태 값을 변경하는 reducer 함수 정의

function App() {

    // useRef Hook을 사용해서 고유한 값을 생성 : id 필드에 적용
    const idRef = useRef(3);

    const [diaryList, setDiaryList] = useState([]);

    const setList = async () => {
        setDiaryList(await diaryService.getList())
    }

    useEffect(() => {
        setList()
    }, []);

    const onCreate = async (date, content, emotionId) => {
        const diary = {
            date: new Date(date).getTime(),
            content: content,
            emotionId: emotionId
        }
        await diaryService.saveDiary(diary);
        await setList();
    }
    const onUpdate = async (id, date, emotionId, content) => {
        const diary = {
            id: id,
            date: new Date(date).getTime(),
            emotionId: emotionId,
            content: content,
        }
        await diaryService.putDiary(diary);
        await setList();
    }
    const onDelete = async (targetId) => {
        await diaryService.deleteDiary(targetId);
        await setList();
    }

    return (
        // 2. context provider를 사용해서 상태를 처리할 하위 컴포넌트를 그룹핑
        <DiaryStateContext.Provider value={diaryList}>
            <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>

                <div className="App">
                    <h1> 다이어리 APP </h1>

                    <Header/>
                    <hr/>
                    <p/><p/><p/><p/><p/><p/>

                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/new" element={<New/>}></Route>
                        <Route path="/diary/:id" element={<Diary/>}> </Route>
                        <Route path="/edit/:id" element={<Edit/>}> </Route>

                        <Route path="/btntest" element={<ButtonTest/>}> </Route>
                        <Route path="/imgtest" elememt={<ImgTest/>}> </Route>
                    </Routes>

                    <p/><p/><p/><p/><p/><p/>
                    <hr/>
                    <Footer/>
                </div>

            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>

    );
}

export default App;
