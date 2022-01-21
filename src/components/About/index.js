import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

const About = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="a">
            <div className="a-card">
                <h1 className="a-title" style={{ color: darkMode && "#c9bd63"}}>About Me</h1>
                <p className="a-sub" style={{ color: darkMode && "white" }}>
                    I began my coding journey in college. I then used my base knowledge of Excel and SQL to help me succeed as a supply chain analyst during a 5-year professional career, but was hungry to learn more. From there, I studied Python and JavaScript in my free time before deciding I wanted to futher my education by taking a full-stack bootcamp through the University of Utah. I completed a full-stack bootcamp in January 2022.
                </p>

                <p className="a-desc" style={{ color: darkMode && "white" }}>My technical skills include: HTML, CSS, Bootstrap, JavaScript, jQuery, SQL, NoSQL, MongoDB, Express.js, Node.js, React.js, APIs, Command Line, GitHub, and more! </p>

                <p className="a-desc" style={{ color: darkMode && "white" }}>In my free time, I enjoy time with my wife and daughter. I am a cinephile, amateur golfer, and enjoy fly-fishing in the mountains of Utah</p>
            </div>
        </div>
    )
}

export default About;
