import { useRouter } from 'next/router';
import React from 'react';
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';


const BottomBar = () => {

    const router = useRouter();

    if (typeof window !== "undefined"){
        const uls = document.querySelectorAll("ul");
        uls.forEach((ul) => {
            const resetClass = ul.parentNode.getAttribute("class");
            const lis = ul.querySelectorAll("li");
            lis.forEach((li) => {
                li.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const target = e.currentTarget;
                    if (
                        target.classList.contains("active") ||
                        target.classList.contains("follow")
                    ) {
                        return;
                    }
                    ul.parentNode.setAttribute(
                        "class",
                        `${resetClass}`
                    );
                    lis.forEach((item) => clearClass(item, "active"));
                    setClass(target, "active");
                });
            });
        });
    }
    
    function clearClass(node, className) {
        node.classList.remove(className);
    }
    
    function setClass(node, className) {
        node.classList.add(className);
    }

    return (
        <div className='stage'>
            <div className="tabbar">
                <ul className="flex-center">
                    <li className="">
                        <a href={"/home"}>
                            <FiHome/>
                        </a>
                    </li>
                    <li className="">
                        <a href={"/map"}>
                            <FiMap/>
                        </a>
                    </li>
                    <li className="">
                        <a href={"/help"}>
                            <FiHelpCircle/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomBar