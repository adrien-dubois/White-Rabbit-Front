import React, { useState } from 'react'
import { 
  FaEnvelope, 
  FaHashtag, 
  FaSlackHash, 
  FaTags, 
  FaUser 
} from 'react-icons/fa'
import { Div } from './Form.elements'

const Form = () => {

  const [postData, setPostData] = useState({
    creator: '', 
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const handleSubmit = () => {

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
        <h6 className='form-title'>Créer un tip</h6>

        {/* CREATOR */}
        <div className="input-field blue-input">
          <div className="input-field__icon">
            <FaUser/>
          </div>
          <input 
            type="text"
            id='creator'
            className='input-field__text'
            autoComplete='off' 
            placeholder=' '
            name="creator"
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
          <label className='input-field__label' htmlFor="creator">Pseudo</label>
        </div>

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
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
          <label className='input-field__label' htmlFor="title">Titre</label>
        </div>

        {/* MESSAGE */}
        <div className="input-field blue-input">
          <div className="input-field__icon">
            <FaEnvelope/>
          </div>
          <input 
            type="text"
            id='message'
            className='input-field__text'
            autoComplete='off' 
            placeholder=' '
            name="message"
            value={postData.message}
            onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
          <label className='input-field__label' htmlFor="message">Message</label>
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
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <label className='input-field__label' htmlFor="tags">Tags</label>
        </div>

        {/* SUBMIT */}
        <button type="submit" className='btn'>
            Envoyer
        </button>

      </form>
    </Div>
  )
}

export default Form