// import Main from './pages/main/page';
// import Sub1 from './pages/sub1/page';
// import {Route, Routes,Link} from "react-router-dom"
import Card from './components/Card/Card';
import './App.css';
import img from './image/mic.png'
import Text from './components/Text/Text'

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li><Link to="/main">main</Link></li>
          <li><Link to ="/sub1">sub1</Link></li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/sub1' element={<Sub1/>}></Route>
        </Routes>
      </div> */}
        <Text
          text = 'CATEGORY'
          text1 ='We Offer Best Services'
        />
      <ul>
        <Card 
          image = {<img className="first-li-img" src={img} alt="이미지"/>}
          text="Calculated Weather" 
          text1="Bulit Wicket longer admire do barton vanity itself do in it."/>

        <Card 
          isOn
          image = {<img className="first-li-img" src={img} alt="이미지"/>}
          text="Best Flights" 
          text1="Engrossed listening. Park gate sell they west hard for the."/>

        <Card 
          image = {<img className="first-li-img" src={img} alt="이미지"/>}
          text="Local Events" 
          text1="Barton vanity itself do in it.Preferd to men it engrossed listening."/>

        <Card 
          image = {<img className="first-li-img" src={img} alt="이미지"/>}
          text="Customization" 
          text1="We deliver outsourced aviation services for military customers."/>
      </ul>
    </div>

  );
}

export default App;
