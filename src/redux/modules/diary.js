// 1) Action Value 액션 값 설정
const READ_DIARY = "READ_DIARY";
const ADD_DIARY = "ADD_DIARY";
const DEL_DIARY = "DEL_DIARY";
const EDIT_START_DIARY = "EDIT_START_DIARY";
const EDIT_END_DIARY = "EDIT_END_DIARY";

// 2) Action Creator 액션 함수 지정
export const readDiary = (payload) => {
  return {
    type: READ_DIARY,
    payload: payload,
  };
};
export const addDiary = (payload) => {
  // console.log(payload)
  return {
    type: ADD_DIARY,
    payload: payload,
  };
};
export const delDiary = (payload) => {
  // console.log(payload)
  return {
    type: DEL_DIARY,
    payload: payload,
  };
};
export const editStartDiary = (payload) => {
  console.log(payload)
  return {
    type: EDIT_START_DIARY,
    payload: payload,
  };
};
export const editEndtDiary = (payload) => {
  console.log(payload)
  return {
    type: EDIT_END_DIARY,
    payload: payload,
  };
};

// 3) 초기 상태값: 객체형태로 저장한다.
const initialState = {
  diary : [
    {
      id: new Date().getTime() + Math.random(),
      title: 'test입니다',
      date: "2022-12-10",
      content: '막힐 때마다 우울함니다',
      emotion: '8', 
      is_edit: false
    },
    {
      id: new Date().getTime() + Math.random(),
      title: '리액트',
      date: "2022-12-10",
      content: '리액트 공부란...쩜쩜쩜',
      emotion: '4', 
      is_edit: false,
    }
  ]
};

// 4) Reducer 리듀서 작성
const diaryReducer = (state = initialState, action) => {
  // console.log('action',action)
  // console.log('state',state.diary)
  switch (action.type) {
		// case READ_DIARY:
		// return state
		case ADD_DIARY:{
      const copy = [...state.diary]
      return { diary: [ action.payload, ...copy ] }
    }
		case DEL_DIARY:{
      const copy = [...state.diary]
      const newList = copy.filter((c)=> c.id !== action.payload)

      return { diary: [ ...newList ] }
    }
		case EDIT_START_DIARY:{
      const copy = [...state.diary]
      const idx = copy.findIndex((c)=> c.id === action.payload)
      copy[idx].is_edit = !copy[idx].is_edit
      return { diary : [...copy]}
    }
		case EDIT_END_DIARY:{
      const copy = [...state.diary]
      const idx = copy.findIndex((c)=> c.id == action.payload.id)
      copy[idx] = action.payload
      // 해당하는 인덱스를 가져와서
      // 그거를 페이로드 한거랑 아예 바꿔라! 
      return { diary : [ ...copy ]}
    }
    default:
      return state;
  }
};

// 5) export default reducer 리듀서 내보내기
export default diaryReducer;