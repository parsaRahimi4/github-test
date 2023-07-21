import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to parsa rahimi's test project!</h1>
      <p>
        for start please add your username at the pathname for check your
        repositories
      </p>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage: `url(${"/imgs/home/new.svg"})`,
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
