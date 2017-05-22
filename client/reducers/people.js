function people(state=[], action){

  switch(action.type){
    case 'GET_PERSONAGES':
      return [...state, ...action.personages]

    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export default people;
