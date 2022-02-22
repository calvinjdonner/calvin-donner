import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import Me from "../../img/calvo.JPG";
import Projects from "../Projects/index";
import { projectData } from "../../data";

const Home = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div>
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

            <div className="a">
                <div className="a-card">
                    <h1 className="a-title" style={{ color: darkMode && "#c9bd63" }}>About Me</h1>
                    <p className="a-sub" style={{ color: darkMode && "white" }}>
                        I began my coding journey in college. I then used my base knowledge of Excel and SQL to help me succeed as a supply chain analyst during a 5-year professional career, but was hungry to learn more. From there, I studied Python and JavaScript in my free time before deciding I wanted to futher my education by taking a full-stack bootcamp through the University of Utah. I completed a full-stack bootcamp in January 2022.
                    </p>

                    <p className="a-desc" style={{ color: darkMode && "white" }}>My technical skills include: HTML, CSS, Bootstrap, JavaScript, jQuery, SQL, NoSQL, MongoDB, Express.js, Node.js, React.js, APIs, Command Line, GitHub, and more! </p>

                    <p className="a-desc" style={{ color: darkMode && "white" }}>In my free time, I enjoy time with my wife and daughter. I am a cinephile, amateur golfer, and enjoy fly-fishing in the mountains of Utah</p>
                </div>
            </div>

            <div className="pj">
                <div className="pj-text">
                    <h1 className="pj-title" style={{ color: darkMode && "#c9bd63" }}>Projects</h1>
                    <p className="pj-desc">
                        I have been involved in a number of projects in both the front and back end. These include group-projects as well as a few solo-ventures!
                    </p>
                </div>
                <div className="pj-list">
                    {projectData.map((item) => (
                        <Projects key={item.id} img={item.img} link={item.link} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home;