import React, { useEffect } from 'react';
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { HomeTitle, Mapping, About, FAQ } from './';

const Main = () => {

  const router = useRouter();

  function clearClass(node, className) {
    node.classList.remove(className);
  } 

  function setClass(node, className) {
    node.classList.add(className);
  }

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

          // change background color 
          switch (target.dataset.where) {
            case "home":
              document.getElementById("tab-content").style.backgroundColor = "#d4e1bf";
              break;
            case "map":
              document.getElementById("tab-content").style.backgroundColor = "#f5f4f1";
              break;
            case "help":
              document.getElementById("tab-content").style.backgroundColor = "#7ba05f";
              break;
            default:
              document.getElementById("tab-content").style.backgroundColor = "#d4e1bf";
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

  const navigateHome = () => {
    const liHome = document.getElementsByClassName('home');
    const liMap = document.getElementsByClassName('map');
    const liHelp = document.getElementsByClassName('help');

    for(var i = 0; i < liMap.length; i++)
      liMap[i].classList.remove("active");

    for(var i = 0; i < liHelp.length; i++)
      liHelp[i].classList.remove("active");

    // Add class
    for(var i = 0; i < liHome.length; i++)
      liHome[i].classList.add("active");

    // change background color 
    document.getElementById("tab-content").style.backgroundColor = "#d4e1bf";
    const pageId = 'home'
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
  }

  const navigateMap = () => {
    const liHome = document.getElementsByClassName('home');
    const liMap = document.getElementsByClassName('map');
    const liHelp = document.getElementsByClassName('help');

    // Remove class
    for(var i = 0; i < liHome.length; i++)
      liHome[i].classList.remove("active");

    for(var i = 0; i < liHelp.length; i++)
      liHelp[i].classList.remove("active");

    // Add class
    for(var i = 0; i < liMap.length; i++)
      liMap[i].classList.add("active");

    // change background color 
    document.getElementById("tab-content").style.backgroundColor = "#f5f4f1";
    const pageId = 'map';
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
  }

  const navigateHelp = () => {
    const liHome = document.getElementsByClassName('home');
    const liMap = document.getElementsByClassName('map');
    const liHelp = document.getElementsByClassName('help');

    // Remove class
    for(var i = 0; i < liHome.length; i++)
      liHome[i].classList.remove("active");

    for(var i = 0; i < liMap.length; i++)
      liMap[i].classList.remove("active");

    // Add class
    for(var i = 0; i < liHelp.length; i++)
      liHelp[i].classList.add("active");

    // change background color 
    document.getElementById("tab-content").style.backgroundColor = "#7ba05f";
    const pageId = 'help';
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
  }

  return (
    <div>
      <div id="tab-content" className='tab-content'>
        <div id='home' className='content vis'>
          <h1>BENVENUTI <br/> NEL NOSTRO TOUR</h1>
          <div className='btn-container'>
            <button className='btn' onClick={navigateHelp}>
                {/* <Link href={'#help'}> */}
                  Come si usa
                {/* </Link> */}
              </button>
            <button className='btn' onClick={navigateMap}>
              {/* <Link href={'#map'}> */}
                Iniziamo
              {/* </Link> */}
            </button>
          </div>
          <HomeTitle />
        </div>
        <div id='map' className='content novis'>
          <h1>MAPAPP</h1>
          <p>Esplora il nostro Roccolo</p>
          <Mapping />
        </div>
        <div id='help' className='content novis'>
          <h1>COME SI USA</h1>
          <About />
          <h1>FAQ</h1>
          <FAQ />
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