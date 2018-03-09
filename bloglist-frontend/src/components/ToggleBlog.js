import React from 'react'

class ToggleBlog extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showAll:false
    }
  }
  toggleVisibility=()=>{
    this.setState({showAll: !this.state.showAll})
  }
  render() {
    const hideWhenVisible={display: this.state.showAll ? 'none' : ''}
    const showWhenVisible={display: this.state.showAll ? '' : 'none'}

  return (
    <div>
      <div style={hideWhenVisible}>
        <div onClick={this.toggleVisibility} className="clickedContent" >{this.props.linkText} </div>
      </div>
      <div style={showWhenVisible} className="hiddenContent">
        <div onClick={this.toggleVisibility}>{this.props.linkText}</div>
        {this.props.children}

      </div>
    </div>
  )
}
}

export default ToggleBlog
