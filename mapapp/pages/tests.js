import React, {useEffect} from 'react'
import { Home } from '../components'

const Tests = () => {

  // useEffect(() => {
  //   Array.from(document.getElementsByTagName("iframe")).forEach((iframe) => {
  //     iframe.contentWindow.addEventListener(
  //       "load",
  //       () => {
  //         const doc = iframe.contentWindow.document;
  //         iframe.height = doc.body.scrollHeight;
  //       },
  //       true
  //     );
  //     iframe.contentWindow.addEventListener(
  //       "resize",
  //       () => {
  //         iframe.height = iframe.contentWindow.document.body.scrollHeight + 40;
  //       },
  //       true
  //     );
  //   });
  // }, []);

  return (
    <div style={{width: '100%'}}>
      <div style={{position: "relative", paddingBottom: "74.9791492910759%", paddingTop: 0, "height": 0}}>
        <iframe frameBorder="0" width="1199px" height="899px" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
        src="https://view.genial.ly/6320e70918827800110ca871" type="text/html" allowScriptAccess="always" allowFullScreen={true} scrolling="yes" allowNetworking="all">
        </iframe> 
      </div> 
    </div>
  )
}

export default Tests