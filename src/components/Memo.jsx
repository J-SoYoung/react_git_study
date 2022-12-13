import { useState } from "react";
import styled from "styled-components";

import Grid from "../element/Grid";


const Memo = ()=>{
  
  const [memoInput, setMemoInput] = useState([
      {
        memo : '오늘은토요일입니다',
        id : new Date().getTime() + Math.random(),
        diary_id : 1
      },
      {
        memo : '오늘은일요일입니다',
        id : new Date().getTime() + Math.random(),
        diary_id : 2
      }
    ])
  const memoAdd = ()=>{
    console.log(memoInput)
  }
  const memoDel = () =>{
    console.log('memodel')
  }
  return (
    <Grid width='500px'  margin='0 auto'>
      <MemoInputBox>
        <input 
          type='text' value={memoInput || ""}
          placeholder ='메모를 작성해주세요'
          onChange={(e)=>{setMemoInput(e.target.value)}}/>
        <button onClick={memoAdd}>메모저장</button>
      </MemoInputBox>
      <MemoListBox>
        <Box>
          <span onClick={memoDel} style={{cursor:'pointer'}}>✅</span>
          <p style={{paddingLeft :'10px'}}>이것저것 할 일이 많네요</p>
        </Box>
        <Box>
          <span onClick={memoDel} style={{cursor:'pointer'}}>✅</span>
          <p style={{paddingLeft :'10px'}}>이것저것 할 일이 많네요</p>
        </Box>
        <Box>
          <span onClick={memoDel} style={{cursor:'pointer'}}>✅</span>
          <p style={{paddingLeft :'10px'}}>이것저것 할 일이 많네요</p>
        </Box>

      </MemoListBox>
    </Grid>
  )
}

const MemoInputBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const MemoListBox = styled.div`
  
`
const Box = styled.div`
  width : 500px;
  margin: 15px auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

`



export default Memo;