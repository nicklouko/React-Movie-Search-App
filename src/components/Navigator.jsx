import { Link,NavLink } from "react-router-dom";

const navLinkStyle= ({isActive})=>({
    textDecoration: 'none',
    backgroundColor: 'lightblue',
    border: '1px solid black',
    borderRadius: '10px',
    padding:'8px',
    color: isActive? 'blue' :'black',
    fontWeight: isActive? 'bold' : 'normal'
    
})

function Navigator(){
    return(
    <nav style={{border: '1px solid rgb(235, 166, 109)',display:'flex', margin:'0px',gap:'10px',padding: '10px', justifyContent: 'center',backgroundColor:"skyblue", borderRadius:'30px'}}>
      <NavLink style={navLinkStyle} to='/'>Home</NavLink>{" "}
      <NavLink style={navLinkStyle} to='/Favourites'>Favourites</NavLink>
    </nav>
    )

}

export default Navigator