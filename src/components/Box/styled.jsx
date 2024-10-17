import styled from "styled-components";

const BoxStyled = {
  Container : styled.div`
  .second-li{
    flex-direction: column; 
    width: 302px; 
    height: 348px; 
    position: relative; 
    .second-li-div{
      width: 267px; 
      height: 314px; 
      background-color: white; 
      position: absolute;  
      right: 0; z-index: 1001; 
      border-radius: 15%;
      .second-li-div3{
        width: 67px; 
        height: 75px; 
        margin: auto; 
        position: relative; 
        margin-top: 30px;
        .first-li-box{
          width: 50px; 
          height:49px; 
          border-radius: 10px 30px; 
          background-color:#FFF1DA; 
          right: 0; 
          position: absolute;
        }
        .first-li-img{
          width: 40px; 
          height: 69px; 
          position: absolute; 
          z-index: 1001;
        }
      }
    }
  }
    
    .first-li-div1{
      font-family: "Open Sans", sans-serif; 
      font-size: 20px; 
      font-weight: 600;
      line-height: 27px; 
      text-align: center; 
      width: 190px; 
      height: 27px; 
      color: #1E1D4C; 
      margin-bottom: 15px;
    }

    .first-li-div2{
      font-family: Poppins; 
      font-size: 16px; 
      font-weight: 400; 
      line-height: 26px; 
      text-align: center; 
      width: 181px; 
      height: 78px; 
      color: #5E6282;
    }

    .second-li-box{
      width: 100px; 
      height:100px; 
      border-radius: 30px 10px; 
      background-color:#DF6951; 
      position: absolute; 
      bottom: 0;
    }
  `
}

export default BoxStyled;