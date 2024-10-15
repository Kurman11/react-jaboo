import PageStyled from "./styled"; 

const { Container } = PageStyled;

export default function Main(){
  return(
  <Container>
    <div className="container">
      <div className="main-area1">1</div>
      <div className="main-area2">2</div>
      <div className="main-area3">3</div>
      <div className="main-area4">4</div>
      <div className="main-area5">5</div>
      <div className="main-area6">6</div>
      <div className="main-area7">7</div>
    </div>
  </Container>
  );
}