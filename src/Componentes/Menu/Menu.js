import MenuItem from "../Menuitem/menu-item";
import  "./Menu.css";


function menu(){
    return ( <header className="menu-wrapper">
            <nav>
                <ul className="menu">
                    <MenuItem text="Home" link="/"/>
                    <MenuItem text="Personajes" link="/personajes"/>
                    <MenuItem text="Citas" link="/citas"/>
                    <MenuItem text="Episodios" link="/episodios"/>
                </ul>
            </nav>
        </header>
    );
}

export default menu;