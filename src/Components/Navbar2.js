import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
 import { styled, alpha } from "@mui/material/styles";
import logo from "../Images/logo-nav.png";
import "./Navbar2.css";
import { useLocalStorage } from "react-use-storage";

 import SearchIcon from "@mui/icons-material/Search";
  import InputBase from "@mui/material/InputBase";
 import { NavLink, useNavigate } from "react-router-dom";

const pages = ["Home", "Medecines", "About", "Contact"];
const settings = ["Profile", "Log in"];


function Navbar2() {
    const [islogin, setislogin, removeislogin] = useLocalStorage(
      "islogin",
      false
    );

  const [name, setName, removeName] = useLocalStorage("name", "");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [serachItem, setSerachItem] = React.useState("");
  let navigate = useNavigate(); 

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSerachItem(e.target.value);
   /* navigate("/search", {
      state: {
        serachItem: serachItem, //to send the word in input search to Display Item
      },
    });*/
   };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseLogout = () => {
    setAnchorElUser(null);
    setislogin(false)
  };


 

  return (
    <AppBar
      style={{ backgroundColor: " #e3f2fd", marginBottom: "0px" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="logo" src={logo} />
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span
                className="navbar-brand fw-bold fs-4"
                style={{ color: "black" }}
              >
                MEDAID
              </span>
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Medecines</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              position: "static",
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to={"/"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink to={"/displayMed"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Medecines
              </Button>
            </NavLink>
            <NavLink to={"/about"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                About
              </Button>
            </NavLink>
            <NavLink to={"/contact"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Contact
              </Button>
            </NavLink>
          </Box>
          
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleChangeSearch}
            />
          </form>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
{ islogin ? <div> <NavLink to={"/account"}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              </NavLink>    <NavLink to={"/login"}>
                <MenuItem onClick={handleCloseLogout}>
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
              </NavLink> </div>  :
              <div>
              <NavLink to={"/signup"}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Sign up</Typography>
                </MenuItem>
              </NavLink>    <NavLink to={"/login"}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Login </Typography>
                </MenuItem>
              </NavLink>
              </div>
              
              
              }

             
          
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar2;