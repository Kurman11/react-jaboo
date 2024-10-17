import styled from "styled-components";

const CardStyled = {
  Container : styled.div`
    width:200px;
    .first-li-div{
      width: 67px; 
      height: 75px; 
      position: relative; 
      margin: auto; 
      margin-top: 30px; 
      .first-li-box{
        width: 50px; 
        height:49px; 
        border-radius: 10px 30px; 
        background-color:#FFF1DA; 
        right: 0; 
        position: absolute;
      }
    }
    .first-li-div1{
      font-family: Open Sans; 
      font-size: 20px; 
      font-weight: 600;
      line-height: 27px; 
      text-align: center; 
      width: 190px; 
      height: 27px; 
      color: #1E1D4C; 
      margin-bottom: 15px;
    }

    .first-li-div2{font-family: Poppins; font-size: 16px; font-weight: 400; line-height: 26px; text-align: center; width: 181px; height: 78px; color: #5E6282;}
  `
}

export default CardStyled