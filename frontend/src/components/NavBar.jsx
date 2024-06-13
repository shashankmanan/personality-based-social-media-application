import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login"
import Logo from "../resources/expressify-logo-zip-file/png/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SpokeIcon from '@mui/icons-material/Spoke';

export default function NavBar({credentials}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isAuth,setIsAuth] = useState(credentials ? credentials : false)
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("auth"))
      setIsAuth(true)
  },[])
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () => {
    alert("logging out")
    localStorage.removeItem("auth")
    localStorage.removeItem("username")
    localStorage.removeItem("tribe")
    setIsAuth(false)
    navigate('/')
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(40, 44, 52, 1)" /* light grey color */ }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={Logo} alt="logo" style={{ height: "20px" }} />
            </Link>
          </Typography>
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
                {/* can add many more navbar items here */}
              {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>N</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              { isAuth ? <>
              <Link to="/account/profile">
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
              </Link>
              <Link to="/account/home">
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
              </MenuItem>
              </Link>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={logOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem> </>
               : <>
              <MenuItem onClick={() => navigate('/signin')}>
                <ListItemIcon>
                  <Login fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>
              <Link to = "/signup">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SpokeIcon fontSize="small" />
                </ListItemIcon>
                  Join Expressify
              </MenuItem>
              </Link>
              </> 
              }
            </Menu>
          </React.Fragment>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
