
import MenuItem from './MenuItem/MenuItem'
import { useState } from 'react';
import './Menu.css'


const menuItems = [
    { id: 'a', text: "Going to 1" },
    { id: 'b', text: "Going to 2" },
    { id: 'c', text: "Going to 3" },
    { id: 'd', text: "Going to 4" },
    { id: 'e', text: "Going to 5" },
    { id: 'f', text: "Going to 6" },
    { id: 'g', text: "Going to 7" },
    { id: 'h', text: "Going to 8" }
]

const Menu = () => {

    const [ currentItem, setCurrentItem ] = useState();
  

    return (
        <aside className='menu'>
            {menuItems.map(item =>
                <MenuItem
                    key={item.id}
                    id={item.id}
                    onClick={setCurrentItem}
                >
                    {item.text}
                </MenuItem>

            )}
        </aside>
    )
}

export default Menu;