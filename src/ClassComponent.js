import React from 'react';
import ChildComponent from "./ChildComponent";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            componentType: 'Class'
        };
    }

    render() {
        return (
            <div>
                <h2>This is a {this.state.componentType} Component</h2>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
                <ChildComponent type='Class' />
            </div>
        );
    }
}