import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

const ScanReader = () => {

    const [data, setData] = useState("No result");

    let isMobileDevice;
    useEffect(() => {
        if (window.navigator.userAgent.toLowerCase().includes("mobi"))
            isMobileDevice = true;
        else
            isMobileDevice = false;

        console.log(isMobileDevice)
    }, [isMobileDevice]);

    return (
        <div>
            {isMobileDevice &&
                <div style={{marginTop: '170px'}}>
                    <h1>SCANNER QR</h1>
                    <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result?.text);
                            }

                            if (!!error) {
                                console.info(error);
                            }
                        }}
                        //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
                        // open the front camera
                        constraints    ={{ facingMode:  "environment"  }}
                        style={{ width: "40%", height: "40%" }}
                    />
                    <p>{data}</p>
                </div>
            }

            {!isMobileDevice && <h1 style={{marginTop: '170px'}}>ACCESSIBILE SOLO DA TELEFONO</h1>}
        </div>
    )
}

export default ScanReader