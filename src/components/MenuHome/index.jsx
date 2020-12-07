import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MenuHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  useEffect(() => {
    setMenuOpen(true);
  }, []);

  return (
    <div className={menuOpen ? "menu-open" : "menu"}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
          <Button color="inherit" onClick={handleSignUp}>
            Sign-up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuHome;
