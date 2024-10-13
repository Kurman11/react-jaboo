import Main from './pages/main/page';
import Sub1 from './pages/sub1/page';
import {Route, Routes,Link} from "react-router-dom"
import './App.css';

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
    </div>
  );
}

export default App;
