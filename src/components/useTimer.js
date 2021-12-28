import React from 'react'


const useTimer = ({initTime}) => {
    const [state,setState] = React.useState(initTime)
    let id;
    const startTimer = () => {
        id = setInterval(() =>{
            setState(prev => prev-1)
        })
    }

    const stopTimer = () => {
        clearInterval(id)
    }

    const resetTimer = () => {
        clearInterval(id)
        setState(0)
    }

    return {state,startTimer,stopTimer,resetTimer}
}

const useStopwatch = () => {
    const [state,setState] = React.useState(0)

    let id;
    const startStopwatch = () => {
        id = setInterval(() =>{
            setState(prev => prev+1)
        })

    }

    const stopStopwatch = () => {
        clearInterval(id)
    }

    const resetStopwatch = () => {
        clearInterval(id)
        setState(0)
    }

    return {state,startStopwatch,resetStopwatch,stopStopwatch}
}

export {useTimer,useStopwatch}