import React from 'react'

const useMergeState = ({initState}) => {

    const state = initState

    function setState(name,value){
        state = {
            ...state,
            [name]:value
        }
    }

    return {state,setState}
}

export default useMergeState