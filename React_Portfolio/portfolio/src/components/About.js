import Button from 'react-bootstrap/Button'
import React, {useState} from 'react';
const About = (props) => {
    const [about,setAbout] = useState("I am a self taught full stack developer. I have been learning to code since 2021. I'am currently attending Coding Dojo Bootcamp where I have learned many tech stacks that helped me to grow!")
    return (
        <div className="about-summary">
            <h1>Hello, My name is Jonel!</h1>
            <p>{about} Take a peek of my <Button>projects!</Button> </p>
        </div>
    )
}
export default About;