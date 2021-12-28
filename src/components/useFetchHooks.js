import React from 'react'
import axios from 'axios'

const useFetchHooks = ({url}) =>{
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(false)
    const [data,setData] = React.useState([])

    const fetchData = async () => {
        try {
            setLoading(true)
            const payload = {
                url:url,
                method: 'GET'
            }

            const {data} = await axios(payload)
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(true)
            console.log(error.message);
        }
    }

    React.useEffect(() => {
        fetchData()
    })

    return {loading,error,data}
}

export default useFetchHooks