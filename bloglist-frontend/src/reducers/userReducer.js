

const userReducer=(state=[], action)=>{
  switch (action.type) {
    case 'INITUSERS' :
      return action.data
    default :
      return state
  }
}

export const userListInitialization=(userlist)=> {
  return {
    type:'INITUSERS',
    data: userlist
  }
}

export default userReducer
