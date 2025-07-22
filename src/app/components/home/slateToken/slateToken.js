"use client"

import styles from "./slateToken.module.scss";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function SlateToken() {
  return (
    <div className={styles.slateToken}>
      <div className={`${styles.slateTokenWrapper} container`}>
        <div className={styles.slateTokenContent}>
            <Image
              src="/slatetoken.svg"
              alt="slatetoken"
              width={125}
              height={50}
              className={styles.slateTokenImage}
            />
            <h5>is the Native Governance Token of the Protocol</h5>
        </div>
      </div>
    </div>
  );
}
