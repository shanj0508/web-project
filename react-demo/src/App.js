import React from 'react'


export default class App extends React.PureComponent {
    divRef = undefined;
    constructor(props) {
        super(props)
        this.state = {
            x: 1,
            width: undefined
        }
        this.divRef = React.createRef()
    }

    onClick = () => {
        this.setState((state) => {
            return {x: state.x + 1}
        })
    }

    componentDidMount() {
        const div = this.divRef.current
        const {width} = div.getBoundingClientRect()
        this.setState({width})
    }

    render() {
        return (
            <div ref={this.divRef}>
                Hello World，{this.state.width}
            </div>
        );
    }
}











