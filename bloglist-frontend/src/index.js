import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './store'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'

store.dispatch({type: 'NOTIFY', data:{message: 'hei', messageType: 'success'}})
console.log(store.getState())

const render=()=>{ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))}

render()
store.subscribe(render)
