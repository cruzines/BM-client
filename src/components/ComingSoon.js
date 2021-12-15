import axios from 'axios'
import React, {useState,useEffect} from 'react'
import LottieControl from './LottieControl'
import '../App.css'

function ComingSoon() {

    // this is for the json lottie
    const [someJson, setJson] = useState(null)
    useEffect(() =>{
        const getData = async () =>{
            let res = await axios.get('https://assets6.lottiefiles.com/packages/lf20_2JRlFZ.json')
            setJson(res.data)
        }
        getData()
    }, [])

    return (
        <div >
        <h1 style={{ color: '#04435D', textAlign: 'center', marginBottom: 12, marginTop: 10}}> COMING SOON<br />  This page is under construction. <br /> Please come back later.</h1>
        <LottieControl animation={someJson} width={300} height={300} />
            
        </div>
    )
}

export default ComingSoon
