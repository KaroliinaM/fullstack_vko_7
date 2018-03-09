import React from 'react'
import {connect} from 'react-redux'

const CreateForm=(props)=>{

  return (
    <div>
      <form onSubmit={createBlog}>
        title <input name="title" /> <br />
        author
        <input name="author" /> <br />
        url <input name="url" /><br />
        <button type="submit">post</button>
      </form>
    </div>
  )
}

const  createBlog=(event, props)=>{
    event.preventDefault()

    const blogObject={
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value
    }
    console.log(blogObject)
    console.log(props)
  }
const mapStateToProps=(state)=>{
  return {
    blogs: state.blogs
  }
}

const ConnectedCreateForm=connect(
  mapStateToProps
)(CreateForm)
export default ConnectedCreateForm
