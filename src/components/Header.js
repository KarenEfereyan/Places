import {Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
       <Nav>
       <NavBrand to = "/">Places</NavBrand>
       </Nav>
    )
}

export default Header

const Nav = styled.nav`
background: transparent;
height:100px;
`
const NavBrand = styled(Link)`
`