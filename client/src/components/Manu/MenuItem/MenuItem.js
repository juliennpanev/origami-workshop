import './MenuItem.css'

const MenuItem = (props) => {
    return (

        <li className="menu-item">
            <a href="#">
                {props.children}
            </a>
        </li>

    )
}

export default MenuItem;