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
        // this.setState((state) => {
        //     return {x: state.x - 1}
        // })
    }

    render() {
        console.log("render了一次")
        let message
        if (this.state.x % 2 === 0) {
            message = <div>偶数</div>
        } else {
            message = <div>奇数</div>
        }
        return (
            <React.Fragment>
                <div>
                    {message}
                </div>
                <div className="App">
                    App
                    <div>
                        {this.state.x}
                        <button onClick={this.onClick}>+1</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}











