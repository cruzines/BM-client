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
        <div className="errorSize">
        <h1 style={{ color: '#04435D', textAlign: 'center', marginBottom: 12, marginTop: 10}}> COMING SOON<br /> This page will be avaiable in the near future. <br /> Come back later.</h1>
        <LottieControl animation={someJson} width={500} height={420} />
            
        </div>
    )
}

export default ComingSoon
