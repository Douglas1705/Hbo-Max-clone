import { ButtonNav } from "../buttons/buttonAssinature";
import PropTypes from "prop-types";
import { CardsPlanStyle } from "./cardsPlanStyle";

function CardsPlan(props) {
  return (
    <CardsPlanStyle>
      <h3>ola, {props.title2} </h3>
      <span></span>
      <p> {props.description} </p>
      <p> {props.price} </p>
      <ButtonNav>ESCOLHA SEU PLANO</ButtonNav>
    </CardsPlanStyle>
  );
}

// Definindo os tipos das props esperadas
CardsPlan.propTypes = {
  title2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardsPlan;
