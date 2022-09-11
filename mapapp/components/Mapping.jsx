import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

const IMG_URL =
  "https://user-images.githubusercontent.com/4661784/" +
  "56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png";

const Mapping = () => {

    const imgRef = useRef();
    const onUpdate = useCallback(({ x, y, scale }) => {
      const { current: img } = imgRef;
  
      if (img) {
        const value = make3dTransformValue({ x, y, scale });
        img.style.setProperty("transform", value);
      }
    }, []);

    return (
        <div className="stage">
            <QuickPinchZoom onUpdate={onUpdate}>
                <img ref={imgRef} src={IMG_URL}/>
            </QuickPinchZoom>
        </div>
    )
}

export default Mapping