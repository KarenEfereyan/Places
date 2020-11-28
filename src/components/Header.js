import {Link } from 'gatsby'
import React from 'react'
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import NavData from '../data/NavData';

const Header = () => {
    return (
       <Nav>
       <NavLink to = "/">PLACES</NavLink>
       <Bars />
       <NavMenu>
       {NavData.map((navItem, index) => (
           <NavLink to = {navItem.link} key = {index}>
           {navItem.name}
           </NavLink>
       ))}
       </NavMenu>
       </Nav>
    )
}

export default Header

const Nav = styled.nav`
background: blue;
height:100px;
display:flex;
justify-content:space-between;
padding: 0.5rem calc((100vw -  1300px)/2);
z-index:100;
position:relative;
`
const NavLink = styled(Link)`
color:#fff;
font-weight:bold;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer
`

const Bars = styled(FaBars)`
display:none;
color:#fff;

@media only screen and (max-width: 768px){
    display : block;
    position:absolute;
    top:0;
    right:0;
    transform : translate(-100%, 75%);
    font-size: 1.8rem;
    cursor : pointer;
}
`

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: - 40px;

@media  screen and (max-width: 768px){
    display:none;
}

`