import axios from 'axios'
import React, {useState,useEffect} from 'react'
import LottieControl from './LottieControl'
import '../App.css'


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
        <div className="errorSize">
            <div>
        <h1 > ERROR 404: PAGE NOT FOUND<br />  God created the world in six days and he's now resting. <br /> Go home.</h1>
        </div>
        <div>
        <LottieControl classname="lotie" animation={someJson} width={400} height={400} />
        </div>
        </div>
    )
}

export default PageNotFound

