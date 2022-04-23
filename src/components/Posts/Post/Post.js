import React from 'react'
import { FaRegThumbsUp, FaRegTrashAlt } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Div } from './Post.elements';
import moment from 'moment';

const Post = ({ post }) => {
  return (
    <Div>
      <div className="card-post">

        {/* IMAGE */}
        <img src={post.selectedFile} alt={post.title} className='card-post__img' />

        {/* TEXT OVERLAY */}
        <div className="card-post__overlay">
          <h6>{post.creator}</h6>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>

        {/* MORE BUTTON */}
        <div className="card-post__overlay2">
          <button className='more' onClick={() => {}}>
            <FiMoreHorizontal/>
          </button>
        </div>

        {/* DETAILS */}
        <div className="card-post__details">
          <p className="tags">{post.tags.map((tag) => `#${tag} `)} </p>
          <h5 className="title">{post.title}</h5>
          <p className="message">{post.message}</p>
        </div>

        {/* ACTIONS */}
        <div className="card-post__actions">

          <button className='thumbsup' onClick={() => {}}>
              <FaRegThumbsUp/>
              {post.likeCount} Like
          </button>

          <button className='delete' onClick={() => {}}>
              <FaRegTrashAlt/> Supprimer
          </button>
        </div>

      </div>
    </Div>
  )
}

export default Post