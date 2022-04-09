

const Home = (props) => {
    return (
        <body className="wrapper">
            <div className="navbar">
                <h1>JNL</h1>
                <ul className="links">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <hr/>
            </div>
            <hr/>
            <div className="container">
                <div className="about">
                    <div className="about-summary">
                        <h1>Hello, My name is Jonel!</h1>
                        <p>I am a self taught full stack developer. I have been learning to code since 2021. I'am currently attending Coding Dojo Bootcamp where I have learned many tech stacks that helped me to grow! Take a peek of my projects! </p>
                    </div>
                </div>
                <footer>
                    <ul>
                        <li>Resume</li>
                        <li>LinkedIn</li>
                        <li>Github</li>
                        <li>Email</li>
                    </ul>
                </footer>
            </div>
            
        </body>
    )
}
export default Home;