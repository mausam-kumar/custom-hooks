import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

function Search() {

    const [item,setItem] = React.useState([])

    const debounce = (func) => {
        console.log("debounce");
        let id;
        return (...args) => {
            const context = this
            console.log("id",id);
            if(id) clearTimeout(id)
            id = setTimeout(() =>{
                func.apply(context,args)
            },500)
        }
    }

    async function handleChange(e){
        let state = e.target.value
        try {
            const payload = {
                url:`https://restcountries.com/v3.1/name/${state}`,
                method:'get'
            }
    
            const {data} = await axios(payload)
            console.log("data =>",data);
            setItem(data)
        } catch (error) {
            console.log(error.message);
        }
        console.log("mausam");
    }

    return (
        <div>
            <span>Search For Country :</span>
            <Box>
            <input type="text" name="country" onChange={debounce(handleChange)} placeholder="Start typing..."  />
                <div>
                    {
                        item.map((ele) => {
                            return(
                                <p>{ele.name.common}</p>
                                
                            )
                        })
                    }
                </div>
            </Box>
        </div>
    )
}

export default Search

const Box = styled.div`
    position: relative;
    height:300px;
    width:250px;
`