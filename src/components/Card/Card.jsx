// function Button(props){
//   return <button type = {props.type}>{props.text}</button>;
// }

// export default Button;
import CardStyled from "./styled";

const {Container} = CardStyled;

function Card(props){
  return (
    <Container>
      <div class="first-li-div">
          {props.image}
          <div class="first-li-box"></div>
      </div>
        <div class="first-li-div1">{props.hi}</div>
        <div class="first-li-div2">{props.good}</div>
    </Container>
  )
}
export default Card;


