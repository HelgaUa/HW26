import { Component } from "react";

class Emoji extends Component {
    render() {
        const { src, alt, width, height, id, onClick }= this.props
        return (
            <div className='emoji-wrapper'>
                <img className='emoji-item'
                     src={src}
                     id={id}
                     onClick={onClick}
                     alt={alt}
                     style={{width, height}} />
            </div>
        )

}
}
export default Emoji;
