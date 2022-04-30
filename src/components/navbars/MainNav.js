import React from "react";

const MainNav = () => {

    return (
        <nav class="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#FF0038' }}>
            <a className="navbar-brand m-3" href="#"><text className="whiteText bold">Malvan</text></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ml-8" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a className="nav-link" href="#"><text className="whiteText">Home</text></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#/login"><text className="whiteText">Login</text></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#/mainProd"><text className="whiteText">Pricing</text></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default MainNav;