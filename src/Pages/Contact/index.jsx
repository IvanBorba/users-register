import { StyledPaper } from "../../globalStyles";
import ivan from "../../img/ivan.png";
import matheus from "../../img/matheus.png";
import kenzie from "../../img/selokenzie.svg";
import "./index.css";
import { Paper } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="container">
      <div>
        <Paper elevation={5} square={true} className="ivanDiv">
          <h3>Ivan Borba</h3>
          <img
            alt="Ivan"
            src={ivan}
            style={{ width: "150px", alignSelf: "center" }}
          />
          <p style={{ marginTop: "7px", marginBottom: "7px" }}>
            Telefone: (47) 99111 - 4205
          </p>
          <p style={{ marginTop: "7px", marginBottom: "7px" }}>
            E-mail: mrborbaivan@gmail.com
          </p>
        </Paper>
      </div>
      <div>
        <Paper elevation={5} square={true} className="matheusDiv">
          <h3>Matheus Gasparotto Andrade</h3>
          <img
            alt="Matheus"
            src={matheus}
            style={{ width: "150px", alignSelf: "center" }}
          />
          <p style={{ marginTop: "7px", marginBottom: "7px" }}>
            Telefone: (44) 99757 - 5252
          </p>
          <p style={{ marginTop: "7px", marginBottom: "7px" }}>
            E-mail: matheus.gandrade2018@gmail.com
          </p>
        </Paper>
      </div>
      <img
        alt="kenziemade"
        src={kenzie}
        style={{ width: "150px" }}
        className="kenziemade"
      />
    </div>
  );
};

export default Contact;
