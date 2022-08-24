const Button = (props) => {
    const color = `btn btn-${props.color || 'primary'} mr-1`
    return (
        <button
            className={props.className || color}
        >
            {props.children || "Click Me"}
        </button>
    );
};
export default Button;