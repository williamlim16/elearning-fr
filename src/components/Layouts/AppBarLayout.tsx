import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

type Props = {
  children: JSX.Element;
};

function AppBarLayout({ children }: Props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer}>
        hello
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Elearning
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          padding: 5,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default AppBarLayout;
