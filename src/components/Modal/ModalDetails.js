import React from 'react'
import './ModalDetails.css'
import Modal from '@material-ui/core/Modal';

const ModalDetails = ({ videos, open, handleClose }) => {
    return (
        <>
            {videos &&
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div className="modal">
                        <iframe
                            src={videos}
                            className="youtubeIframe"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                        />
                    </div>
                </Modal>
            }
        </>
    )
}
export default ModalDetails
