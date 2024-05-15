import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../../css/dct-style.css"; 

const ImageModal = ({ show, onHide }) => {
    const [width, setWidth] = useState(250);
    const [height, setHeight] = useState(550);

    useEffect(() => {
        const setCanvasDimensions = () => {
            const windowWidth = window.innerWidth;

            if (windowWidth <= 1000 && windowWidth > 600) {
                setWidth(320);
                setHeight(500);
            } else if (windowWidth <= 600) {
                setWidth(280);
                setHeight(300);
            } else {
                // Default
                setWidth(250);  
                setHeight(550);
            }
        };

        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);
        
        return () => window.removeEventListener('resize', setCanvasDimensions);
    }, []);

    return (
        <Modal show={show} onHide={onHide} id="imageModal">
            <Modal.Header style={{ backgroundColor: "white" }}>
                <Modal.Title style={{ color: "black" }}>Your Design</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <canvas id="displayCanvas" width={width} height={height}></canvas>
            </Modal.Body>
            <Modal.Footer style={{ borderColor: "rgba(128, 128, 128, 0.5)" }}>
                <Button variant="danger" onClick={onHide}>
                    Close
                </Button>
                <a className="btn btn-primary " id="generatedCanvasDownload" href="#" download>
                    Download
                </a>
            </Modal.Footer>
            {/* Hidden canvas for downloading */}
            <canvas id="downloadCanvas" style={{ display: "none" }}></canvas>
        </Modal>
    );
};

export default ImageModal;
