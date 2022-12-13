import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addDiary } from "../redux/modules/diary";

import './InputForm.css';


const InputForm = () => {
  const dispatch = useDispatch()

  const [title,setTitle]=useState('')
  const [date,setDate]=useState('')
  const [content,setContent]=useState('')
  const [emotion,setEmotion]=useState('행복')

  const onClickHandler = () =>{
    // console.log(title, date, content, emotion)
    if(title === ""){
      alert('제목을작성해주세요') 
      return 
    }
    const newDiary = {
      id: new Date().getTime() + Math.random(),
      title: title,
      date: date,
      content: content,
      emotion: emotion, 
      is_edit: false,
    }
    // setDiary([...diary, newDiary])
    // {}있고 없고는 어떻게 받느냐에 대한 문제임 
    // payload로 받냐 {newDiary}로 받냐
    dispatch(addDiary(newDiary))
    setTitle("")
    setContent("")
    setDate('')
    setEmotion('행복')
  }

  


    return(
  <>
    <div className="inputBox">
      <div>
        <p>제목</p>
        <input type='text'
          value={title||""}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="오늘의 일기 제목"
        />
      </div>
      <div>
        <p>날짜</p>
        <input type='date'
        value={date||""}
        onChange={(e)=>{setDate(e.target.value)}}
        placeholder="오늘의 일기 제목"
        />
      </div>
      <div>
        <p>내용</p>
        <textarea
          value={content || ""}
          onChange={(e)=>{setContent(e.target.value)}}
          type='text' placeholder='TODO의 내용을 작성해주세요'
        />
      </div>
      <div>
        <p>감정</p>
        <select 
          onChange={(e)=>{setEmotion(e.target.value)}} 
          // onChange={(e)=>{console.log(e.target.value)}} 
          value={emotion||""}
        >
          <option value={'1'}>행복</option>
          <option value={'2'}>슬픔</option>
          <option value={'3'}>화남</option>
          <option value={'4'}>짜증</option>
          <option value={'5'}>심심</option>
          <option value={'6'}>보통</option>
          <option value={'7'}>아픔</option>
          <option value={'8'}>현타</option>
        </select>
      </div>
      <button onClick={onClickHandler}>등록</button>
    </div>
    </>
  )
}


export default InputForm;