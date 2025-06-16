import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Box sx={{flexGro: 1}}>
            <AppBar>
                <Toolbar>
                    <h3>Job-Board</h3> &nbsp;&nbsp;
                    <Link to="/a">
                      <Button variant="contained" color="secondary">AdminPage</Button>&nbsp;
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
        
        
        
        
    </div>
  )
}

export default NavBar