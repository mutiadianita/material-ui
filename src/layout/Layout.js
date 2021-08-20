import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@material-ui/core';
import logo from '../assets/images/logo-mui.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../page/home';
import Components from '../page/components';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
    clipPath: "inset(-2px -2px -2px 0px);"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: 'none'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    borderRight: 'none'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    boxShadow: '0 0 2rem 0 rgb(136 152 170 / 15%)',
    backgroundColor: "#fff"
  },
  ghostElement: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.backgroundColor,
    height: "calc(100vh - 24px)",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.black
  }
}));

export default function Layout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="inherit"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <Icon className="material-icons">{open ? "menu_open" : "menu"}</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Router>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <img src={logo} alt="logo" />
          </div>
          <List>
            <Link to="/home" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Icon className="material-icons">home</Icon>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/profile" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <Icon className="material-icons">category</Icon>
                </ListItemIcon>
                <ListItemText primary={"Components"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.ghostElement} />
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/profile">
              <Components/>
            </Route>
          </Switch>
        </main>
      </Router>
    </div >
  );
}
