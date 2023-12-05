import './App.css';
import { useState } from 'react';
import companiesJson from './companies.json';
import technologiesJson from './technologies.json';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technologiesJson);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        {
          <Route
            path='/company/:slug'
            element={<CompanyPage companies={companies} />}
          />
        }
        <Route
          path='/tech/:techSlug'
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </>
  );
}

export default App;
