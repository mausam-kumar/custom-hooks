import React from 'react'
import axios from 'axios'

function useFetch(){

    const [data,setData] = React.useState([])

    
    const fetchData = async (name) =>{
        try {
            const payload = {
                url:`https://api.github.com/search/users?q=${name}`,
                method: 'GET'
            }
            const {data} = await axios(payload)
            // console.log(data.items);
            setData(data.items)
        } catch (error) {
            console.log(error.message);
        }
    }

    return {data,fetchData}
}

export default useFetch