import { NavLink } from "react-router-dom"

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <ul className={classes.ul}>
            <li><NavLink to="education">Education</NavLink></li>
            <li><NavLink to="projects">Projects</NavLink></li>
            <li><NavLink to="extraActivities">Extra Activities</NavLink></li>
            <li><NavLink to="contactme">Contact Me</NavLink></li>
        </ul>
    )
}

export default MainNavigation;