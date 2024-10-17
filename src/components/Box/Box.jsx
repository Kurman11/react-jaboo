import BoxStyled from './styled'

const {Container} = BoxStyled;

function Box(props){
  return (
    <Container>
        <li>
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
          </div>
        </li>
    </Container>
  )
}

export default Box;