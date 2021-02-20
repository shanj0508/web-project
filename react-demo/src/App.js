import React from 'react'
// import "style.css"


export default class App extends React.Component {
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
    }

    render() {
        return (
            <div className="App">
                App <button onClick={this.onClick}>+1</button>
                <B n={this.state.x}/>
            </div>
        );
    }
}

class B extends React.Component {
    componentWillReceiveProps(newProps) {
        console.log('旧的 props 为')
        console.log(this.props)
        console.log('新的 props 为')
        console.log(newProps)
        // 注意 console 的延迟计算 bug
    }

    render() {
        return <div>B {this.props.n}</div>
    }
}










