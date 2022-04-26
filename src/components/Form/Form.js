import React, { useEffect, useState } from 'react'
import { 
  FaEnvelope, 
  FaHashtag, 
  FaTags 
} from 'react-icons/fa'
import { Div } from './Form.elements';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({ 
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }

    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ 
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    });
  }

  if(!user?.result?.name) {
    return (
      <Div>
        <div className="form-tip">
          <h6 className="unlogged-title">
            Merci de vous connecter, ou de vous inscrire afin de poster vos propres tips ou liker ceux des autres.
          </h6>
        </div>
      </Div>
    )
  }

  return (
    <Div>
      <form 
        action=""
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
        className='form-tip'
      >
        <h6 className='form-title'>{currentId ? 'Modifier' : 'Créer'} un tip</h6>


        {/* TITLE */}
        <div className="input-field blue-input">
          <div className="input-field__icon">
            <FaTags/>
          </div>
          <input 
            type="text"
            id='title'
            className='input-field__text'
            autoComplete='off' 
            placeholder=' '
            name="title"
            value={postData.title}
            required
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <label className='input-field__label' htmlFor="title">Titre</label>
        </div>

        {/* MESSAGE */}
        <div className="area-field blue-input">
          <div className="area-field__icon">
            <FaEnvelope/>
          </div>
          <textarea
            id='message'
            className='area-field__textarea'
            autoComplete='off' 
            placeholder=' '
            name="message"
            value={postData.message}
            required
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          >
          </textarea>
          <label className='area-field__label' htmlFor="message">Message</label>
        </div>

        {/* TAGS */}
        <div className="input-field blue-input">
          <div className="input-field__icon">
            <FaHashtag/>
          </div>
          <input 
            type="text"
            id='tags'
            className='input-field__text'
            autoComplete='off' 
            placeholder=' '
            name="tags"
            value={postData.tags}
            required
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          />
          <label className='input-field__label' htmlFor="tags">Tags</label>
          <p className='input-field__small'>Séparer les tags par une virgule sans espaces</p>
        </div>

        {/* IMAGES */}
        <div className="input-file">
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        {/* SUBMIT */}
        <div className="input-buttons">
          <button type="submit" className='input-buttons__btn'>
              Envoyer
          </button>
          <span className='input-buttons__btn-clear' onClick={clear}>
              Effacer
          </span>
        </div>

      </form>
    </Div>
  )
}

export default Form