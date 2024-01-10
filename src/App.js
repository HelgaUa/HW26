import {Component} from "react";
import './App.css';
import Button from './components/Button.js';
import Emoji from "./components/Emoji.js";
import Emoji1 from './images/1.png'
import Emoji2 from './images/2.png'
import Emoji3 from './images/3.png'
import Emoji4 from './images/4.png'
import Emoji5 from './images/5.png'

const LOCAL_STORAGE_KEY = 'emj';

const data = [
    {id: 'Emoji-smile', src: Emoji1, alt: 'Emoji-smile'},
    {id: 'Emoji-party', src: Emoji2, alt: 'Emoji-party'},
    {id: 'Emoji-wink', src: Emoji3, alt: 'Emoji-wink'},
    {id: 'Emoji-hearts', src: Emoji4, alt: 'Emoji-hearts'},
    {id: 'Emoji-sunglasses', src: Emoji5, alt: 'Emoji-sunglasses'}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiCounters: {},
            winner: undefined,
        }
    }

    componentDidMount() {
        const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localStorageData !== null) {
            console.log(localStorageData);
            this.setState({
                emojiCounters: JSON.parse(localStorageData),
            })
        }
    }

    onEmojiClick = (id) => {
        this.setState((prevState) => {
            const {emojiCounters} = prevState;
            const updatedCounters = {...emojiCounters};

            updatedCounters[id] === undefined ? updatedCounters[id] = 1 : updatedCounters[id]++;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCounters));

            return {
                emojiCounters: updatedCounters,
            };
        });
    };

    onShowResultsClick = () => {
        const {emojiCounters} = this.state;
        let winnerVotes = 0;
        let winnerId;
        for (const emojiId in emojiCounters) {
            if (emojiCounters[emojiId] > winnerVotes) {
                winnerVotes = emojiCounters[emojiId];
                winnerId = emojiId;
            }
        }
        this.setState({
            winner: winnerId,
        })
    }

    onResetClick = () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.setState({
            emojiCounters: {},
            winner: undefined,
        });
    }

    render() {
        const {emojiCounters, winner} = this.state;
        return (
            <div className="App">
                <h1>Голосування за найкращий смайлик</h1>
                {data.map((emoji) => {
                    return (
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

                <Button
                    className='btn-outline-danger'
                    name='Reset'
                    onClick={this.onResetClick}
                />

                <div className='winner-img'>
                    {winner && (
                        <div>
                            <h2>Результати голосування</h2>
                            <h3>Переможець:</h3>
                            <img src={data.find((emoji) => emoji.id === winner).src}
                                 className='winner-emoji'
                                 alt="Winner-emoji"/>
                            <p>{`Кількість голосів: ${emojiCounters[winner] || 0}`}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
