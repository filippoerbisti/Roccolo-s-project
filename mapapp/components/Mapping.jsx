import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

const IMG_URL =
  "https://user-images.githubusercontent.com/4661784/" +
  "56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png";

const Mapping = () => {

  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: iframe } = imgRef;

    if (iframe) {
      const value = make3dTransformValue({ x, y, scale });
      iframe.style.setProperty("transform", value);
    }
  }, []);

  return (
    <>
      <QuickPinchZoom onUpdate={onUpdate}>
        {/* <img ref={imgRef} src={IMG_URL}/> */}
        <div style={{width: '100%'}} ref={imgRef}>
          <div style={{position: "relative", paddingBottom: "74.9791492910759%", paddingTop: 0, "height": 0}}>
            <iframe frameBorder="0" width="1199px" height="899px" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
            src="https://view.genial.ly/6320e70918827800110ca871" type="text/html" allowscriptaccess="always" allowFullScreen={true} scrolling="yes" allownetworking="all">
            </iframe> 
          </div> 
        </div>
      </QuickPinchZoom>
    </>
  )
}

export default Mapping