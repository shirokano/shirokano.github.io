import * as React from 'react';
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
import Grid from '@mui/material/Grid';
import AdbIcon from '@mui/icons-material/Adb';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import logo from '../../s-logo.svg';
import './styles.scss';

export const pages = ['CV', 'Blog', 'Me', 'Lab'];

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [overPage, setOverPage] = React.useState<null | string>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} className="nav-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <img
            src={logo}
            className="my-logo"
            alt="logo"
            style={{ maxHeight: '50%', paddingRight: 5, borderRadius: '5px', color: '#212121' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            {'mon_gohl'}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleClick}>
                  <Typography textAlign="center" data-testid={page}>
                    {/* {over ? '/' + page : page} */}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  onMouseEnter={handleClick}
                  className="nav-buttons"
                  onMouseOver={() => setOverPage(page)}
                  onMouseOut={() => setOverPage(null)}>
                  {overPage === page ? '/' + page : page}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Grid container direction="row" justifyContent="bottom" alignItems="center" spacing={1}>
              <Grid item>
                <a href="https://github.com/gohls" target="_blank" rel="noreferrer">
                  <GitHubIcon style={{ fontSize: 30, color: '#cdcdcd' }} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://www.linkedin.com/in/sagohl/" target="_blank" rel="noreferrer">
                  <LinkedInIcon style={{ fontSize: 36, color: '#cdcdcd' }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://drive.google.com/file/d/1TiuEILXBB5mKFQGa3twcOei7Ckj4b5lA/view"
                  target="_blank"
                  rel="noreferrer">
                  <FolderSharedIcon style={{ fontSize: 40, color: '#cdcdcd' }} />
                </a>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
