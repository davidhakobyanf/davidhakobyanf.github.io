import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Projects} from "./components/Projects";
import {Footer} from "./components/Footer";
import {Education} from "./components/Education";
import {Courses} from "./components/Courses";
import {Certificates} from "./components/Certificates";
import {Employment} from "./components/Employment";
import {Languages} from "./components/Languages";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Education/>
            <Courses />
            <Employment />
            <Certificates/>
            <Languages/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
