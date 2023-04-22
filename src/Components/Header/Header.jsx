import React from 'react';
import { Container, Button } from '../../Utils/Component';
import {FiMessageCircle, FiHeart, FiUser} from 'react-icons/fi';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="logo" />

          <nav className='header__nav'>
            <ul className='header__list'>
              <li>
                uz
              </li>
                |
              <li>
                ru
              </li>
            </ul>

              <button>
                <FiMessageCircle/>
                Сообщения
              </button>

              <button>
                <FiHeart/>
              </button>

              <button>
                <FiUser/>
                Ваш профиль
              </button>

              <Button type={'light'} text='Подать объявление'/>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
