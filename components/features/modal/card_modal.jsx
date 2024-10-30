import React from 'react'
import Styles from './card_modal.module.scss';

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.4)',
    zIndex: '1000',

}

const MODAL_STYLE = {
    // position: 'fixed',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%,-50%)',
    // borderRadius: '10px',
    // color: 'black',
}


const Modal = ({ isOpen, setModalOpen }) => {


    return isOpen ? (
        <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE} className={Styles.container}>

                <div className={Styles.close}>
                    <button className={Styles.btn}
                        onClick={setModalOpen}
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'black',
                            fontSize: '33px',
                            fontWeight: '100'
                        }}
                    >
                        x
                    </button>
                </div>
                
            </div>
        </div>
    ) : null;


}

export default Modal;
