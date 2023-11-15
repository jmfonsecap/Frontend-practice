import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import HeadBar from "./components/HeadBar.tsx";
import { useState, useEffect, use } from "react";
import { set } from "lodash";
import Modal from "./components/Modal.tsx";
const IssuesPage = () => {
  const [modal, setModal] = useState(false);
  const [heroData, setHeroData] = useState(null);
  const closeModal = () => {
    setModal(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/data");
        const result = await response.json();
        setHeroData(result.meta);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  });
  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <HeadBar />
        <a href={Routes.projects} className={styles.dashboard}>
          Open Dashboard
        </a>
      </header>
      {heroData && (
        <div className={styles.mainContent}>
          <h1>{heroData.title}</h1>
          <p>{heroData.subtitle}</p>

          <img
            src={`https://prolog-api.profy.dev${heroData.image.src}`}
            width={heroData.image.width}
            height={heroData.image.height}
          />
        </div>
      )}
      <Modal isOpen={modal} onClose={closeModal}>
        <img
          src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"
          alt="Mail symbol"
        />
        <h1>Contact Us Via Email</h1>
        <p className={styles.modalText}>
          Any questions? Send us an email at prolog@prof.dev. We usually answer
          within 24 hours.
        </p>
      </Modal>

      <button
        className={styles.contactButton}
        onClick={() => {
          setModal(true);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
