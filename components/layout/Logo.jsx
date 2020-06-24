import React, {useState} from "react";
import Hamburger from "react-hamburgers";

const Logo = () => {
    const [active, setActive] = useState(false)

    return (
        <div className="app-header__logo">
            <div className="logo-title">Admin Atlanta</div>
            <div className="header__pane ml-auto">
                <div onClick={() => {setActive(!active)}}>
                    <Hamburger
                        active={active}
                        type="elastic"
                    />
                </div>
            </div>
        </div>
    )
}

export default Logo