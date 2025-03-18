import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import toast from "react-hot-toast";
import { fuguLogo } from "../../assets";

export const TopBar = () => {
  function clickOnMenu() {
    toast("Wait. Menu under construction!", { id: "menuToast", icon: "⏳" });
  }

  return (
    <AppBar sx={{ backgroundColor: "primary", height: 64 }} position="relative">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={fuguLogo} alt="fugu_logo.png" width={100} />
        <IconButton
          onClick={clickOnMenu}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 1,
            cursor: "pointer",
          }}
        >
          {<Menu />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
