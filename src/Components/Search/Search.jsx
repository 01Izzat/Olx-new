import React, {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { instance } from '../../Api/instance';
import { Container } from '../Utils/Component';
import {useTranslation } from 'react-i18next';
import './Search.scss';

const Search = () => {

  const {t} = useTranslation ()
  const [searchTitle, setSearchTitle] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSearch = (e) => {
   setSearch(e.target.value)
    if(e.target.value.length > 2) {
      instance.get(`/products/?title=${e.target.value}`)
        .then(response => setSearchTitle(response.data))
    }else 
    {
      setSearchTitle([])
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault()

      return navigate(`/search/${search}`)
  }
  return (
    <section className='search'> 
        <Container>
            <div className='search-wrapper'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <div className='search-input-wrapper'>
                      <FiSearch/>
                      <input type="text" onChange={handleSearch} />

                      {
                        searchTitle.length > 3 ? 
                          <div className='search-suggestions'>
                            {
                              searchTitle.map(searchItem =>
                                <Link to={`/singleproduct/${searchItem.id}`} key={searchItem.id}
                               className='search-result-item transarent-link' >
                                  <p>{searchItem.title}</p>
                                </Link>
                              )
                            }
                          </div> : <></>
                      }

                    </div>
                    <button type='submit'>{t('search__btn-text')}</button>
                </form>
            </div>
        </Container>
    </section>
  );
}

export default Search;
