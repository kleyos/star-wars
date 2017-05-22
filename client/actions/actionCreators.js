// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}


// get personages
export function getPersonages(personages) {
  return (dispatch) => {
    dispatch({ 
      type: 'GET_PERSONAGES',
      personages })
  }
}

// next
export function getNext(next) {
  return {
    type: 'GET_NEXT',
    next
  }
}

// previous
export function getPrevious(previous) {
  return {
    type: 'GET_PREVIOUS',
    previous
  }
}
// clear
export function clear() {
  return {
    type: 'CLEAR',
  }
}

