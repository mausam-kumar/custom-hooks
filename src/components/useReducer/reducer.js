import React from 'react';

export const initState = {
    getTask:{
        isLoading:false,
        isError:false,
        task:[]
    },
    postTask:{
        isLoading:false,
        isError:false
    }

}

export const reducer = (state,action) => {
    switch (action.type) {
        case "GET_TODO_SUCCESS":
            
            return{
                ...state,
                getTask:{
                    ...state.getTask,
                    isLoading:false,
                    isError:false,
                    task:[...action.payload]
                }
            }
        case "GET_TODO_FAILURE":
            return{
                ...state,
                getTask:{
                    ...state.getTask,
                    isLoading:false,
                    isError:true
                }
            }
        
        case "POST_TODO_SUCCESS":
            return{
                ...state,
                postTask:{
                    ...state.postTask,
                    isLoading:false,
                    isError:false
                }
            }
        case "POST_TODO_FAILURE":
            return{
                ...state,
                postTask:{
                    ...state.postTask,
                    isLoading:false,
                    isError:true
                }
            }
    
        default:
            return state;
    }
}