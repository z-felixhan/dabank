import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dabank</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sign-up">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  align-items: center;
  background: #000;
  font-size: 1rem;
  color: #fff;
  display: flex;
  height: 80px;
  justify-content: center;
  // margin-top: -80px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
`;

const NavLogo = styled(LinkRouter)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: flex-start;
  margin-left: 24px;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 1.8rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
  }
`;

const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  // margin-right: -22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkScroll)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  background: #01bf71;
  border: none;
  border-radius: 50px;
  color: #010606;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 10px 22px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: #010606;
    transition: all 0.2 ease-in-out;
  }
`;

export default Navbar;
