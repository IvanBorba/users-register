import { useState } from "react";
import { useForm } from "react-hook-form";
import { FeedbackData, theme } from "../../helpers";
import { sendFeedback } from "../../Request/Request";
import { token } from "../../helpers";
import Rating from "@material-ui/lab/Rating";
import { Alert } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/core";
import {
  StyledPaper,
  FormContainer,
  StyledInputLabel,
  StyledInput,
  ButtonsContainer,
  StyledButton,
} from "../../globalStyles";
import { useParams, useHistory } from "react-router-dom";

const FormFeedbacks = () => {
  const { register, handleSubmit, unregister } = useForm();

  const [alert, setAlert] = useState();
  const [response, setResponse] = useState();

  const history = useHistory();

  const feedbackResponse = (result, alert, message) => {
    unregister("name");
    unregister("commit");
    unregister("grade");
    result.status === 201 &&
      setAlert({
        result: alert,
        message: message,
      });
    setResponse(true);
    setTimeout(() => setResponse(false), 4000);
  };

  const feedbackRedirect = (id) => {
    history.push(`/feedbacks/${id}`);
  };

  const Params = useParams();

  const handleFeedback = async (body) => {
    const data = { feedback: { ...body, grade: grade } };
    let result;
    try {
      result = await sendFeedback({
        token: token(),
        data: data,
        user_id: Params.id,
      });
      feedbackResponse(result, "success", '"Feedback cadastrado com sucesso"');
      setTimeout(() => feedbackRedirect(Params.id), 2000);
    } catch (error) {
      feedbackResponse(
        result,
        "error",
        "Mensagem não cadastrada, tente novamente mais tarde"
      );
    }
  };

  const [grade, setGrade] = useState();

  return (
    <>
      {response ? (
        <Alert severity={alert.result}>{alert.message}</Alert>
      ) : (
        <>
          <FormContainer activate height={50}>
            <StyledPaper mobile height={45}>
              <form onSubmit={handleSubmit(handleFeedback)}>
                {FeedbackData.map((input, index) => {
                  const { name, label, type } = input;
                  return (
                    <div key={index}>
                      <StyledInputLabel className="inputsLabel" htmlFor={name}>
                        {label}
                      </StyledInputLabel>
                      <StyledInput
                        name={name}
                        inputRef={register}
                        type={type}
                        id={name}
                      />
                    </div>
                  );
                })}
                <StyledInputLabel className="inputsLabel" htmlFor="grade">
                  Nota
                </StyledInputLabel>
                <Rating
                  id="grade"
                  precision={0.5}
                  onChange={(e) => {
                    setGrade(e.target.value * 2);
                  }}
                  name="grade"
                  max={5}
                  style={{ marginTop: "10px" }}
                />
                <ButtonsContainer>
                  <ThemeProvider theme={theme}>
                    <StyledButton
                      variant="contained"
                      type="submit"
                      color="primary"
                      className="requestButton"
                      style={{ marginBottom: "50px" }}
                    >
                      Enviar
                    </StyledButton>
                  </ThemeProvider>
                </ButtonsContainer>
              </form>
            </StyledPaper>
          </FormContainer>
        </>
      )}
    </>
  );
};

export default FormFeedbacks;
