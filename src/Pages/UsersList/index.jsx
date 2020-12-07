import UserTable from "../../components/UserTable";
import UserCard from "../../components/UserCard";
import { Container, HeadContainer, SlideGuide } from "../../globalStyles";
import TextField from "@material-ui/core/TextField";
import {
  ThemeProvider,
  CircularProgress,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { theme, token } from "../../helpers";
import { usersRequest } from "../../Request/Request";

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [toggleCards, setToggleCards] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const [list, setList] = useState([]);

  const requestUsers = async () => {
    const path = `/users`;
    setList(await usersRequest(token(), path));
    setLoading(false);
  };

  const handleLayout = () => {
    setToggleCards(!toggleCards);
  };

  useEffect(() => {
    setLoading(true);
    requestUsers();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <HeadContainer style={{ marginRight: "800px" }}>
            <div>
              <h4>Alternar exibição</h4>
              <div>
                <FormControlLabel
                  control={<Switch onChange={handleLayout} />}
                  label={toggleCards ? "Cards" : "Table"}
                />
              </div>
            </div>
            <h2>Usuários cadastrados</h2>
            <ThemeProvider theme={theme}>
              <TextField
                id="standard-search"
                helperText="Buscar usuário"
                type="search"
                color="primary"
                onChange={handleInput}
                value={input}
              />
            </ThemeProvider>
          </HeadContainer>
          {!toggleCards && (
            <SlideGuide>
              Arraste para o lado para mais informações {">>"}
            </SlideGuide>
          )}
          <Container>
            {!toggleCards ? (
              <UserTable info={list} input={input} />
            ) : input ? (
              list
                .filter((user) => user.name?.toLowerCase().includes(input))
                .map((user, index) => <UserCard key={index} user={user} />)
            ) : (
              list.map((user, index) => <UserCard key={index} user={user} />)
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default UsersList;
