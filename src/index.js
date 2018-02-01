import React, { Component } from 'react';
import { render } from 'react-dom';
import reverse from './reverse';

import './index.css';

class App extends Component {
    constructor(): void {
        super();

        this.state = {
            loaded: false,
            wordCount: 0,
            totalChars: 0,
        };

        this.updateStuff = this.updateStuff.bind(this);
    }

    updateStuff() {
        const value = document.getElementById('sentence').value;

        this.setState({
            wordCount: value.length
                ? value
                      .trim()
                .replace(/\s+/gi, ' ')
                      .split(' ').length
                : 0,
            totalChars: value.length,
            reverse: reverse(value),
        });
    }

    render() {
        return (
            <div className="container">
                <label>Enter your sentence:</label>
                <input
                    id="sentence"
                    onChange={this.updateStuff}
                    placeholder="Hey! That's a string with stuff in it. I wonder if I can handle that?"
                />

                <p className="count">
                    count: {this.state.totalChars} | word: {this.state.wordCount}
                </p>

                <p>Reversed:<br /> {this.state.reverse}</p>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
