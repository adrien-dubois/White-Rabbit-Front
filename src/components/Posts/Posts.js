import React from 'react'
import { useSelector } from 'react-redux'
import Circle from '../Spinner/Circle'
import Post from './Post/Post'
import { Div } from './Posts.elements'


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
      !posts.length ? <Circle/> : (
        <Div>
          <div className="row">
            {posts.map((post) =>(
              <div key={post._id} className="col-4">
                <Post post={post} setCurrentId={setCurrentId} />
              </div>
            ))}
          </div>
        </Div>
      )
  )
}

export default Posts