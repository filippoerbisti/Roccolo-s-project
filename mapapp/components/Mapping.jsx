import React from "react";

const Mapping = () => {

  return (
    <>
      <div style={{width: '100%', height: '80%'}}>
        <div id="wrapper" style={{position: "relative", paddingBottom: "145%", paddingTop: 0}}>
          <iframe id="scaled-frame" frameBorder="0" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
            src="https://view.genial.ly/6324997be49d130018188e97" type="text/html" allowFullScreen={false} scrolling="yes">
          </iframe>
        </div>
      </div>
    </>
  )
}

export default Mapping