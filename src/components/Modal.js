import classes from './Modal.module.css';
import { NavLink } from 'react-router-dom';

const Modal = (props) => {
    const clickHandler = ()=>{
        props.onConfirm();
    }
    return(
        <div  className={classes.container} onClick={clickHandler}>
            <ul className={classes.lists}>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/activities">Activities</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact Me</NavLink></li>
            </ul>            
        </div>
    );
}

export default Modal