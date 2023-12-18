import '../Styles/Navbar.css' 

function Navbar() {
    return (
    <div className='navbar'>
        <div className="logo">
            <h3>My logo</h3>
        </div>
        <div className="navLinks">
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
        </div>
    </div>
    )
}
export default Navbar


