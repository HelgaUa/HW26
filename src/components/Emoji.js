import { Component } from "react";

class Emoji extends Component {
    render() {
        const { src, alt, width, height, id, onClick }= this.props
        return (
                <img className='emoji-item'
                     src={src}
                     id={id}
                     onClick={() => onClick(id)}
                     alt={alt}
                     style={{width, height}} />
        )

}
}
export default Emoji;
