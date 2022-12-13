import React, { useState } from "react";
// shared폴더에 있는 router페이지를 연결해주자 
import Router from "./shared/Router";

import './App.css';



function App() {
  return (
    // 요기 className App은 전체 스타일링 관련해서 CSS 연결돼있어요
    // 공통스타일 필요하심 App.css에 넣어주심 됩니다
    // 아래꺼는 className='App' 클래스명 안건드릴게요 !! 
    <div className='App'>
      {/* <h1> APP 최상위 컴포넌트</h1> */}
      {/* 최상위 App에 Router 설정  */}
      <Router/>
    </div>
  );
}

export default App;


