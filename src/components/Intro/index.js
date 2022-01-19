import React from 'react'
import Me from "../../img/calvo.JPG"


const index = () => {

    return (
        <div className="i">
            <div className="i-wrapper">
                <img src={Me} alt="" className="i-img" />
                <h2 className="i-intro">Hello, my name is</h2>
                <h2 className="i-name">Calvin Donner</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title item">Web Developer</div>
                        <div className="i-title item">UI/UX Designer</div>
                        <div className="i-title item">Student</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
