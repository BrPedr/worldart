import React from 'react';

import Link from "../link/Link"

import './NavMobile.css'

const NavMobile = () => {
    return (
      <nav class="nav-mobile">
        <ul class="nav-mobile-container">
          <li>
            <Link href="/shop">products</Link>
          </li>
          <li>
            <Link href="/artists">artists</Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default NavMobile;