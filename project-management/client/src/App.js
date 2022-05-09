import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectList from './pages/ProjectList'
import ProjectDetails from './pages/ProjectDetails'
import EditProject from './pages/EditProject'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectList />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/projects/edit/:id' element={<EditProject />} />

      </Routes>
    </div>
  );
}

export default App;
