


function MenuBtn(showNavbar) {
    return (
        <button className="menu" onClick={showNavbar}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <p>Menu</p>        
        </button>
    );
}

export default MenuBtn;