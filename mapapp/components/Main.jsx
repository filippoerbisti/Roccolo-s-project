import React from 'react';
import { FiHome, FiMap, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Main = () => {

  const { logout } = useAuth();
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
                // router.push('/')
                const target = e.currentTarget;
                console.log(target)

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
      <div>
        <div className='navbar-container'>
          <Link href={"/"} className='cursor-pointer'>
            <img 
              src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
              width={240} 
              height={100} 
              // objectfit="contain"
              className='cursor-pointer'
            />
          </Link>
          <button
            onClick={() => {
              logout()
              router.push('/')
            }}
          >
            <FiLogOut />
          </button>
        </div>
        <div className='tab-content'>
          <h1>BENVENUTI <br/> NEL NOSTRO TOUR</h1>
        </div>
        <div className="tabbar">
          <ul className="flex-center">
            <li class="home" data-where="home">
                <a href={"/home"}>
                    <FiHome/>
                </a>
            </li>
            <li class="map" data-where="map">
                <a href={"/map"}>
                    <FiMap/>
                </a>
            </li>
            <li class="help" data-where="help">
                <a href={"/help"}>
                    <FiHelpCircle/>
                </a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Main