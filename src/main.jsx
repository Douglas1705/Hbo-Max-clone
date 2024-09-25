import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './globalStyles/globalStyles';
import NavBar from './components/nav/NavBar'
import Header from './components/header/header';
import Plan from './components/plansSection/planSection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />        
    <NavBar />  
    <Header />
    <Plan />
  </StrictMode>,
)
