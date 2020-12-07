import { ThemeProvider, CircularProgress } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { Request } from "../../Request/Request";
import { LoginData, theme, schema_Login } from "../../helpers";
import { useHistory } from "react-router-dom";
import { LoginIcon } from "../../components/Icons/index";
import {
  FormContainer,
  StyledPaper,
  StyledInputLabel,
  StyledInput,
  StyledButton,
  ButtonsContainer,
  IconContainer,
  StyledErrors,
} from "../../globalStyles";

const Login = ({ setMenu }) => {
  const [loading, setLoading] = useState(false);
  const [errorsServer, setErrorsServer] = useState();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema_Login),
  });

  const Authenticate = async (auth_token, user_id) => {
    window.localStorage.setItem("auth_token", auth_token);
    window.localStorage.setItem("user_id", user_id);
    setLoading(false);
    history.push("/users");
    setMenu("authenticated");
  };

  const handleLogin = async (data) => {
    setLoading(true);
    const request = { data: data, path: "authenticate" };
    let result;
    try {
      result = await Request(request);
      const { auth_token } = result.data;
      const { id } = result.data.user;
      Authenticate(auth_token, id);
    } catch (error) {
      setLoading(false);
      setErrorsServer({ message: "Usuário ou senha invalidos" });
    }

    console.log(result);
  };

  const [activate, setActivate] = useState(false);

  useEffect(() => {
    setActivate(true);
  }, []);

  return (
    <FormContainer height={80} activate={activate}>
      <ThemeProvider theme={theme}>
        {loading ? (
          <CircularProgress />
        ) : (
          <StyledPaper
            height={40}
            elevation={3}
            square={true}
            style={{ paddingTop: "15px" }}
          >
            <form onSubmit={handleSubmit(handleLogin)}>
              {LoginData.map((input, index) => {
                const { name, type, label } = input;

                return (
                  <div key={index}>
                    <StyledInputLabel htmlFor={name}>{label}</StyledInputLabel>
                    <StyledInput
                      id={name}
                      name={name}
                      label={label}
                      inputRef={register}
                      type={type}
                    />
                  </div>
                );
              })}
              <StyledErrors>
                {errors.user?.message ||
                  errors.password?.message ||
                  errorsServer?.message}
              </StyledErrors>
              <ButtonsContainer>
                <StyledButton
                  height={7}
                  width={9}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  entrar
                </StyledButton>
              </ButtonsContainer>
            </form>
          </StyledPaper>
        )}
      </ThemeProvider>
      <IconContainer>
        <LoginIcon />
      </IconContainer>
    </FormContainer>
  );
};

export default Login;
