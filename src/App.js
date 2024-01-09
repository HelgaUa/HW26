import {Component} from "react";
import './App.css';
import Button from './components/Button.js';
import Emoji from "./components/Emoji.js";
import {v4 as uuidv4} from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiCounters: {},
            winner: undefined,
        }
    }

    onEmojiClick = (id) => {
        console.log(id);
        this.setState((prevState) => {

            const {emojiCounters} = prevState;
            const updatedCounters = {...emojiCounters};

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

    render() {
        const {emojiCounters, winner} = this.state;
        const {id} = this.props;
        return (
            <div className="App">
                <h1>Голосування за найкращий смайлик</h1>
                <Emoji
                    id={uuidv4()}
                    src={require('./images/1.png')}
                    onClick={() => this.onEmojiClick(id)}
                    alt='Emoji-smile'
                />
                <span className='number-of-clicks'>{emojiCounters[id] || 0}</span>

                <Emoji
                    id={uuidv4()}
                    src={require('./images/2.png')}
                    onClick={() => this.onEmojiClick(id)}
                    alt='Emoji-party'
                />
                <span className='number-of-clicks'>{emojiCounters[id] || 0}</span>

                <Emoji
                    id={uuidv4()}
                    src={require('./images/3.png')}
                    onClick={() => this.onEmojiClick(id)}
                    alt='Emoji-tongue'
                />
                <span className='number-of-clicks'>{emojiCounters[id] || 0}</span>

                <Emoji
                    id={uuidv4()}
                    src={require('./images/4.png')}
                    onClick={() => this.onEmojiClick(id)}
                    alt='Emoji-hearts'
                />
                <span className='number-of-clicks'>{emojiCounters[id] || 0}</span>

                <Emoji
                    id={uuidv4()}
                    src={require('./images/5.png')}
                    onClick={() => this.onEmojiClick(id)}
                    alt='Emoji-sunglasses'
                />
                <span className='number-of-clicks'>{emojiCounters[id] || 0}</span>
                <br/>
                <Button className='btn-outline-success' name='Show results'/>
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
