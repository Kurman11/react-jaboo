import TextStyled from "./styled";

const {Container} = TextStyled;

function Text(props){
  return (
    <Container className="font-1">
      <h3>{props.text}</h3>
      <div className="first-div">{props.text1}</div>
    </Container>
  )
}

export default Text;