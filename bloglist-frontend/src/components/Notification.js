import React from 'react'
import {connect} from 'react-redux'



const Notification=(props)=>{
  //console.log(this.context.store.getState())
  if(props.message===''){
    return null
  } else if(props.messageType==='error'){
    return(<div className="error">{props.message}</div>)
  }else if (props.messageType==='success'){
    return (<div className="success">{props.message}</div>)
  }
}



const mapStateToProps=(state)=>{
    return{
      message:state.notification.message,
      messageType:state.notification.messageType
    }
  }

  const ConnectedNotification=connect(
    mapStateToProps
  )(Notification)

export default ConnectedNotification
