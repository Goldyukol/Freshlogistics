import React, { useState } from "react";
import logo from "../../assets/img/fresh.svg";
import s from "./Footer.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [links, setLink] = useState("/");
  return (
    <Navbar expand="md" className={s.header}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt="logo"
          />{" "}
          <span className={s.logoText}>FRESHLOGISTICS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav onSelect={(key) => setLink(key)}>
            <NavLink exact to="/" activeClassName={s.active} className={s.link}>
              ГЛАВНАЯ
            </NavLink>
            <NavLink to="/about" activeClassName={s.active} className={s.link}>
              О НАС
            </NavLink>
            <NavLink
              to="/service"
              activeClassName={s.active}
              className={s.link}
            >
              УСЛУГИ
            </NavLink>
            <NavLink to="/busses" activeClassName={s.active} className={s.link}>
              АВТОТРАНСПОРТ
            </NavLink>
            <NavLink
              to="/contacts"
              activeClassName={s.active}
              className={s.link}
            >
              КОНТАКТЫ
            </NavLink>
            <a href="tel:+375990000000" className={s.link} alt="phone">
              📱 +375990000000 MTS A1 LIFE
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
