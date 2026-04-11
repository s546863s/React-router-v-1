import { NavLink } from "react-router";


const Header = () => {
    return (
        <div>
            <h1>Header section is here</h1>
        <ul style={{display: 'flex', gap: '20px', listStyle: 'none'}}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>   
            <li><NavLink to="/users">users</NavLink></li>   
            <li><NavLink to="/posts">Posts</NavLink></li>   
        </ul>
        </div>
    );
};

export default Header;