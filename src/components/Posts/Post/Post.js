import React from 'react'
import { FaRegThumbsUp, FaRegTrashAlt } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Div } from './Post.elements';
import { IconContext } from 'react-icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch(); 

  function truncate(str){
    return str.length >=200 ? str.substring(0, 200) + "..." : str;
  }

  return (
    <IconContext.Provider value={{ color: 'var(--white-color)' }}>
      <Div>
        <div className="card-post">

          {/* IMAGE */}
          <div className="card-post__img">
            <img src={post.selectedFile} alt={post.title}/>
          </div>

          {/* TEXT OVERLAY */}
          <div className="card-post__overlay">
            <h6>{post.creator}</h6>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>

          {/* MORE BUTTON */}
          <div className="card-post__overlay2">
            <button 
              className='more' 
              onClick={() => setCurrentId(post._id)}
            >

              <FiMoreHorizontal/>
              <p className="tooltip">Éditer le tip</p>
            </button>
          </div>

          {/* DETAILS */}
          <div className="card-post__details">
            <p className="tags">{post.tags.map((tag) => `#${tag} `)} </p>
            <h5 className="title">{post.title}</h5>
            <p className="message">{truncate(post.message)}</p>
          </div>

          {/* ACTIONS */}
          <div className="card-post__actions">

            <button className='thumbsup' onClick={() => {}}>
                <FaRegThumbsUp/>
                {post.likeCount} {post.likeCount.length > 0 ? 'Likes' : 'Like'}
            </button>

            <button className='delete' onClick={() => dispatch(deletePost(post._id))}>
                <FaRegTrashAlt/> Supprimer
            </button>
          </div>

        </div>
      </Div>
    </IconContext.Provider>
  )
}

export default Post