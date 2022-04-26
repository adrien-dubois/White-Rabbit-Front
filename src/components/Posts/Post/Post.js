import React from 'react'
import { FaEdit, FaRegThumbsUp, FaRegTrashAlt } from 'react-icons/fa';
import { Div } from './Post.elements';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

// TO PUT DATE IN FRENCH WITH MOMENT
import moment from 'moment';
import 'moment/locale/fr';

const Post = ({ post, setCurrentId }) => {

  // And after import moment and the good locale, declare locale.
  moment.locale('fr');

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
            <h6>{post.name}</h6>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>

          {/* MORE BUTTON */}
          <div className="card-post__overlay2">
            <button 
              className='more' 
              onClick={() => setCurrentId(post._id)}
            >

              {/* <FiMoreHorizontal/> */}
              <FaEdit/>
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

            <button className='thumbsup' onClick={() => dispatch(likePost(post._id))}>
                <FaRegThumbsUp/>
                &nbsp; {post.likes.length} {post.likes > 1 ? 'Likes' : 'Like'}
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