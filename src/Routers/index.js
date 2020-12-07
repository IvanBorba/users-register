/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from "react-router-dom";
import SignUp from "../Pages/UserForm";
import Login from "../Pages/Login";
import MenuHome from "../components/MenuHome";
import MenuAuthenticated from "../components/MenuAuthenticated";
import UsersList from "../Pages/UsersList";
import FormFeedbacks from "../Pages/FormFeedback";
import { HomeIcon } from "../components/Icons";
import { IconContainer } from "../globalStyles";
import FeedbacksList from "../Pages/FeedbacksList";
import { token } from "../helpers";
import { useEffect, useState } from "react";
import Contact from "../Pages/Contact";

const Routers = () => {
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    token() !== null && setMenu("authenticated");
  }, []);

  return (
    <>
      {menu === "authenticated" ? <MenuAuthenticated /> : <MenuHome />}
      <Switch>
        {token() ? (
          <>
            <Route exact path="/users">
              <UsersList />
            </Route>
            <Route exact path="/feedbacks">
              <FeedbacksList />
            </Route>
            <Route path="/feedbacks/:id">
              <FeedbacksList />
            </Route>
            <Route exact path="/feedback-form/:id">
              <FormFeedbacks />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <IconContainer home>
                <HomeIcon />
              </IconContainer>
            </Route>
            <Route exact path="/login">
              <Login setMenu={setMenu} />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </>
        )}
      </Switch>
    </>
  );
};

export default Routers;
