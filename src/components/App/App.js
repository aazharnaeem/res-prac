import Grid from '../pages/Grid/GridLevelOne';
import Home from '../pages/Home/home';
import UseRef from '../pages/logic/useRef/useRef';
import _404 from '../pages/404/_404'
import String from '../pages/logic/String'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout';

function App() {
  return (
    <div>

      <Router>
        <Layout>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/grid' element={<Grid />} />
            <Route path='/ref' element={<UseRef />} />
            <Route path='/string' element={<String />} />
            <Route path='/*' element={<_404 />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
