import { useState } from 'react';
import Cv from './cv.js'
import ContactForm from './form.js'
import './App.css'
function App() {
  const [currentPage, setCurrentPage] = useState('cv');
  return (
    <>
      <div>
        <h1>My React App</h1>
        <nav>
          <button onClick={() => setCurrentPage('cv')}>View CV</button>
          <button onClick={() => setCurrentPage('form')}>Contact Form</button>
        </nav>
        <div>
          {currentPage === 'cv' ? <Cv/> : <ContactForm />}
        </div>
      </div>
    </>
  )
}
export default App

