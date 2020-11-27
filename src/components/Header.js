import {Link } from 'gatsby'
import React from 'react'
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'

const Header = () => {
    return (
       <Nav>
       <NavBrand to = "/">Places</NavBrand>
       <Bars />
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
const NavBrand = styled(Link)`
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
    position:absolute
}
`