

const notificationReducer=(state='', action)=>{
  switch (action.type) {
    case 'NOTIFY' :
      return action.data
    default :
      return state
  }
}

export const notify=(data)=>{
  return {
    type: 'NOTIFY',
    data
  }
}

export default notificationReducer
