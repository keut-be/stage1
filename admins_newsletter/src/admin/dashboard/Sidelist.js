import { createTheme, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Avatar, Tooltip } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import Categorie from './categorie/Categorie';
import SignpostIcon from '@mui/icons-material/Signpost';
import Post from './post/Post';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { accountApi } from '../../api/account.api';
import Dashboard from './Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import axios from '../../api/axios';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export  const Sidelist = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(true);

  const darkTheme = useMemo(() =>createTheme({
    palette : {
        mode: dark ? 'dark' : 'light'
    },
  }) ,[dark])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();
  const logout = () => {

    axios
          .delete("logout")
          .then(function (response) {
            console.log(response);
            navigate('/')
          })
          .catch(function (error) {
            console.log(error);
        });

    accountApi.logout();
    navigate('/')
  }

  const list =  [
        {
          path:'/admin/category',
          name:'Category',
          icon:<CategoryIcon />
        },
        {
          path:'/admin/post',
          name:'Post',
          icon:<SignpostIcon />
        },
        {
          path:'/admin/dashboard',
          name:'Dashboard',
          icon:<DashboardIcon />
        }
  ]

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Tooltip title='Go back to home page'>
            <IconButton sx={{mr:1}}>

            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap component="div" sx ={{flexGrow:1}}>
            <Link to='/admin/dashboard'><HomeIcon/></Link>   Dashboard
          </Typography>
          <IconButton onClick={() => setDark(!dark)}>
            {dark ? <Brightness4Icon /> : <Brightness7Icon /> }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {list.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <Link to={item.path}><CategoryIcon/></Link> : <Link to={item.path}><SignpostIcon/></Link>  }
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{mx:'auto', mt:3, mb:1}}>
             <Tooltip>
                <Avatar/>
             </Tooltip>
        </Box>
        <Box sx={{textAlign: 'center'}}>
            {open && <Typography>Boris</Typography>}
            <Typography variant='body2'>Admin</Typography>
            {open && <Typography>keutio@gmail.com</Typography>}
            <Tooltip title='Logout' sx={{mt:1}}>
                <IconButton onClick={logout}>
                    <LogoutIcon />
                </IconButton>
            </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
            <Route path='/category' element={<Categorie />} />
            <Route path='/post' element={<Post />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
    </ThemeProvider>
  );
}