import React from 'react';
import { bool } from 'prop-types';

import { StyledNav } from './navStyled';

const Nav = ({ open }) => {
  return (
    <StyledNav open={open}>
      <a href="/menu">
        <span aria-label="meny"></span>
        Meny
      </a>
      <a href="/about">
        <span aria-label="vårt kaffe"></span>
        Vårt kaffe
      </a>
      <a href="/profile">
        <span aria-label="profil"></span>
        Min Profil
        </a>
      <a href="/orderstatus">
        <span aria-label="orderstatus"></span>
        Orderstatus
        </a>
    </StyledNav>
  )
}
Nav.propTypes = {
  open: bool.isRequired,
}
export default Nav;