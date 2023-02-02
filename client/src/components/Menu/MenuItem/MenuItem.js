import './MenuItem.css'

const MenuItem = (props) => {

    let classes = [ 'menu-item' ];

    if (props.isSelected) {
        classes.push('menu-item-selected')
    }

    return (

        <li className={classes.join(' ')}>
            <a href="#" onClick={() => props.onClick(props.id)}>
                {props.children}
            </a>
        </li>

    )
}

export default MenuItem;