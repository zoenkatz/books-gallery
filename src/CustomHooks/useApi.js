import {useEffect, useState} from "react";
import axios from 'axios'

const useApi = (endpoint, isExec = false) => {
    const [res, setResponse] = useState({data: null, error: ''});
    const getData = async () => {
        try {
            const response = await axios.get(endpoint);
            setResponse(response);
        }
        catch(e){
            setResponse({...res, error: res.error})
        }
    };

    useEffect(() => {
        if(isExec) {
            getData();
        }
    }, [endpoint, isExec]);


    return res;
};

export default useApi
