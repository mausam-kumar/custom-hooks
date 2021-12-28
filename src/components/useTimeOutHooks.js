import React from 'react';

function useTimeOutHooks({initTime}){
    const [state,setState] = React.useState(false)

    setTimeout(() =>{
        setState(true)
    },initTime*1000)

    return {state}
}

export default useTimeOutHooks