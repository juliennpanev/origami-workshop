
function NavigationItem (props) {
    return(
        <li className="listItem">
            <span href="#">{props.children}</span>
        </li>
    );
}

export default NavigationItem;