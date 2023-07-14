import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/header";
import Home from "./components/home";
// import LoginForm from './components/LoginForm';
import Footer from "./components/footer";
import Navbar from './components/Navbar';
import Signup from './components/signup';
import Login from './components/login';
import Land from './components/land';
import Fruits from './components/fruits';
import Vegi from './components/vegi';
import Meat from './components/meat';
import Diary from './components/diary';
import Recipe from './components/recipe';
import CarBookingForm from './components/CarBookingForm'
import CustomerSupportForm from './components/CustomerSupportForm';
import RescheduleForm from './components/RescheduleForm';
import ClientReview from './components/ClientReview';
// import LoginForm from './components/LoginForm';
import Findrecipe from './components/findrecipe';
//import UserPopup from './components/UserPopup';
import Location from './components/Location';
import PaymentPage from './components/PaymentPage';
import AboutUs from './components/AboutUs';
import CostEstimation from './components/CostEstimation';
function App() {
  return (
    <BrowserRouter>
   
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Recipe" element={<Recipe/>}/>
    <Route path="/land" element={<Land/>}/>
    <Route path="/fruits" element={<Fruits/>}/>
    <Route path="/vegi" element={<Vegi/>}/>
    <Route path="/meat" element={<Meat/>}/>
    <Route path="/diary" element={<Diary/>}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/findrecipe" element={<Findrecipe/>}/>
    <Route path="/CarBookingForm" element={<CarBookingForm/>}/>
    <Route path="/CustomerSUpportForm" element={<CustomerSupportForm/>}/>
    <Route path="/RescheduleForm" element={<RescheduleForm/>}/>
    <Route path="/ClientReview" element={<ClientReview/>}/>
    <Route path="/Location" element={<Location/>}/>
    <Route path="/PaymentPage" element={<PaymentPage/>}/>
    <Route path="/CostEstimation" element={<CostEstimation/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
