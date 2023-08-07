import { Button } from '../Button';
import { HeaderContainer } from './style';

export function Header() {
  return (
    <HeaderContainer className="header flex">
      <a href="#" className="header__logo">
        Inner Bliss
      </a>

      <nav className="header__menu">
        <ul className="header__menu-items flex">
          <li className="header__item--active">
            <a href="#">Home</a>
          </li>
          <li className="header__item">
            <a href="#">About</a>
          </li>
          <li className="header__item">
            <a href="#">Service</a>
          </li>
          <li className="header__item">
            <a href="#">Blog</a>
          </li>
          <li className="header__item">
            <a href="#">Contact</a>
          </li>

          <a href="#">
            <Button className="header__btn" text="Book Now" />
          </a>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
