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
    }, [isMobileDevice]);

    return (
        <div>
            {!isMobileDevice &&
                <div style={{marginTop: '50px'}}>
                    <h1 style={{fontSize: "18px", textAlign: "center"}}>SCANNER QR</h1>
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
                        constraints = {{ facingMode:  "environment"  }}
                        style = {{ width: "50%", height: "50%" }}
                    />
                    <p style={{textAlign: "center"}}>{data}</p>
                </div>
            }

            {isMobileDevice && <h1 style={{marginTop: '50px', fontSize: "18px", textAlign: "center"}}>ACCESSIBILE SOLO DA TELEFONO</h1>}
        </div>
    )
}

export default ScanReader