import { Route, Switch } from "react-router-dom";
import Home from './login/Home'
import Login from './login/Login'
import About from './components/About'
import ContactUs from "./components/ContactUs";
import Goverment_plan from "./components/Goverment_plan";
import Calender_menu from "./components/Calender_menu";
import Sell_crops from "./components/Sell_crops";
import Buy_crops from "./components/Buy_crops";
import signup from "./login/Signup"
import logout from "./components/Logout"
import Loading from "./components/Loading"
import YourCrop from "./components/YourCrop"
import Category_crops from "./components/Category_crops";
import Newsapi from "./components/Newsapi"
import Trial from "./components/Trial"
import Error404 from "./components/Error/Error404";
import Error from './components/Error/Error';
import AdminNav from "./components/Admin/AdminNav";
import Suggestion from "./components/Admin/Suggestion";
import TotalUser from "./components/Admin/TotalUser";
import TotalBuyer from "./components/Admin/TotalBuyer";
import TotalSeller from "./components/Admin/TotalSeller";
import './style/login.css'
import Signup from './login/Signup'
import extra_information from "./components/extra_information";
import Adminpanel from "./components/Adminpanel";
import enterotp from "./login/Enterotp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/Goverment_plan" component={Goverment_plan}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path={"/Sell_crops"} component={Sell_crops}/>
        <Route exact path={"/Buy_crop"} component={Buy_crops}/>
        <Route exact path={"/Enter_details"} component={extra_information}/>
        <Route exact path={"/Adminpanel"} component={Adminpanel}/>
        <Route exact path={"/signup_email"} component={signup}/>
        <Route exact path={"/enterotp"} component={enterotp}/>
        <Route exact path="/logout" component={logout}/>
        <Route exact path="/loading" component={Loading}/>
        <Route exact path="/YourCrops" component={YourCrop}/>
        <Route exact path={"/Category_crops"} component={Category_crops}/>
        <Route exact path={"/news"} component={Newsapi}/>
        <Route exact path={"/Trial"} component={Trial}/>
        <Route exact path={'/AdminNav'} component={AdminNav}/>
        <Route exact path={'/Suggestion'} component={Suggestion}/>
        <Route exact path={'/TotalUser'} component={TotalUser}/>
        <Route exact path={'/TotalSeller'} component={TotalSeller}/>
        <Route exact path={'/TotalBuyer'} component={TotalBuyer}/>


        <Route path="*" component={Error404} />

      </Switch>
    
    </>
  );
}

export default App;
