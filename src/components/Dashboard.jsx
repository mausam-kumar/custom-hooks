import React from 'react'
import useTimeout from './useTimeOut.js'
import useFetch from './useFetch.js'

function Dashboard() {

    const [time,handleStart,handleStop,handlePause] = useTimeout()



    const initState = {
        count:0
    }

    const reducer = (state,action) => {
        switch (action.type) {
            case "INCREMENT_COUNTER":
                
                return{
                    ...state,
                    count: state.count+1
                }
            case "DECREMENT_COUNTER":
                
                return{
                    ...state,
                    count: state.count-1
                }
        
            default:
                break;
        }
    }

    const [state,dispatch] = React.useReducer(reducer,initState)

    const [name,setName] = React.useState("")

    function handleChange(e){
        setName(e.target.value)
    }

    const {data,fetchData} = useFetch()

    function debounce(func,delay){
        let id;
        clearTimeout(id)
        id = setTimeout(() => func(),delay)
    }

    function handleSearch(e){
        debounce(() =>fetchData(e.target.value),300)
        console.log("running");
    }
    
    return (
        <div>
            <div>
                <p>Timer : {time}</p>
                <button onClick={() => handleStart()} style={{marginRight:"10px"}}>Start</button>
                <button onClick={() => handlePause()} style={{marginRight:"10px"}}>Pause</button>
                <button onClick={() => handleStop()} style={{marginRight:"10px"}}>Stop</button>
            </div>
            <div>
                <p>Count : {state.count}</p>
                <button onClick={() => dispatch({
                    type:"INCREMENT_COUNTER"
                })}>ADD</button>
                <button onClick={() => dispatch({
                    type:"DECREMENT_COUNTER"
                })}>SUB</button>
            </div>

            <div>
                <span>Enter Username :</span>
                <input type="text" name="username"  placeholder="Enter username"  onChange={(e) =>handleSearch(e)} />
                <button onClick={handleSearch}>Search</button>

                {
                    data.map((ele) => {
                        return(
                            <p key={ele.login}>{ele.login}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard
