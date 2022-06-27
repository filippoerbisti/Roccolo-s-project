import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import styles from '../styles/Nav.module.css';

const Nav = () => {

    const data = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Wineshop",
            link: "/"
        },
        {
            name: "Wines",
            link: "/"
        },
        {
            name: "Events",
            link: "/"
        },
        {
            name: "Contact",
            link: "/"
        }
    ];

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div></div>
    )
}

export default Nav