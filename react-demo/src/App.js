import React, {useState, useEffect} from 'react'

//函数组件
const App = props => {
    const [n, setN] = useState(1)
    const [m, setM] = useState(1)
    const onClickN = () => {
        setN(n + 1)
    }
    const onClickM = () => {
        setM(m + 1)
    }
    useEffect(() => {
        console.log('第一次渲染')
    }, [])

    useEffect(() => {
        console.log('n或m更新了')
    })



    return (
        <div>{n}
            <button onClick={onClickN}>n+1</button>
            <br/>
            {m}
            <button onClick={onClickM}>m+1</button>
        </div>
    )

}

export default App