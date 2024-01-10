import {Component} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class Button extends Component {
    render() {
        const { className, name, onClick } = this.props;
        return (
            <button
                type="button"
                className={`btn ${className}`}
                onClick={onClick}
            >
                {name}

            </button>
        )
    }
}

export default Button;