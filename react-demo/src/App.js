import React, {useState} from 'react'

//类组件
// class App extends React.PureComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             x: 1
//         }
//     }
//
//     onClick = () => {
//         this.setState((state) => {
//             return {x: state.x + 1}
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.x}
//                 <button onClick={this.onClick}>+1</button>
//
//             </div>
//         );
//     }
// }
//函数组件
const App = props => {
    const [n, setN] = useState(1)
    const onClick = () => {
        setN(n + 1)
    }
    return (
        <div>{n}
            <button onClick={onClick}>+1</button>
        </div>
    )

}

export default App














