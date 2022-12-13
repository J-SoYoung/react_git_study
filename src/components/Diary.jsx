import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"

import Grid from "../element/Grid"; 



const Diary = () =>{
  const diary = useSelector((state)=>state.diaryReducer.diary)
  // rootReducer이름. 모듈에 저장된 데이터이름
  // console.log(diary)


  return (
    <>
    <Grid is_flex>
    {diary.map((d)=>{
      return (
          <Link key={d.id} to = {`/detail/${d.id}`} 
            style={{textDecoration:'none', color:'#234E70'}}>
            <Grid BG_color='#FBF8BE' margin='10px' width='180px' hieght='180px' padding='10px'>
              <Grid width='35px' hieght='35px'>
                <img src={`/img/img${d.emotion}.png`} style={{ width:'100%'}}/>
              </Grid>
              <Grid>
                <div>{d.date}</div>
                <div>{d.title}</div>
                <div>{d.content}</div>
              </Grid>
            </Grid>
          </Link>
        )
      })}
    </Grid>
    </>
  )
}

export default Diary;