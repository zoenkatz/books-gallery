import React, {useState, useEffect} from 'react'


const useDebounce = (time = 0, val) => {
    const [debounceQuery, setDebounceQuery] = useState(val);
    let timeout = null;

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setDebounceQuery(val)
        }, time)


        return () => {
            clearTimeout(timeout);
        }
    }, [time, val]);

    return {debounceQuery}

}

export default useDebounce
