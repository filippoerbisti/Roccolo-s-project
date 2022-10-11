// generate.js
import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";

function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (
    <div className={styles.main}>
          <div className={styles.card}>Generate QR</div>

      {qrCodeValue != "" && (
        <QRCode value={qrCodeValue} className={styles.containerColumn} />
      )}
      <input
        className={styles.card}
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Generate;
