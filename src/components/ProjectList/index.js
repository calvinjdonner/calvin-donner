import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import Projects from "../Projects/index";
import { projectData } from "../../data"

const ProjectList = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="pj">
            <div className="pj-text">
                <h1 className="pj-title" style={{ color: darkMode && "#c9bd63"}}>Projects</h1>
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
    )
}

export default ProjectList;
