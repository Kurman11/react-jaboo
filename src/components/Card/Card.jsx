// function Button(props){
//   return <button type = {props.type}>{props.text}</button>;
// }

// export default Button;
import CardStyled from "./styled";

const {Container} = CardStyled;

function Card(props){
  return (
    <Container  className={props.isOn ? 'li' : ''}>
          {props.isOn ? 
            <div className="second-li">
              <div className="second-li-div">
                <div className="second-li-div3">
                    {props.image}
                    <div className="first-li-box"></div>
                </div>
                  <div className="first-li-div1">{props.text}</div>
                  <div className="first-li-div2">{props.text1}</div>
              </div>
              <div className="second-li-box"></div>
            </div> : 
          <>
            <div className="first-li-div">
                {props.image}
                <div className="first-li-box"></div>
            </div>
              <div className="first-li-div1">{props.text}</div>
              <div className="first-li-div2">{props.text1}</div>
          </>}
    </Container>
  )
}
export default Card;


