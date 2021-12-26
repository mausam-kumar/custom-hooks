import React from 'react';

const useTimeout = () => {
    const [time,setTime] = React.useState(0)
    const [id,setId] = React.useState(undefined)
    
    function startTimer(){
        if(id === undefined){

            var res = setInterval(() =>{
                setTime(prev => prev+1)
                
            },1000)
            setId(res)
        }
        
    }
    function stopTimer(){
        console.log("stop",id)
        clearInterval(id)
        setTime(0)
    }

    function pauseTimer(){
        console.log("pause",id)
        clearInterval(id)
    }

    return [time,startTimer,stopTimer,pauseTimer]
}

export default useTimeout