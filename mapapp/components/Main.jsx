import React, { useEffect, useState } from 'react';
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';

import { useRouter } from 'next/router';
import { Mapping, HowUse, FAQ, QReaderIcon, ScanReader } from './';

import dataFakePath from '../store/dataFakePath';
import { useAuth } from '../context/AuthContext';

import { QrReader } from "react-qr-reader";
import toast from 'react-hot-toast';

const Main = () => {

  const fakePaths = dataFakePath;
  const { paths } = useAuth();

  const router = useRouter();
  var modalQR;

  const [data, setData] = useState("No result");

  useEffect(() => {
    // Modal QR
    modalQR = document.getElementById("modalQR");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalQR) {
        modalQR.style.display = "none";
      }
    }

    // Tabbar
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
              document.body.style.backgroundColor = "#d4e1bf";
              break;
            case "map":
              document.body.style.backgroundColor = "#f5f4f1";
              break;
            case "help":
              document.body.style.backgroundColor = "#7ba05f";
              break;
            default:
              document.body.style.backgroundColor = "#d4e1bf";
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

  // Navigate home = simulation click on li with className="home"
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
    document.body.style.backgroundColor = "#d4e1bf";
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

  // Navigate Map = simulation click on li with className="map"
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
    document.body.style.backgroundColor = "#f5f4f1";
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

  // Navigate Help = simulation click on li with className="help"
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
    document.body.style.backgroundColor = "#7ba05f";
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

  // When the user clicks the button, open the modal 
  const modalShow = () => {
    modalQR = document.getElementById("modalQR");
    modalQR.style.display = "flex";
    modalQR.style.justifyContent = "center";
  }

  // When the user clicks on <span> (x), close the modal
  const modalClose = () => {
    modalQR = document.getElementById("modalQR");
    modalQR.style.display = "none";
  }

  // Function clear class
  function clearClass(node, className) {
    node.classList.remove(className);
  } 

  // Function remove class
  function setClass(node, className) {
    node.classList.add(className);
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
          </div>
          <div className='btn-container'>
            <button className='btn' onClick={navigateMap}>
              {/* <Link href={'#map'}> */}
                Iniziamo
              {/* </Link> */}
            </button>
          </div>
          <h1>TAPPE</h1>
          {fakePaths.map((fakePath) => {
            return (
              <div key={fakePath.id} className="path-card">
                <img src={fakePath.img} target="_blank" />
                <h4>{fakePath.title}</h4>
                <input type="checkbox" defaultChecked={paths[fakePath.path]} disabled />
              </div>
            )
          })}
        </div>
        <div id='map' className='content novis'>
          <h1>MAPAPP</h1>
          <p>Esplora il nostro Roccolo</p>
          <Mapping />
        </div>
        <div id='help' className='content novis'>
          <h1>COME SI USA</h1>
          <HowUse />
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

      {/* Trigger/Open The Modal */}
      <button onClick={modalShow}>
        <QReaderIcon />
      </button>
            
      {/* The Modal */}
      <div id="modalQR" className="modal-qr">
          {/* <!-- Modal content --> */}
          <div className="modal-content-qr">
              <div className="modal-body-qr">
                  <span className="close-qr" onClick={modalClose}>&times;</span>
                  {/* <ScanReader /> */}
                  <div style={{marginTop: '10px', paddingLeft: '15px'}}>
                    <h1 style={{fontSize: "18px", textAlign: "center"}}>SCANNER QR</h1>
                    <QrReader
                      onResult={(result, error) => {
                        if (!!result) {
                          setData(result?.text);
                          modalClose();
                          toast.success('Redirect ...');
                          router.push('/' + result.text);
                        }
                        if (!!error) {
                          // toast.error('Errore lettura QR');
                          console.info(error);
                        }
                      }}
                      //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
                      // open the front camera
                      constraints = {{ facingMode:  "environment"  }}
                      style = {{ width: "50%", height: "50%", backgroundColor: '#000' }}
                    />
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Main