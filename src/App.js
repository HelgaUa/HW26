import {Component} from "react";
import './App.css';
import Button from './components/Button.js';
import Emoji from "./components/Emoji.js";
import Emoji1 from './images/1.png'
import Emoji2 from './images/2.png'
import Emoji3 from './images/3.png'
import Emoji4 from './images/4.png'
import Emoji5 from './images/5.png'
import {v4 as uuidv4} from 'uuid';

const data = [
    {id: uuidv4(), src: Emoji1, alt: 'Emoji-smile'},
    {id: uuidv4(), src: Emoji2, alt: 'Emoji-party'},
    {id: uuidv4(), src: Emoji3, alt: 'Emoji-wink'},
    {id: uuidv4(), src: Emoji4, alt: 'Emoji-hearts'},
    {id: uuidv4(), src: Emoji5, alt: 'Emoji-sunglasses'}
];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiCounters: {},
            winner: undefined,
        }
    }

    onEmojiClick = (id) => {
        this.setState((prevState) => {
            const {emojiCounters} = prevState;
            console.log('emojiCounters-', emojiCounters);
            const updatedCounters = {...emojiCounters};
            console.log('updatedCounters-', updatedCounters);

            if (updatedCounters[id] === undefined) {
                updatedCounters[id] = 1;
            } else {
                updatedCounters[id]++;
            }
            return {
                emojiCounters: updatedCounters,
            };
        });
    };

    onShowResultsClick = () => {
console.log('show');

    }

    render() {
        const {emojiCounters, winner} = this.state;

        return (
            <div className="App">
                <h1>Голосування за найкращий смайлик</h1>
                {data.map((emoji) =>{
                    return(
                        <div key={emoji.id} className='emoji-wrapper'>
                            <Emoji
                                id={emoji.id}
                                src={emoji.src}
                                onClick={(id) => this.onEmojiClick(id)}
                                alt={emoji.alt}
                            />
                            <span className='number-of-clicks'>{emojiCounters[emoji.id] || 0}</span>

                        </div>
                    )
                })}

                <br/>
                <Button
                    className='btn-outline-success'
                    name='Show results'
                    onClick={this.onShowResultsClick}
                />
                <Button className='btn-outline-danger' name='Reset'/>

                <h2>Результати голосування:</h2>
                <h3>Переможець:</h3>
                <div className='winner-img'></div>
                <p>Кількість голосів:</p>

            </div>
        );
    }

}

export default App;
