

const notificationReducer=(state={message: '', messageType:'', actionToNotify: '' }, action)=>{
  switch (action.type) {
    case 'NOTIFY' :
      return action.data
    case 'NOTEACTION' :
      return {...state, actionToNotify: action.data}
    default :
      return state
  }
}

export const notify=(data)=>{
  return async (dispatch)=>{
    dispatch({
      type: 'NOTIFY',
      data
    })
    await setTimeout(()=>{
      dispatch({
        type: 'NOTIFY',
        data:{
          message:'',
          messageType:''
        }
      })
    }, 5000)
  }
}
export const actionNotified=(action)=>{
  return {
    type: 'NOTEACTION',
    data: action
  }
}

export default notificationReducer
