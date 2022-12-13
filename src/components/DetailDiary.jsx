import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import Button from "../element/Button";
import Grid from "../element/Grid";
import { delDiary, editEndtDiary, editStartDiary } from "../redux/modules/diary";
import Memo from "./Memo";
// import Button from "../element/Button";



const DetailDiary = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {id} = useParams()
  const diary = useSelector((state)=>state.diaryReducer.diary)
  const idx = diary.findIndex((d)=> d.id == id )
  const d = diary[idx]
  // console.log(d)

  const [editTitle, setEditTitle]=useState()
  const [editDate, setEditDate]=useState()
  const [editContent, setEditContent]=useState()
  const [editEmotion, setEditEmotion]=useState()
  const [isMemo, setIsMemo] = useState(false)

  const delete_btn = (id)=>{
    if (window.confirm('일기를 삭제하시겠습니까?')){
      dispatch(delDiary(id))
      // alert('삭제되었습니다')
      navigate("/")
    }
  }
  const edit_start_Btn = (id)=>{
    dispatch(editStartDiary(id))
    // console.log('수정',id)
  }
  const editHandler = ()=>{
    const newEditDiary={
      id: d.id,
      title: editTitle === undefined? d.title : editTitle,
      date: editDate === undefined? d.date : editDate,
      content: editContent === undefined? d.content : editContent,
      emotion: editEmotion === undefined? d.emotion : editEmotion, 
      is_edit: false,
    }
    // console.log(newEditDiary)
    dispatch(editEndtDiary(newEditDiary))
    alert('수정이 완료되었습니다')
    navigate("/")
    // 하고 페이지 이동해야되나?? ,,후ㅡㅁ 
  }
  const memoToggle = ()=>{setIsMemo(!isMemo)
}
  console.log(isMemo)

  
  return (
    <Grid height='100%' >
      {/* {d.is_edit? console.log('잇음') : console.log('d없음')} */}
      <h1>다이어리</h1>
      {!(d.is_edit)?
      <>
        <Grid key={d.id} BG_color='#234E70' width='450px' height='300px' margin='50px auto' padding ='20px' box_sizing='border-box'>
          <Grid 
            BG_color='#FBF8BE' margin='10px' width='100%' hieght='180px' padding='10px' box_sizing='border-box'>
            <Grid width='35px' hieght='35px'>
              <img src={`/img/img${d.emotion}.png`} style={{ width:'100%'}}/>
            </Grid>
            <Grid>
              <div>{d.date}</div>
              <div>{d.title}</div>
              <div>{d.content}</div>
            </Grid>
          </Grid>
          <Grid is_flex>
            {/* 컴포넌트에는 onClick과 같은 속성들을 바로 사용할 수 없다*/}
            <Button _onClick={()=>delete_btn(d.id)}>삭제</Button>
            <Button _onClick={()=>edit_start_Btn(d.id)}>수정</Button>
            {/* <button onClick={()=>{delete_btn(d.id)}}>삭제</button>
            <button onClick={()=>{edit_start_Btn(d.id)}}>수정</button> */}
            <Link to='/'>
              <Button>홈으로</Button>
            </Link>
            <Button _onClick={memoToggle}>
              {isMemo? "메모숨기기" : "메모보기"}
            </Button>
          </Grid>
        </Grid>
        {isMemo? <><Memo/></> : null}
      </>
        :
      <>
      <div className="inputBox">
        <div>
          <p>제목</p>
          <input type='text'
            defaultValue={d.title}
            onChange={(e)=>setEditTitle(e.target.value)}
          />
        </div>
        <div>
          <p>날짜</p>
          <input type='date'
          defaultValue={d.date}
          onChange={(e)=>{setEditDate(e.target.value)}}
          />
        </div>
        <div>
          <p>내용</p>
          <textarea
            type='text' defaultValue={d.content}
            onChange={(e)=>{setEditContent(e.target.value)}}
          />
          {/* <p><img src='/img/img1.png'/></p> */}
        </div>
        <div>
          <p>감정</p>
          <select defaultValue={d.emotion}
          onChange={(e)=>setEditEmotion(e.target.value)}>
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
        <button onClick={()=>{editHandler(d.id)}}>수정완료</button>
        <button onClick={()=>{edit_start_Btn(d.id)}}>수정취소</button>
        <Link to='/'>
            <button>홈으로</button>
          </Link>
      </div>
      </>
      }
    </Grid>
  )
}

export default DetailDiary;



    