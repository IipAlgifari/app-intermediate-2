import { Link } from "react-router-dom";
import gojekLogo from "assets/img/logo/gojek.svg";

const Header = () => {

  const menuList = [
    {
      to: "/",
      name: "Home"
    },
    {
      to: "/partner",
      name: "Partner"
    },
    {
      to: "/careers",
      name: "Careers"
    },
    {
      to: "/",
      name: "Company"
    },
    {
      to: "/",
      name: "Products"
    },
    {
      to: "/",
      name: "Blog"
    },
    {
      to: "/",
      name: "Help"
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          {/* Logo */}
          <div className="header__logo">
            <a href="#home" className="header__logo__lnk">
              <img src={gojekLogo} alt="Gojek Logo" />
            </a>
          </div>
          {/* Menu */}
          <ul className="header__menu">
            {menuList.map((val, idx) => (
              <li className="header__menu__item" key={`hm-${idx}`}>
                <Link to={val.to} className="header__menu__lnk">
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
