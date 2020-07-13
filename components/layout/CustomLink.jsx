import React, {useEffect, useState} from "react";
import Link from "next/link";
import Router from 'next/router';

const CustomLink = (props) => {
    const [active, setActive] = useState('')

    useEffect(() => {
        if (Router.pathname === props.to) setActive('active')
    })

    return (
        <Link href={props.to}>
            <a className={`metismenu-link ${active}`}
                onClick={e => {
                    if (props.hasSubMenu) props.toggleSubMenu(e);
                }}
            >{props.children}</a>
        </Link>
    )
}

export default CustomLink;