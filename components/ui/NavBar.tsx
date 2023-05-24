import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UiContext } from '@/context/ui';
import NextLink from 'next/link';
import Link from 'next/link';

export const NavBar = () => {
  const {openMenu} = useContext(UiContext)
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar >
            <IconButton onClick={openMenu} size='large' edge='start'>
                <MenuOutlinedIcon/>
            </IconButton>
            <NextLink href='/' passHref>
              <Typography variant='h6'>TasksApp</Typography>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
