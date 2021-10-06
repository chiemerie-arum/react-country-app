import React from 'react'

import './style.scss'

type HeaderProps = {
    name: string
}


const Header = (props: HeaderProps)=> {

    return (
        <div className="header-container">
            
        
        <h1>{props.name}</h1>
        </div>
    )
}

export default Header