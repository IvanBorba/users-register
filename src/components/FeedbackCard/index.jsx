import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 30,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FeedbackCard = ({ feedback }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {feedback.name}
        </Typography>
        <Typography variant="body2" component="p">
          {feedback.comment}
        </Typography>
        <Typography component="legend">Nota</Typography>
        <Rating
          name="grade"
          value={feedback.grade / 2}
          precision={0.5}
          max={5}
          onClick={null}
        />
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
