


const Navbar = ()=>{
    return (
        <nav>
            <div className="nav-wrapper navZ">
                <a href="/allorders" class="brand-logo">Daru la</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/allorders">myorders</a></li>
                    <li><a href="/signin">SignIN</a></li>
                    <li><a href="/signup">SignUP</a></li>
                </ul>
            </div>
        </nav>
    
    )
}

export default Navbar;