import React from 'react'
import Modal from 'react-modal';
import styles from "./styles.module.scss";

function InfoModal({isOpen, closeModal, message}) {
    let subtitle;

    const customStyles = {
        content: {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            width                 : '40%',        
            height                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            border                : '2px solid #000',
            padding               : '0',
            font                  : 'bold 20px arial,serif',
            textAlign             : 'center',
            lineHeight            : '60px',     
            color                 : '#fff',
            backgroundColor       : '#00CED1',
            overflow              :'initial'
        },
      };

    function afterOpenModal() {
        subtitle.style.color = '#f00';
      }

  return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div className={styles.buttonWrapper}>
              <button className={styles.close} onClick={closeModal}>X</button>
          </div>
        {message}
      </Modal>
  )
}
export default InfoModal;