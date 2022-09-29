import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { Mapping, Info, FAQ, QReaderIcon, Loader, NoAuthPeriod } from './';

import { QrReader } from "react-qr-reader";
import toast from 'react-hot-toast';

import dataFakePath from '../store/dataFakePath';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

const Main = ({ user, authorizedDates, paths }) => {
  const { t } = useTranslation('common');

  const fakePaths = dataFakePath;

  const router = useRouter();
  var modalQR;

  const [data, setData] = useState("No result");
  const [isAuthPeriod, setIsAuthPeriod] = useState(false);

  useEffect(() => {
    // Authorizated dates to access
    if (authorizedDates) {
      var start = new Date(authorizedDates.start_date.toDate()).getTime();
      var end = new Date(authorizedDates.end_date.toDate()).getTime();
      var today = new Date().getTime();

      if (today >= start && today <= end)
        setIsAuthPeriod(true);
    }

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
              document.body.style.backgroundColor = "#EDCFBC";
              break;
            case "map":
              document.body.style.backgroundColor = "#C4D7BD";
              break;
            case "help":
              document.body.style.backgroundColor = "#D6C6DD";
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
  }, [isAuthPeriod]);

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
    document.body.style.backgroundColor = "#EDCFBC";
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
    document.body.style.backgroundColor = "#C4D7BD";
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
    document.body.style.backgroundColor = "#D6C6DD";
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

  const i = 0;
  const [ok, setOk] = useState(true);

  useEffect(() => {
    if (i === 0) {
      setOk(false);
    }
  });

  return (
    <>
      {/* If logged in && Date.Now is BETWEEN the fixed initial date (choose by user on pay) and the following 6 days (inclusive) */}
      {isAuthPeriod &&
        <div>
          <div id="tab-content" className='tab-content'>
            <div id='home' className='content vis'>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400]
                },
                next: {
                  translate: ["100%", 0, 0]
                }
              }}
              modules={[EffectCreative]}
              className="mySwiper"
              style={{ display: "flex" }}
            >
              <SwiperSlide>
                  <div className='swiper-start'>
                    <h1>{t('welcome')}</h1>
                    <div className='btn-container'>
                      <button className='btn' onClick={navigateHelp}>
                        {/* <Link href={'#help'}> */}
                          {t('howUseIt')}?
                        {/* </Link> */}
                      </button>
                    </div>
                    <div className='btn-container'>
                      <button className='btn-start' onClick={navigateMap}>
                        {/* <Link href={'#map'}> */}
                          {t('start')}
                        {/* </Link> */}
                      </button>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='swiper-path'>
                  <h2>{t('paths')}:</h2>
                  {fakePaths.map((fakePath) => {
                    return (
                      <div key={fakePath.id} className="path-card" style={{background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${fakePath.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                        <img src={fakePath.img} />
                        <div className='path-card-txt'>
                          <h4>{fakePath.title}</h4>
                          <span className="detail">
                            <Link href={''}>Vedi dettagli</Link>
                          </span>
                        </div>
                        <div className="checkbox-round">
                          {paths && 
                            <input type="checkbox" id='checkbox' defaultChecked={paths[fakePath.path]} disabled />
                          }
                          <label htmlFor="checkbox"></label>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
            <div id='map' className='content novis'>
              <h1>Mapapp</h1>
              <p>{t('exploreRoccolo')}</p>
              <Mapping />
            </div>
            <div id='help' className='content novis'>
              <h1>{t('info')}</h1>
              <Info user={user} authorizedDates={authorizedDates} />
              <h2>FAQ:</h2>
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
      }

      {/* If logged in, but authorizedDates == null (loading) */}
      {(!authorizedDates || !paths) || (!authorizedDates && !paths) &&
        <Loader />
      }

      {/* If logged in && Date.Now is NOT BETWEEN the fixed initial date (choose by user on pay) and the following 6 days (inclusive) */}
      {!isAuthPeriod &&
        <NoAuthPeriod user={user} authorizedDates={authorizedDates} />
      }
    </>
  )
}

export default Main