import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

 function NavMUI() {
  return (
   
      <AppBar position="static">
        <Toolbar>
          
          <div className='mat'>
          <Button   color="inherit"><Link class="active" to ="/">Home</Link></Button>
          <Button   color="inherit"><Link to="/Watchlist">Watchlist</Link></Button>
          </div>
        </Toolbar>
        </AppBar>
     
     
  );
}
export default NavMUI
