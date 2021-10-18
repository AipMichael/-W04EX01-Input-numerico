import "./input.css";

function Input({ originalValue }) {
    return (
        <input
            className={`input__${originalValue}`}
            value={originalValue}
            readOnly
        ></input>
    );
}

export default Input;
