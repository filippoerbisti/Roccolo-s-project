import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { FiHome, FiMap, FiHelpCircle } from 'react-icons/fi';

const IMG_URL =
  "https://user-images.githubusercontent.com/4661784/" +
  "56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png";

const Main = () => {
    const imgRef = useRef();
    const onUpdate = useCallback(({ x, y, scale }) => {
      const { current: img } = imgRef;
  
      if (img) {
        const value = make3dTransformValue({ x, y, scale });
  
        img.style.setProperty("transform", value);
      }
    }, []);
  
    // Footer App
    if (typeof window !== "undefined"){
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
                        `${resetClass} ${target.getAttribute("data-where")}-style`
                    );
                    lis.forEach((item) => clearClass(item, "active"));
                    setClass(target, "active");
                });
            });
        });
    }
  
    function clearClass(node, className) {
      node.classList.remove(className);
    }
  
    function setClass(node, className) {
      node.classList.add(className);
    }

    return (
        <div>
            <div className="stage">
                    <QuickPinchZoom onUpdate={onUpdate}>
                        <img ref={imgRef} src={IMG_URL}/>
                    </QuickPinchZoom>
                <div className="tabbar">
                    <ul className="flex-center">
                        <li className="">
                            <FiHome/>
                        </li>
                        <li className="">
                            <FiMap/>
                        </li>
                        <li className="">
                            <FiHelpCircle/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main