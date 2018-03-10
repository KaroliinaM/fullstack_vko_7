
import blogService from '../services/blogs'

const blogReducer=(state=[], action)=>{
  switch (action.type) {
    case 'INIT' :
      return action.data
    case 'LIKE' :
      const liked=state.find(blog=>blog._id===action.data)
      const newBlog={...liked, likes: liked.likes+1}
      return state.map(blog=> blog._id !== liked._id ? blog : newBlog)
    case 'DELETE' :
      return state.filter(blog=>blog._id !== action.data)
    case 'CREATE' :
      return state.concat(action.data)
    default:
      return state
  }
}

export const initBlogs= ()=>{
  return async (dispatch)=>{
    const blogs=await blogService.getAll()
    dispatch ({
      type: 'INIT',
      data: blogs
    })
  }
}
export const likeBlog=(blog)=>{
  return async (dispatch)=>{
    const newBlog= {...blog, likes: blog.likes+1}
    blogService.update(blog._id, newBlog)
    dispatch({
      type: 'LIKE',
      data: blog._id
    })
  }
}
export const deleteBlog=(blogId)=>{
  return async (dispatch)=>{
    blogService.remove(blogId)
    dispatch({
      type: 'DELETE',
      data: blogId
    })
  }
}
export const createNewBlog=(blog)=>{
  return async (dispatch) =>{
    dispatch({
      type: 'CREATE',
      data: blog
    })
  }
}

export default blogReducer
