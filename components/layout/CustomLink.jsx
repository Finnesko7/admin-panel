import React from "react";
import Link from "next/link";

const CustomLink = (props) => {
    return (
        <Link href={props.to}  >
            <a className="metismenu-link">{props.children}</a>
        </Link>
    );
}

export default CustomLink;