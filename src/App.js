import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    state = {
            count: 0,
            color: 'red'
        }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let { count }=this.state
        this.setState({
            count: count+1
        });
    }

    render() {
        const { count } = this.state;
        const color = count%2 === 0 ? 'red' : 'green';
        return(
            <div>
                <h1 className= "number">{this.state.count}</h1>
                <div className={color}></div>
            </div>
        );
    };
}
