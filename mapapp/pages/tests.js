import React, {useEffect} from 'react'
import { Home } from '../components'

const Tests = () => {

// Global vars to cache event state
var evCache = new Array();
var prevDiff = -1;

function pointerdown_handler(ev) {
 // The pointerdown event signals the start of a touch interaction.
 // This event is cached to support 2-finger gestures
 evCache.push(ev);
}

function pointermove_handler(ev) {
 // This function implements a 2-pointer horizontal pinch/zoom gesture. 
 //
 // If the distance between the two pointers has increased (zoom in), 
 // the taget element's background is changed to "pink" and if the 
 // distance is decreasing (zoom out), the color is changed to "lightblue".
 //
 // This function sets the target element's border to "dashed" to visually
 // indicate the pointer's target received a move event.
 ev.target.style.border = "dashed";

 // Find this event in the cache and update its record with this event
 for (var i = 0; i < evCache.length; i++) {
   if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
   break;
   }
 }

 // If two pointers are down, check for pinch gestures
 if (evCache.length == 2) {
   // Calculate the distance between the two pointers
   var curDiff = Math.sqrt(Math.pow(evCache[1].clientX - evCache[0].clientX, 2) + Math.pow(evCache[1].clientY - evCache[0].clientY, 2));

   if (prevDiff > 0) {
     if (curDiff > prevDiff) {
       // The distance between the two pointers has increased
       ev.target.style.background = "pink";
     }
     if (curDiff < prevDiff) {
       // The distance between the two pointers has decreased
       ev.target.style.background = "lightblue";
     }
   }
   // Cache the distance for the next move event 
   prevDiff = curDiff;
 }
}

function pointerup_handler(ev) {
  // Remove this pointer from the cache and reset the target's
  // background and border
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";
 
  // If the number of pointers down is less than two then reset diff tracker
  if (evCache.length < 2) prevDiff = -1;
}

function remove_event(ev) {
 // Remove this event from the target's cache
 for (var i = 0; i < evCache.length; i++) {
   if (evCache[i].pointerId == ev.pointerId) {
     evCache.splice(i, 1);
     break;
   }
 }
}

window.onload = function () {
 // Install event handlers for the pointer target
 var el = document.getElementById("target");
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // Use same handler for pointer{up,cancel,out,leave} events since
 // the semantics for these events - in this app - are the same.
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}

  return (
    <div style={{marginTop: "150px", touchAction:"none", height: "100vh", backgroundColor: "#f3f2f3"}}>
      <h1>Pointer Event pinch/zoom gesture</h1>
      <div id="target">
        Touch and Hold with 2 pointers, then pinch in or out.
        <br/>
        The background color will change to pink if the pinch is opening (Zoom In) 
        or changes to lightblue if the pinch is closing (Zoom out).
        <br />
        Prova a zoommare etc

        <div style={{width: '100%'}}>
          <div style={{position: "relative", paddingBottom: "74.9791492910759%", paddingTop: 0, "height": 0}}>
            <iframe frameBorder="0" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
              src="https://view.genial.ly/6320e70918827800110ca871" type="text/html" allowFullScreen={true} scrolling="yes">
            </iframe> 
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Tests