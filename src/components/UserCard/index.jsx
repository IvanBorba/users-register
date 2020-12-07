import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ButtonsContainer } from "../../globalStyles";

const useStyles = makeStyles({
  root: {
    width: 230,
    margin: 10,
    marginTop: 20,
  },
});

const UserCard = ({ user }) => {
  const classes = useStyles();

  const { id, name, image_url, email } = user;

  const history = useHistory();

  const go_Feedbacks = () => {
    history.push(`/feedbacks/${id}`);
  };

  const go_newFeedback = () => {
    history.push(`/feedback-form/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          src={
            image_url
              ? image_url
              : "https://image.freepik.com/fotos-gratis/closeup-de-pato-borracha_53876-32073.jpg"
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.user}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonsContainer>
          <Button
            size="small"
            color="primary"
            onClick={go_Feedbacks}
            style={{ marginLeft: "10px" }}
          >
            Feedbacks
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={go_newFeedback}
            style={{ marginLeft: "10px" }}
          >
            Novo Feedback
          </Button>
        </ButtonsContainer>
      </CardActions>
    </Card>
  );
};

export default UserCard;
