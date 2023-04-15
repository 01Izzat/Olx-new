import React from 'react';
import './Header.scss';
import Container from '../../Utils/Container/Container';
import {FiMessageCircle, FiHeart, FiUser } from 'react-icons/fi';
import {Button} from '../../Utils/Component';

const Header = () => {
  return (
    <header>
      <Container/>
        <div className='header__wrapper'>
          <img src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="logo" />

          <nav className='header_nav'>
            <ul className='header_list'>
              <li>uz</li>|
              <li>ru</li>
            </ul>

              <button>
                <FiMessageCircle/>
                Сообщения
              </button>

              <button>
                <FiHeart />
              </button>

              <button>
                <FiUser/>
                Ваш профиль
              </button>

              <Button type={'light'} text='Подать объявление'/>
          </nav>
        </div>
    </header>
  );
}

export default Header;
