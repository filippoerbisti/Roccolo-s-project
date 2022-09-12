import React, { useEffect } from 'react';
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';

import { useRouter } from 'next/router';
import { Home, Mapping, About } from './';

const Main = () => {

  const router = useRouter();

  useEffect(() => {
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

          // change background color 
          switch (target.dataset.where) {
            case "home":
              document.getElementById("tab-content").style.backgroundColor = "#cf5c0f";
              break;
            case "map":
              document.getElementById("tab-content").style.backgroundColor = "#4dd146";
              break;
            case "help":
              document.getElementById("tab-content").style.backgroundColor = "#783896";
              break;
            default:
              document.getElementById("tab-content").style.backgroundColor = "#cf5c0f";
              break;
          } 

          let pageId = target.attributes[1].value; //get data-where of li to then compared
          router.push('#' + pageId);

          const divsMain = document.getElementsByClassName("content");
          // show section (id) or hidden
          for(let i = 0; i < divsMain.length; i++) {
            let divId = divsMain[i].id;
            if (divId == pageId) {
              clearClass(divsMain[i], "novis");
              setClass(divsMain[i], "vis");
            }
            else {
              setClass(divsMain[i], "novis");
              clearClass(divsMain[i], "vis");
            }
          }
        });
      });
    });
  }, []);

  function clearClass(node, className) {
      node.classList.remove(className);
  }

  function setClass(node, className) {
      node.classList.add(className);
  }

  return (
    <div>
      <div id="tab-content" className='tab-content'>
        <div id='home' className='content vis'>
          <h1>BENVENUTI <br/> NEL NOSTRO TOUR</h1>
          <div className='btn-container'>
            <button className='btn'>Come si usa</button>
            <button className='btn'>Iniziamo</button>
          </div>
          <Home />
        </div>
        <div id='map' className='content novis'>
          <h1>MAPAPP</h1>
          <p>Esplora il nostro Roccolo</p>
          <Mapping />
        </div>
        <div id='help' className='content novis'>
          <h1>COME SI USA</h1>
          <About />
        </div>
      </div>
      <div className="tabbar">
        <ul className="flex-center">
          <li className="home active" data-where="home">
            <FiHome/>
          </li>
          <li className="map" data-where="map">
            <FiMap/>
          </li>
          <li className="help" data-where="help">
            <FiHelpCircle/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Main