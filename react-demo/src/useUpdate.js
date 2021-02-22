import {useEffect, useState} from "react";

const useUpdate = (fn, array) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(x => x + 1)
    }, array)

    useEffect(() => {
        if (count > 1) {
            fn()
        }

    }, [count])
}
export default useUpdate