import React, {useState, useEffect} from 'react'
import useUpdate from './useUpdate.js'

//函数组件
const App = props => {
    const [n, setN] = useState(1)
    const onClick = () => {
        setN(n + 1)
    }


    useUpdate(() => {
        console.log('n更新了')
    }, [n])

    return (
        <div>{n}
            <button onClick={onClick}>+1</button>
        </div>
    )

}

export default App