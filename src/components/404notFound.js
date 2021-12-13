import axios from 'axios'
import React, {useState,useEffect} from 'react'
import LottieControl from './LottieControl'


function PageNotFound() {

    // this is for the json lottie
    const [someJson, setJson] = useState(null)
    useEffect(() =>{
        const getData = async () =>{
            let res = await axios.get('https://assets8.lottiefiles.com/packages/lf20_uf2hp52m.json')
            setJson(res.data)
        }
        getData()
    }, [])

    return (
        <div>
        <h1 style={{ color: '#04435D', textAlign: 'center', marginBottom: 12, marginTop: 10}}> 404 NOT FOUND<br />  God created the world in six days and he's now resting. <br /> Go home.</h1>
        <LottieControl animation={someJson} width={500} height={500} />

        </div>
    )
}

export default PageNotFound

