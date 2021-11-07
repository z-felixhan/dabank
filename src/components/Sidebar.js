import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import React from "react";
import styled from "styled-components";

const Sidebar = (props) => {
  const { isOpen, toggle } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="sign-up" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrapper>
          <SidebarRoute to="/login">Login</SidebarRoute>
        </SidebarButtonWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  align-items: center;
  background: #0d0d0d;
  height: 100%;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
  width: 100%;
  z-index: 1000;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
`;

const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: 10vh;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 65px);
  text-align: center;
`;

const SidebarLink = styled(LinkScroll)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SidebarButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  border: none;
  color: #010606;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 16px 64px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`;

export default Sidebar;
