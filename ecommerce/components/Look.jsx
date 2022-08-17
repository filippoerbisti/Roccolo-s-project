import React, { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";

const Look = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {

      var imgs = [
        {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=50',
          text: 'Wine'
        },
        {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=50',
          text: 'Test'
        },
        {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=50',
          text: 'TT'
        }
      ],
      n = imgs.length,
      current = n - 1,
      closedWidth = Math.floor(window.innerWidth / 10)

      for (var i = 0; i < n; i++){

        var bgImg = document.createElement('span');
        bg.appendChild(bgImg);

        gsap.set(bgImg, {
          attr:{id:'bgImg'+i, class:'bgImg'},
          width:'100%',
          height:'100%',
          backgroundImage:'url('+imgs[i].src+')',
          backgroundSize:'cover',
          backgroundPosition:'center'
        });

        var b = document.createElement('span');
        fg.appendChild(b);

        gsap.fromTo(b, {
          attr: {id:'b'+i, class:'box'},
          innerHTML: '<p class="p"><sub>Fig.</sub> ' + imgs[i].text + '</p>',
          width: '100%',
          height: '100%',
          borderLeft: (i>0) ? 'solid 1px #eee' : '',
          backgroundColor :'rgba(250,250,250,0)',
          left :i*closedWidth,
          transformOrigin: '100% 100%',
          x: '100%'
          }, {
          duration: i*0.15,
          x: 0,
          ease: 'expo.inOut'
        });  

        b.onmouseenter = b.onclick = (e) => {    
          if (Number(e.currentTarget.id.substr(1)) == current) return;
          
          var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
          current = Number(e.currentTarget.id.substr(1));
          gsap.to('.box', {
            duration: 0.5,
            ease:'elastic.out(0.3)',
            left: (i) => (i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth),
            x: 0,
            stagger: staggerOrder? 0.05 : -0.05
          });
          
          bg.appendChild( document.getElementById('bgImg' + current) );
          gsap.fromTo('#bgImg'+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'});
          gsap.fromTo('#bgImg'+current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration:1.5, ease:'sine'});
        }

        window.onresize = (e) => {
          closedWidth = Math.floor(window.innerWidth/10);
          gsap.set('.box', { x:0, left:(i)=> (i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth) });
        }
      }      
    }
  }, []);

  return (
    <div className='img-container'>

      <div id="bg"></div>
      <div id="fg"></div>

      <style jsx="false">{`
        .img-container {
          height: 100%;
          width: 100%;
          min-height: 500px;
          display: flex;
          justify-content: center;
          cursor: default;
        }
        #fg, #bg {
          width:100%;
          height:100%;
          color:#fff;
          font-size:35px;
          overflow: hidden;
        }
        #fg, #bg, #fg span, #bg span  {
          position:absolute;
        }
        sub {
          font-size:12px;
          display:block;
        }
        .p {
          padding:12px;
        }
      `}</style>
    </div>
  )
}

export default Look