import Main from './pages/main/page';
import Sub1 from './pages/sub1/page';
import {Route, Routes,Link} from "react-router-dom"
import Card from './components/Card/Card';
import './App.css';
import Text from './image/mic.png'
function App() {
  return (
    <div className="App">
      <nav>
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
      </div>
      <Card 
        image = {<img class="first-li-img" src={Text} alt="이미지"/>}
        hi="Calculated Weather" 
        good="Bulit Wicket longer admire do barton vanity itself do in it."/>
      
      <Card 
        hi="1" 
        good="Bulit Wicket longer admire do barton vanity itself do in it."/>
    </div>

  );
}

export default App;
