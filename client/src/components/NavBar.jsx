
function NavBar(){
    return(
        <nav>
            <div className='navbar'>
            <img src="/images/logoNav.png"  alt="BookHaven Logo" className="logo" />
            <ul className='navlinks'>
                <li><a href="">Home</a></li>
                <li><a href="">Books</a></li>
                <li><a href="">Share Book</a></li>
                <li><a href="">More</a></li>
            </ul>
            <button className="btn">Sign In</button>
            </div>
        </nav>
    )
}

export default NavBar;