function paging(state={}, action){

  switch(action.type){
    case 'GET_NEXT':
      return {...state, next:action.next}
    
    case 'GET_PREVIOUS':
      return {...state, previous:action.previous}
    
    default:
      return state
  }
}

export default paging;