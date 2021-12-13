import React from 'react'
import '../App.css'

function PageNotFound() {
    return (
<div style={{ backgroundImage: "url(/404.svg)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100vw',
              height: '96vh',
              marginTop: -32 }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: -30}}> 404 NOT FOUND<br />  God created the world in six days and he's now resting. <br /> Go home.</h1>

        </div>
    )
}

export default PageNotFound

