import React from 'react'


export default class App extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            x: 1,
            width:undefined
        }
    }

    onClick = () => {
        this.setState((state) => {
            return {x: state.x + 1}
        })
    }
    componentDidMount() {
        const div=document.getElementById('xxx')
        const {width}=div.getBoundingClientRect()
        this.setState({width})
    }

    render() {
        return (
            <div id="xxx">
                Hello World，{this.state.width}
            </div>
        );
    }
}











