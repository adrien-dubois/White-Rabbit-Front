import React, { useState } from 'react'
import ChipInput from 'material-ui-chip-input';
import { FaSearch, FaTags } from 'react-icons/fa';
import { Div } from './Search.elements'
import { useLocation, useNavigate } from 'react-router-dom';
import { getPostsBySearch } from '../../actions/posts';
import { useDispatch } from 'react-redux';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const history = useNavigate();
  const dispatch = useDispatch();

  const searchPost = () => {
    if (search.trim() || tags ) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history('/posts')
    }
  }

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchPost();
    }
  }

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleRemove = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  
  return (
    <Div>
        <div className='search-form' autoComplete='off' >

          <h6 className="search-form__title">
            Recherche
          </h6>
          <div className="search-form__field blue-input">
            <div className="search-form__field__icon">
              <FaSearch/>
            </div>
            <input 
              type="text" 
              name="" 
              id="search" 
              value={search}
              onKeyPress={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
              className='search-form__field__input'
              autoComplete='off'
              placeholder='Recherche'
            />
          </div>
          
          <div className="search-form__chip blue-input">
            <div className="search-form__chip__icon">
              <FaTags/>
            </div>
            <ChipInput
              placeholder='Rech. par tags'
              className='search-form__chip__input'
              value={tags}
              onAdd={(tag) => handleAdd(tag)}
              onDelete={(tag) => handleRemove(tag)}
              fullWidth={true}
            />
          </div>

          <div className="input-buttons">
          <button onClick={searchPost} className='input-buttons__btn'>
              Rechercher
          </button>
        </div>
        </div>
    </Div>
  )
}

export default Search