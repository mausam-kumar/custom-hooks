import React from 'react'
import {initState,reducer} from './reducer.js'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

function TodoList() {

    const [state,dispatch] = React.useReducer(reducer,initState)
    const [title,setTitle] = React.useState("")
    const [refresh,setRefresh] = React.useState(false)

    function handleChange(e){
        setTitle(e.target.value)
    }

    const fetchData = async () => {
        try {
            const payload = {
                url:`http://localhost:3001/post`,
                method:"get"
            }
    
            const {data} = await axios(payload)
            
            dispatch({
                type:"GET_TODO_SUCCESS",
                payload: data
            })
        } catch (error) {
            console.log(error.message);
            dispatch({ type:"GET_TODO_ERROR"})
        }

    }
    const postData = async () => {
        try {
            const payload = {
                url:`http://localhost:3001/post`,
                method:"post",
                data:{
                    title,
                    id:uuid()
                }
            }
    
            await axios(payload)
            setRefresh(prev => !prev)
            setTitle("")
            dispatch({
                type:"POST_TODO_SUCCESS",
            })
        } catch (error) {
            
            dispatch({ type:"POST_TODO_ERROR"})
            alert("Error: " + error.message)
        }

    }


    React.useEffect(() => {
        fetchData()
    },[refresh])

    return (
        <div>
            <span>Enter Something :</span>
            <input type="text" name="title" placeholder="Enter todo" value={title} onChange={(e) => handleChange(e)}/>
            <button onClick={postData}>ADD</button>

            {
                state.getTask.task.map((ele) => {
                    return(
                        <p key={ele.id}>{ele.title}</p>
                    )
                })
            }
        </div>
    )
}

export default TodoList
