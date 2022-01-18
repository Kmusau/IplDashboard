import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />}>
            {/* <TeamPage></TeamPage> */}
          </Route>
        </Routes>
          
      </Router>
      
    </div>
  );
}

export default App;
