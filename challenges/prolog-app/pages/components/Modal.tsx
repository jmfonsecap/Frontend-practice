import React, { ReactNode } from "react";
import styles from "../index.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: Props) {
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>{children}</div>
          <div className={styles.buttonContainer}>
            <button className={styles.closeButton} onClick={onClose}>
              Cancel
            </button>
            <a
              className={styles.emailButton}
              href="mailto:jfonseca193@gmail.com"
            >
              Open email app
            </a>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
