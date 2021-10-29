import React from 'react'
import {  Link  } from "react-router-dom";
  
    

const Index = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#919190"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" exact to="/">Demo App</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" exact to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" exact to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " exact to="/contact"  >Contact</Link>
                    </li>
                </ul>
      
            </div>
        </nav>
    )
}

export default Index