import './MenuItem.css'

const MenuItem = (props) => {

   

    return (

        <li className="menu-item">
            <a href="#" onClick={() => props.onClick(props.id)}>
                {props.children}
            </a>
        </li>

    )
}

export default MenuItem;