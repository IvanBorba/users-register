/* eslint-disable react-hooks/exhaustive-deps */
import FeedbackCard from "../../components/FeedbackCard";
import { Container, HeadContainer, SlideGuide } from "../../globalStyles";
import { useState, useEffect } from "react";
import { usersRequest } from "../../Request/Request";
import { token, user_id } from "../../helpers";
import { useParams } from "react-router-dom";
import FeedbackTable from "../../components/FeedbackTable";
import { Switch, FormControlLabel } from "@material-ui/core";

const FeedbacksList = () => {
  const [list, setList] = useState([]);
  const [toggleCards, setToggleCards] = useState(false);
  const [path, setPath] = useState();

  const { id } = useParams();

  const handleLayout = () => {
    setToggleCards(!toggleCards);
  };

  const requestFeedback = async () => {
    console.log(path);
    setList(await usersRequest(token(), path));
  };

  useEffect(() => {
    setPath(id ? `/users/${id}/feedbacks/` : `/users/${user_id()}/feedbacks`);
  }, []);

  useEffect(async () => {
    console.log(path);
    requestFeedback();
  }, [path]);

  return (
    <>
      <HeadContainer>
        <h4>Alternar exibição</h4>
        <div>
          <FormControlLabel
            control={<Switch onChange={handleLayout} />}
            label={toggleCards ? "Cards" : "Table"}
          />
        </div>
      </HeadContainer>
      {!toggleCards && (
        <SlideGuide>
          Arraste para o lado para mais informações {">>"}
        </SlideGuide>
      )}
      <Container>
        {!toggleCards ? (
          <FeedbackTable info={list} />
        ) : (
          list.map((feedback, index) => {
            return <FeedbackCard key={index} feedback={feedback} />;
          })
        )}
      </Container>
    </>
  );
};

export default FeedbacksList;
