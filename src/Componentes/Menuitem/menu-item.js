import "./menu-item.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function MenuItem(props){
    return (
        <li className="menu-item">
            <a href={props.link}>
                {props.text}
            </a>
        </li>
    )
}

export default MenuItem