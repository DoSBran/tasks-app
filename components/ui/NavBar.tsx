import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UiContext } from '@/context/ui';

export const NavBar = () => {
  const {openMenu} = useContext(UiContext)
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar onClick={openMenu}>
            <IconButton size='large' edge='start'>
                <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant='h6'>TasksApp</Typography>
        </Toolbar>
    </AppBar>
  )
}
