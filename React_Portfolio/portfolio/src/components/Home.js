import { Link } from 'react-router-dom';
import portrait from '../img/portrait.png';
import Skills from './Skills';
import Navbar from './Navbar';
import About from './About';
const Home = (props) => {
    return (
        <div className="wrapper">
            <Navbar/>
            <hr/>
            <div className="container">
                <div className="about">
                    <img src={portrait} className="portrait"/>
                    <About/>
                </div>

                <Skills/>
                <div className="socials">
                <ul className="socials-links">
                    <li>Resume</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Email</li>
                </ul>
                </div>
                <footer>
                </footer>
                <hr/>
            </div>
        </div>
    )
}
export default Home;