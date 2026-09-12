import "../App.css";
import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className="my-3 sticky top-0 z-50 bg-white">
            <div className="flex justify-between items-center container mx-auto h-20">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul className="flex gap-4 justify-items-center">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-4">
                    <button>Sign In</button>
                    <button className="nav-sign">Sign Up</button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;