import './App.css';
import CompanySchema from './components/CompanySchema';
import InstantProgramSchema from "./components/InstantProgramSchema"
import OneStepProgram from './components/OneStepProgram';
import PriceSchema from './components/PriceSchema';
import ThreeStepProgram from './components/ThreeStepProgram';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route element={<CompanySchema/>} path="/"/>
      <Route element={<InstantProgramSchema/>} path="instantProgramSchema"/>
      <Route element={<OneStepProgram/>} path="oneStepProgram"/>
      <Route element={<PriceSchema/>} path="priceSchema"/>
      <Route element={<ThreeStepProgram/>} path="threeStepProgram"/>
    </Routes>
    </BrowserRouter>
  
  

   

  
  );
}

export default App;
