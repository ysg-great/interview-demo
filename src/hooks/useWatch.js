import { useEffect, useRef } from "react";
const useWatch = (value, fn, config = { immediate: false})=>{

    const oldValue = useRef()
    const isfirst = useRef(true)
    //初次渲染不执行fn回调
    useEffect(()=>{
        if(!isfirst.current){
            console.log("1111")
            fn(value, oldValue.current)
        }else{
            isfirst.current = false
            if(config.immediate){
                console.log("2222")
                fn(value, oldValue.current)
            }
        }
        oldValue.current = value
    },[value])
}

export default useWatch