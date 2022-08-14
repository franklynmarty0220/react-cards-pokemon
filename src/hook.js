import React, {useState, useEffect} from "react";

function useFlipped(){
    const [isFlipped, setFlipped] = useState(true)

    const flip = () => {
        setFlipped(up => !up);

    };

    return [isFlipped, flip];
}

function useLocalStorage(key, initialVal= []){
    const [value, setVal] = useState(initialVal)
    if(localStorage.getItem(key)){
        initVal = JSON.parse(localStorage.getItem(key));
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value,key]);

    return [value,setVal]
}

function useAxios(key, url){
    const [res, setRes] = useLocalStorage(key);
    const addResData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${url}${restOfUrl}`);
        setRes(data => [...data, formatter(response.data)]);
    };

    const clearRes = () => setRes([]);

    return [res, addResData, clearRes];
}

export default { useAxios, useFlipped, useLocalStorage};