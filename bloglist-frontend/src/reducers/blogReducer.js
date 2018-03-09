const initBlogs=[{
  _id: 1,
  title: 'ekablogi',
  author: 'kirjailija',
  url: 'urli',
  likes: 0
},
{
  _id: 2,
  title: 'tokablogi',
  author: 'toinen kirjailija',
  url: 'tokaurli',
  likes: 0
}
]

const blogReducer=(state=initBlogs, action)=>{
  switch (action.type) {
    case 'LIKE' :
      const liked=state.find(blog=>blog._id===action.data)
      const newBlog={...liked, likes: liked.likes+1}
      return state.map(blog=> blog._id !== liked._id ? blog : newBlog)
    case 'DELETE' :
      return state.filter(blog=>blog._id !== action.data)
    default:
      return state
  }
}

export const likeBlog=(blogId)=>{
  return {
    type: 'LIKE',
    data: blogId
  }
}
export const deleteBlog=(blogId)=>{
  return {
    type: 'DELETE',
    data: blogId
  }
}

export default blogReducer
