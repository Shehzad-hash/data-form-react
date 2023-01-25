import './App.css';
import CompanySchema from './components/CompanySchema';
import InstantProgramSchema from "./components/InstantProgramSchema"
import OneStepProgram from './components/OneStepProgram';
import PriceSchema from './components/PriceSchema';
import ThreeStepProgram from './components/ThreeStepProgram';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TwoStepProgram from './components/TwoStepProgram';
import Navigation from './components/Navigation';
function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route element={<CompanySchema/>} path="/"/>
      <Route element={<InstantProgramSchema/>} path="instantProgramSchema"/>
      <Route element={<OneStepProgram/>} path="oneStepProgram"/>
      <Route element={<PriceSchema/>} path="priceSchema"/>
      <Route element={<ThreeStepProgram/>} path="threeStepProgram"/>
      <Route element={<TwoStepProgram/>} path="twoStepProgram"/>
    </Routes>
    </BrowserRouter>
  
  

   

  
  );
}

export default App;
