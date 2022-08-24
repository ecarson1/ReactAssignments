import { useState } from "react";

const Navbar = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const show = (isMenuOpen) ? "show" : "" ;
    const color = `navbar navbar-${props.textColor || 'dark'} bg-${props.bgColor || 'primary'} navbar-expand-lg my-2`
    
    function toggleMenu(){
        setMenuOpen(!isMenuOpen)
    }

    return (
        <nav className={props.className || color}>
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" onClick={ toggleMenu }>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + show}>
                {props.children || 
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home</a>
                    <a className="nav-item nav-link" href="/">Features</a>
                    <a className="nav-item nav-link" href="/">Pricing</a>
                    <a className="nav-item nav-link" href="/">About</a>
                </div>}
            </div>
        </nav>
    );
};
export default Navbar;