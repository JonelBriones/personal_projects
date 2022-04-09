const Navbar = (props) => {
    return (
        <div className="navbar">
            <a href="#"><h1>JNL</h1></a>
            <ul className="nav-links">
                <li><a href="#" className="link-button">Home</a></li>
                <li><a href="#" className="link-button">Projects</a></li>
                <li><a href="#" className="link-button">About</a></li>
                <li><a href="#" className="link-button">Contact</a></li>
            </ul>
            <hr/>
        </div>
    )
}
export default Navbar;