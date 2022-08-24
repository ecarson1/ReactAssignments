import { useState } from "react";
import Button from "./Button";

const DropDownButton = (props) => {
    const color = `btn btn-${props.color || 'primary'}`
    const [isDropDown, setDropDown] = useState(false);
    const show = (isDropDown) ? "show" : "" ;

    function toggleDropDown(){
        setDropDown(!isDropDown)
    }

    return (
        <div className="btn-group">
            <Button type="button" className={props.className || color}>
                { props.children || "Dropdown Button"}
            </Button>
            <div className="btn-group flex-column">
                <button id="btnGroupDrop1" type="button" className={color + " dropdown-toggle mr-1"} onClick={ toggleDropDown }></button>
                <div className={"dropdown-menu zindex-1 " + show} style={{position: "absolute"}}>
                    <a className="dropdown-item" href="#">Dropdown link</a>
                    <a className="dropdown-item" href="#">Dropdown link</a>
                </div>
            </div>
        </div>
    );
};
export default DropDownButton;