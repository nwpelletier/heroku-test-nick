import React from 'react';
import NavSubcruddits from './NavSubcruddits';
import LowerHalf from './NavBlueSection';
import { BASE_API_URL } from '../../utils/constants';
function Navbar() {
  return (
    <div>
      <NavSubcruddits/>
      <LowerHalf/>
    </div>
  )
}

export default Navbar;
