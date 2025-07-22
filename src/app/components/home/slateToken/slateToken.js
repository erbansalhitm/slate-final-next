"use client"

import styles from "./slateToken.module.scss";
import Image from "next/image";
import { useRef, useEffect } from "react";

const tokenUtilityItems = [
  {
    icon: "/token-utility-1.svg",
    title: "Governance",
    desc: "Vote on protocol upgrades, parameter changes, and treasury allocations",
  },
  {
    icon: "/token-utility-2.svg",
    title: "Rewards",
    desc: "Earn rewards for participating in governance and protocol activities",
  },
  {
    icon: "/token-utility-3.svg",
    title: "Passive Income",
    desc: "Receive additional passive income for Stability Fund depositors",
  },
  {
    icon: "/token-utility-4.svg",
    title: "Incentives",
    desc: "Incentivize behaviors that benefit the protocol ecosystem",
  },
];

export default function SlateToken() {
  return (
    <div className={styles.slateToken}>
      <div className={`${styles.slateTokenWrapper} container`}>
        <div className={styles.slateTokenContent}>
            <Image
              src="/slatetoken.svg"
              alt="slatetoken"
              width={272}
              height={50}
              className={styles.slateTokenImage}
            />
            <h5 className={styles.slateTokenText}>is the Native Governance <br /> Token of the Protocol</h5>
        </div>
        <div className={styles.slateTokenInnerSection}>
            <p className={styles.slateTokenDescription}>Slate is the native governance token of the protocol, designed to align incentives between users and the protocol itself. The SLATE token serves as the governance token for the protocol, allowing holders to participate in decision-making and earn rewards. Initially distributed through an airdrop to early users, it creates a path for protocol ownership among its most active participants.  Long-term, SLATE will be used to provide additional passive income to Stability Fund depositors and incentivize specific behaviors that benefit the protocol ecosystem as a whole.</p>
            <div className={styles.tokenUtility}>
                <h6 className={styles.tokenUtilityTitle}>Token Utility</h6>
                <div className={styles.tokenUtilityList}>
                  {tokenUtilityItems.map((item, idx) => (
                    <div className={styles.tokenUtilityItem} key={idx}>
                      <div className={styles.tokenUtilityIcon}>
                        {/* <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                        /> */}
                      </div>
                      <div className={styles.tokenUtilityContent}>
                        <h6 className={styles.tokenUtilityContentTitle}>{item.title}</h6>
                        <p className={styles.tokenUtilityContentDescription}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
