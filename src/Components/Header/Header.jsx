import React from 'react';
import { Container, Button } from '../Utils/Component' ;
import {FiMessageCircle, FiHeart, FiUser} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import i18n from '../../Language/i18next';
import { useTranslation } from 'react-i18next';
import './Header.scss';


const Header = () => {
  const {t} = useTranslation()
  const handleChangeLanguage = (e) => {
     i18n.changeLanguage(e.target.value)
  }
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="logo" />

          <nav className='header__nav'>
            <select onChange={handleChangeLanguage} >
              <option value={"uz"}>{t("select__uz")}</option>
              <option value={"ru"}>{t("select__ru")}</option>
              <option value={"en"}>{t("select__en")}</option>
            </select>

                <Link className='header__nav-link' to='/message'>
                    <FiMessageCircle/>
                    {t('header__message')}
                </Link> 
             
              <button>
                <FiHeart/>
              </button>

              <Link className='header__nav-link' to='/auth'>
                <FiUser/>
                {t('header__account')}
              </Link>

              <button className='btn--light'>{t('header__button')}</button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
