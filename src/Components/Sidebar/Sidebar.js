import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

const SubMenu = (props) => {
  return (<li><a href="/" className="d-inline-flex align-items-center rounded">{props.name}</a></li>);
}

const Menu = (props) => {
  return (<li className="mb-1">
  <button className="btn d-inline-flex align-items-center rounded" data-bs-toggle="collapse" data-bs-target={"#" + props.name + "-collapse"} aria-expanded="true" aria-current="true">
    {props.name}
  </button>

  <div className="collapse" id={props.name + "-collapse"}>
    <ul className="list-unstyled fw-normal pb-1 small">
        {props.subItems.map(subItem => <SubMenu name={subItem}/>)}
    </ul>
  </div>
</li>);
}

const Sidebar = () => {

  const menuItems = [{
    name: "Pistols", 
    subItems: ["CZ75-Auto", "Desert Eagle", "Dual Barettas", "Five-SeveN", "Glock-18", "P2000", "P250", "R8 Revolver", "Tec-9", "USP-S"]
  }, {
    name: "Rifles",
    subItems: ["AK-47", "AUG", "AWP", "FAMAS", "G3SG1", "Galil AR", "M4A1-S", "M4A4", "SCAR-20", "SG 553", "SSG 08"]
  }, {
    name: "SMGs",
    subItems: ["MAC-10", "MP5-SD", "MP7", "MP9", "PP-Bizon", "P90", "UMP-45"]
  }, {
    name: "Heavy",
    subItems: ["MAG-7", "Nova", "Sawed-Off", "XM1014", "Nagev", "M249"]
  }, {
    name: "Knives",
    subItems: ["Nomad Knife", "Skeleton Knife", "Survival Knife", "Paracord Knife", "Classic Knife", "Bayonet", "Bowie Knife", "Butterfly Knife", "Falchion Knife", "Flip Knife", "Gut Knife", "Huntsman Knife", "Karambit", "M9 Bayonet", "Navaja Knife", "Shadow Daggers", "Stiletto Knife", "Talon Knife", "Ursus Knife"]
  }, {
    name: "Gloves",
    subItems: ["Sports Gloves", "Hydra Gloves", "Hand Wraps", "Moto Gloves", "Specialist Gloves", "Bloodhound Gloves", "Driver Gloves", "Broken Fang Gloves"]
  }, {
    name: "Accessories",
    subItems: ["Stickers", "Graffiti", "Case", "Case Key", "Musickit", "Pin", "Tag", "Gift", "Patch", "Tool"]
  }, {
    name: "Agents",
    subItems: ["Superior", "Master", "Distinguished", "Exceptional"]
  }
]
    

  return (
    <aside className="bd-sidebar">
      <nav className="collapse bd-links" id="bd-docs-nav" aria-label="Docs navigation"><ul className="list-unstyled mb-0 py-3 pt-md-1">
      <li>
        <Link to="/browse" className="d-inline-flex align-items-center rounded">
          Clear
        </Link>
      </li>

      <li className="my-3 mx-4 border-top"></li>
        {menuItems.map(menuItem => <Menu name={menuItem.name} subItems={menuItem.subItems}/>)}
  </ul>
</nav>

    </aside>
  )
}

export default Sidebar