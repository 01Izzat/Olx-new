import React, {useContext} from 'react';
import { Container, Button } from '../Utils/Component' ;
import {FiMessageCircle, FiHeart, FiUser} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import i18n from '../../Language/i18next';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import { ContextColor } from '../../Context/ThemeContext';


const Header = () => {
  const {email} = useSelector(state => state)
  const {theme, setTheme} = useContext(ContextColor)
  const {t} = useTranslation()
  const handleChangeLanguage = (e) => {
     i18n.changeLanguage(e.target.value)
  }
  return (
    <header className={theme ? 'header dark' : 'header light'}>
      <Container>
        <div className='header__wrapper'>
          <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="logo" />

          <nav className='header__nav'>
            <select onChange={handleChangeLanguage} >
              <option value={"uz"}>{t("select__uz")}</option>
              <option value={"ru"}>{t("select__ru")}</option>
              <option value={"en"}>{t("select__en")}</option>
            </select>

            <select onChange={e => e.target.value == 'dark' ? setTheme(true) : setTheme(false) }>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
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
                {email ? email : t('header__account')}
              </Link>

              <button className='btn--light'>{t('header__button')}</button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
