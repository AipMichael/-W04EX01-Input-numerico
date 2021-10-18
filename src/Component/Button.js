function Button({ text }) {
    return <button className={`button__${text}`}>{text}</button>;
}

export default Button;
