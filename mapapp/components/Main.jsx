import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';
import { BsChevronRight } from 'react-icons/bs';
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

const Main = ({ user, userDoc }) => {
  const { t } = useTranslation('common');

  const fakePaths = dataFakePath;

  const router = useRouter();
  var modalQR;
  var modalTastingH;

  const [data, setData] = useState("No result");
  const [isAuthPeriod, setIsAuthPeriod] = useState(false);

  const convertToDate = (d) => {
    const [day, month, year] = d.split("/");
    return new Date(year, month - 1, day);
  }

  var today = new Date();

  useEffect(() => {

    let formatToday = today.getUTCDate() + "/" + (today.getUTCMonth() + 1) + "/" + today.getUTCFullYear();

    let dateBookingHourMin = (userDoc.dateBooking.getHours + today.getHours() < 13 ? 11 : 16);
    console.log(today.getHours())
    // Modal Tasting Hour to remember the hour of tasting
    modalTastingH = document.getElementById("modalTastingHour");
    if (modalTastingH != null) {
      if(convertToDate(userDoc.dateBooking).getTime() === convertToDate(formatToday).getTime()) {
        if(dateBookingHourMin == today.getHours()) {
          modalTastingH.style.display = "flex";
          modalTastingH.style.alignItems = "center";
        }
      }
    }

    // Authorizated dates to access
    if (userDoc) {
      if (convertToDate(userDoc.dateBooking).getTime() <= convertToDate(formatToday).getTime() 
          &&
          convertToDate(userDoc.dateEndAccessApp).getTime() >= convertToDate(formatToday).getTime()
      )
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

  const closeModalTastingHour = () => {
    var modalTastingH = document.getElementById("modalTastingHour");
    modalTastingH.style.display = "none";
  }

  return (
    <>
      {/* If logged in && Date.Now is BETWEEN the fixed initial date (choose by user on pay) and the following 6 days (inclusive) */}
      {isAuthPeriod &&
        <div>

          {/* If dateBooking == today, and hours == 11 || 16 -> show modal with Tasting Hour */}
          <div id="modalTastingHour" className="modal-tasting-hour">
              <div className="modal-content-tasting-hour">
                  <span onClick={closeModalTastingHour} className="close-modal-tasting-hour">&times;</span>
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <h2 style={{fontSize: '20px'}}>{t('tastingRemember')} {today.getHours() < 13 ? '11.00' : '16.00'}</h2>
                  </div>
              </div>
          </div>  

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
                      <h3>{t('exploreRoccolo')}</h3>
                      {/*<h3>{t('discoverQR')}</h3>*/}
                      <div className='btn-container' style={{margin: '30px 0'}}>
                        <button className='btn-start' onClick={navigateMap}>
                          {/* <Link href={'#map'}> */}
                            {t('start')}
                          {/* </Link> */}
                        </button>
                      </div>
                      <p style={{color: 'white'}}>{t('stageToComplete')}: {userDoc.nPathsToComplete}</p>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px', marginBottom: '10px', color: 'white'}}>
                        <p>{t('swipeToPath')}</p>
                        <div className="animate-arrow">
                          <span>
                            <BsChevronRight style={{fontSize: '40px', marginRight: '-10px', color: 'rgba(255,255,255,0.3)'}} />
                          </span>
                          <span>
                            <BsChevronRight style={{fontSize: '40px', marginRight: '-10px', color: 'rgba(255,255,255,0.6)'}} />
                          </span>
                          <span>
                            <BsChevronRight style={{fontSize: '40px', marginRight: '-10px'}} />
                          </span>
                        </div>
                      </div>
                      {/* <div className='box-info-tasting'>
                        <p style={{textTransform: 'uppercase', letterSpacing: '1px'}}>{t('booking')}</p>
                        <ul>
                          <li style={{paddingTop: '5px'}}>Riservato: {fullname}</li>
                          <li style={{paddingTop: '5px'}}>{t('nPeople')}: {userDoc.nPeople}</li>
                          <li style={{paddingTop: '5px'}}>{t('nTasting')}: {userDoc.nTasting}</li>
                          <li style={{paddingTop: '5px'}}>{t('typeTasting')}: {userDoc.tastingPackage}</li>
                        </ul>
                        <p style={{fontWeight: 'bold', paddingTop: '10px', fontSize: 'large'}}>{t('hourTasting')} {today.getHours() < 13 ? '11.00' : '16.00'}</p>
                      </div> */}
                      <div className='btn-container' style={{marginTop: '20px'}}>
                        <button className='btn' onClick={navigateHelp}>
                          {/* <Link href={'#help'}> */}
                            {t('help')}
                          {/* </Link> */}
                        </button>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='swiper-path'>
                    <h2 style={{color: 'black'}}>{t('paths')}</h2>
                    {fakePaths.map((fakePath) => {
                      return (
                        <div key={fakePath.id} className="path-card" style={{background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${fakePath.imgBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                          <img src={fakePath.img} />
                          <div className='path-card-txt'>
                            <h4 style={{color: 'white'}}>{fakePath.title}</h4>
                            <span className="detail">
                              <Link href={''}>Vedi dettagli</Link>
                            </span>
                          </div>
                          <div className="checkbox-round">
                            {userDoc && 
                              <input type="checkbox" id='checkbox' defaultChecked={userDoc[fakePath.path]} disabled />
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
              <Info user={user} userDoc={userDoc} />
              <h2>FAQ:</h2>
              <FAQ />
              <pre style={{textAlign: 'center'}}>{t('version')} v.1.6</pre>
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
      {!userDoc &&
        <Loader />
      }

      {/* If logged in && Date.Now is NOT BETWEEN the fixed initial date (choose by user on pay) and the following 6 days (inclusive) */}
      {!isAuthPeriod &&
        <NoAuthPeriod user={user} userDoc={userDoc} />
      }
    </>
  )
}

export default Main
