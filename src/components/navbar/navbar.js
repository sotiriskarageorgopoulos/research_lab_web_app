import React from 'react';
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navbarPayload = useSelector(state => state.navbar.value)
  const {componentType} = navbarPayload
  const pages = [
  {
    name: 'Research Laboratory',
    path: '/'
  },
  {
    name: 'Research Members',
    path:'/research_members'
  },
  {
    name: 'Research Projects',
    path: '/research_projects'
  },
  {
    name: 'Courses',
    path: '/courses'
  },
  {
    name: 'Publications',
    path: '/publications'
  },
  {
    name: 'Admin',
    path: '/login'
  }
]

  if(componentType === 'user'){
    return <NavbarSetUp pages={pages}/>; 
  }
  else if(componentType === 'admin') {
    const pages = [
    {
      name: 'Research Laboratory',
      path: '/admin'
    },
    {
      name: 'Insert',
      path:'/insert_rows'
    },
    {
      name: 'Update',
      path: '/update_rows'
    },
    {
      name: 'Delete',
      path: '/delete_rows'
    },  
    {
      name: 'Logout',
      path: '/'
    }
  ]
  
    return <NavbarSetUp pages={pages} />;
  }
    
  return <NavbarSetUp pages={pages}/>; 
}

const NavbarSetUp = ({pages}) => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return(
  <AppBar className="app-bar-style">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to={pages[0].path} className="link">{pages[0].name}</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages
              .filter(p => p.name !== 'Research Laboratory')
              .map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className="link" to={page.path}>{page.name}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Research Laboratory
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages
            .filter(p => p.name !== 'Research Laboratory')
            .map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link className="link" to={page.path}>{page.name}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
  </AppBar>)
}


export default Navbar