import React from 'react'
import {connect} from 'react-redux'

const Testi =(props)=>(
  <div>
    testataan
    {props.store}
  </div>
)




    const mapStateToProps=(state)=>{
      return{store:state}
    }

    const ConnectedTesti=connect(
      mapStateToProps
    )(Testi)


export default Testi
