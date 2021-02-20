import React from 'react'


export default class App extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            x: 1
        }
    }

    onClick = () => {
        this.setState((state) => {
            return {x: state.x + 1}
        })
        this.setState((state) => {
            return {x: state.x - 1}
        })
    }

    // shouldComponentUpdate(nextProps, newState) {
    //     if (newState.x === this.state.x) {
    //         return false
    //     } else {
    //         return true
    //     }
    //
    // }

    render() {
        console.log("render了一次")
        return (
            <div className="App">
                App
                <div>
                    {this.state.x}
                    <button onClick={this.onClick}>+1</button>
                    {/*<B n={this.state.x}/>*/}
                </div>
            </div>
        );
    }
}











