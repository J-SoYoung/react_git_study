// 1) Action Value 액션 값 설정
const ADD_COMMENT = "ADD_COMMENT";

// 2) Action Creator 액션 함수 지정
export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload: payload,
  };
};

// 3) 초기 상태값: 객체형태로 저장한다.
const initialState = {
  comments : [
    { 
      comment : '아직'
    },
  ]
};

// 4) Reducer 리듀서 작성
const memoReducer = (state = initialState, action) => {
  // console.log('action',action)
  // console.log('state',state)
  switch (action.type) {
		case ADD_COMMENT:
		return {
		        state
		      }
				// 하나씩 형태를 풀어서 어떻게 넣어야 될지 생각할 것. 
				// 원래 리스트와, 새 리스트 형태를 맞춰야 함.
    default:
      return state;
  }
};

// 5) export default reducer 리듀서 내보내기
export default memoReducer;