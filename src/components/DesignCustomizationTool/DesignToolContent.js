import React, { useState, useEffect } from 'react';
import ImageModal from '../DesignCustomizationTool/ImageModal';
import "../../css/dct-style.css";
import "../DesignCustomizationTool/DesignCustomCode.js";
import html2canvas from 'html2canvas';

const DesignToolContent = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleGenerateImage = () => {
        handleShowModal();
        html2canvas(document.getElementById('flex_model_canvas')).then(canvas => {
            const modalCanvas = document.getElementById('displayCanvas');
            const modalCtx = modalCanvas.getContext('2d');

            modalCtx.drawImage(canvas, 0, 0, modalCanvas.width, modalCanvas.height);
            
            const downloadCanvas = document.getElementById('downloadCanvas');
            const downloadCtx = downloadCanvas.getContext('2d');
            downloadCanvas.width = canvas.width;
            downloadCanvas.height = canvas.height;
            downloadCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
            const modalCanvasDownload = document.getElementById('generatedCanvasDownload');
            const pngDataUrl = downloadCanvas.toDataURL('image/png');
            modalCanvasDownload.href = pngDataUrl;
            
            const imageModal = document.getElementById('imageModal');
            imageModal.style.display = 'block';
        });
    };

    return (
        <section className="align-items-center justify-content-center">
            <div className="container position-relative text-center" style={{ maxWidth: "1290px" }} data-aos="zoom-in" data-aos-delay="100">
                
                {/* Design Tool */}
                <div className="flex-container">
                    <div className="flex-item flex-model-canvas" id="flex_model_canvas">  
                        <div className="flex-item flex-model-item" id="flex_model_item">

                            {/* MODEL */}
                            <img className="model" src={require("../../assets/img/dct/Model.png")} alt="Model" />

                            {/* SLEEVES */}
                                {/* Long Sleeve 1 */}
                                <div className="flex-model-item dress-sleeve-container-1">
                                    <img className="sleeve sleeves-1" id="sleeves_1" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1.png")} />
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c2" id="sleeves_1_c2" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c3" id="sleeves_1_c3" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c4" id="sleeves_1_c4" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c5" id="sleeves_1_c5" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c6" id="sleeves_1_c6" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c7" id="sleeves_1_c7" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-sleeve-container-1">
                                        <img className="sleeve sleeves-1-c8" id="sleeves_1_c8" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1/long-sleeves-1-c8.png")}/>
                                    </div>

                                {/* Long Sleeve 2 */}
                                <div className="flex-model-item dress-sleeve-container-2">
                                    <img className="sleeve sleeves-2" id="sleeves_2" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-2.png")}/>
                                </div>


                            {/* BODICE */}
                                {/* Straight 1 */}
                                <div className="flex-model-item dress-bodice-container-1">
                                    <img className="bodice straight-1" id="straight_1" src={require("../../assets/img/dct/Bodice/straight-sleeveless-2.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c2" id="straight_1_c2" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c3" id="straight_1_c3" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c4" id="straight_1_c4" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c5" id="straight_1_c5" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c6" id="straight_1_c6" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c7" id="straight_1_c7" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-1">
                                        <img className="bodice straight-1-c8" id="straight_1_c8" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-1/straight-sleeveless-1-c8.png")}/>
                                    </div>
                            
                                {/* Straight 2 */}
                                <div className="flex-model-item dress-bodice-container-2">
                                    <img className="bodice straight-2" id="straight_2" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c1.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c2" id="straight_2_c2" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c3" id="straight_2_c3" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c4" id="straight_2_c4" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c5" id="straight_2_c5" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c6" id="straight_2_c6" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c7" id="straight_2_c7" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-2">
                                        <img className="bodice straight-2-c8" id="straight_2_c8" src={require("../../assets/img/dct/Bodice/Colors/straight-sleeveless-2/straight-sleeveless-2-c8.png")}/>
                                    </div>

                                {/* Sweetheart 1 */}
                                <div className="flex-model-item dress-bodice-container-3">
                                    <img className="bodice sweetheart-1" id="sweetheart_1" src={require("../../assets/img/dct/Bodice/sweetheart-sleeveless-2.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c2" id="sweetheart_1_c2" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c3" id="sweetheart_1_c3" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c4" id="sweetheart_1_c4" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c5" id="sweetheart_1_c5" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c6" id="sweetheart_1_c6" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c7" id="sweetheart_1_c7" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-3">
                                        <img className="bodice sweetheart-1-c8" id="sweetheart_1_c8" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-2/sweetheart-sleeveless-2-c8.png")}/>
                                    </div>

                                {/* Sweetheart 2 */}
                                <div className="flex-model-item dress-bodice-container-4">
                                    <img className="bodice sweetheart-2" id="sweetheart_2" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c1.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c2" id="sweetheart_2_c2" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c3" id="sweetheart_2_c3" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c4" id="sweetheart_2_c4" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c5" id="sweetheart_2_c5" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c6" id="sweetheart_2_c6" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c7" id="sweetheart_2_c7" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-4">
                                        <img className="bodice sweetheart-2-c8" id="sweetheart_2_c8" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-3/sweetheart-sleeveless-3-c8.png")}/>
                                    </div>
                                    
                                {/* Sweetheart 3 */}
                                <div className="flex-model-item dress-bodice-container-5">
                                    <img className="bodice sweetheart-3" id="sweetheart_3" src={require("../../assets/img/dct/Bodice/sweetheart-sleeveless-4.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c2" id="sweetheart_3_c2" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c3" id="sweetheart_3_c3" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c4" id="sweetheart_3_c4" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c5" id="sweetheart_3_c5" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c6" id="sweetheart_3_c6" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c7" id="sweetheart_3_c7" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-5">
                                        <img className="bodice sweetheart-3-c8" id="sweetheart_3_c8" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-4/sweetheart-sleeveless-4-c8.png")}/>
                                    </div>

                                {/* Vneck 1 */}
                                <div className="flex-model-item dress-bodice-container-6">
                                    <img className="bodice vneck-1" id="vneck_1" src={require("../../assets/img/dct/Bodice/vneck top.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c2" id="vneck_1_c2" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c3" id="vneck_1_c3" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c4" id="vneck_1_c4" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c5" id="vneck_1_c5" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c6" id="vneck_1_c6" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c7" id="vneck_1_c7" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-6">
                                        <img className="bodice vneck-1-c8" id="vneck_1_c8" src={require("../../assets/img/dct/Bodice/Colors/vneck top/vneck-sleeveless-c8.png")}/>
                                    </div>

                                {/* Vneck 2 */}
                                <div className="flex-model-item dress-bodice-container-7">
                                    <img className="bodice vneck-2" id="vneck_2" src={require("../../assets/img/dct/Bodice/vneck-straight.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c2" id="vneck_2_c2" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c3" id="vneck_2_c3" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c4" id="vneck_2_c4" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c5" id="vneck_2_c5" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c6" id="vneck_2_c6" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c7" id="vneck_2_c7" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-7">
                                        <img className="bodice vneck-2-c8" id="vneck_2_c8" src={require("../../assets/img/dct/Bodice/Colors/vneck-straight/vneck-straight-c8.png")}/>
                                    </div>

                                {/* Vneck 3 */}
                                <div className="flex-model-item dress-bodice-container-8">
                                    <img className="bodice vneck-3" id="vneck_3" src={require("../../assets/img/dct/Bodice/vneck top-2.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c2" id="vneck_3_c2" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c3" id="vneck_3_c3" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c4" id="vneck_3_c4" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c5" id="vneck_3_c5" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c6" id="vneck_3_c6" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c7" id="vneck_3_c7" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-8">
                                        <img className="bodice vneck-3-c8" id="vneck_3_c8" src={require("../../assets/img/dct/Bodice/Colors/vneck top-2/vneck top-2-c8.png")}/>
                                    </div>

                                {/* Vneck 4 */}
                                <div className="flex-model-item dress-bodice-container-9">
                                    <img className="bodice vneck-4" id="vneck_4" src={require("../../assets/img/dct/Bodice/vneck top-5.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c2" id="vneck_4_c2" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c3" id="vneck_4_c3" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c4" id="vneck_4_c4" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c5" id="vneck_4_c5" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c6" id="vneck_4_c6" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c7" id="vneck_4_c7" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-9">
                                        <img className="bodice vneck-4-c8" id="vneck_4_c8" src={require("../../assets/img/dct/Bodice/Colors/vneck top-5/vneck top-5-c8.png")}/>
                                    </div>

                                {/* Sweetheart 4 */}
                                <div className="flex-model-item dress-bodice-container-10">
                                    <img className="bodice sweetheart-4" id="sweetheart_4" src={require("../../assets/img/dct/Bodice/sweetheart-sleeveless-5.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-10">
                                        <img className="bodice sweetheart-4-c2" id="sweetheart_4_c2" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-5/sweetheart-sleeveless-5-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-10">
                                        <img className="bodice sweetheart-4-c3" id="sweetheart_4_c3" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-5/sweetheart-sleeveless-5-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-10">
                                        <img className="bodice sweetheart-4-c4" id="sweetheart_4_c4" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-5/sweetheart-sleeveless-5-c4.png")}/>
                                    </div>
                                
                                {/* Sweetheart 5 */}
                                <div className="flex-model-item dress-bodice-container-11">
                                    <img className="bodice sweetheart-5" id="sweetheart_5" src={require("../../assets/img/dct/Bodice/sweetheart-sleeveless-6.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c2" id="sweetheart_5_c2" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c3" id="sweetheart_5_c3" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c4" id="sweetheart_5_c4" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c5" id="sweetheart_5_c5" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c6" id="sweetheart_5_c6" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c7" id="sweetheart_5_c7" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-11">
                                        <img className="bodice sweetheart-5-c8" id="sweetheart_5_c8" src={require("../../assets/img/dct/Bodice/Colors/sweetheart-sleeveless-6/sweetheart-sleeveless-6-c8.png")}/>
                                    </div>
                                
                                {/* Off-Shoulder 1 */}
                                <div className="flex-model-item dress-bodice-container-12">
                                    <img className="bodice off-shoulder-1" id="off-shoulder_1" src={require("../../assets/img/dct/Bodice/off-shoulder.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c2" id="off-shoulder_1_c2" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c3" id="off-shoulder_1_c3" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c4" id="off-shoulder_1_c4" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c5" id="off-shoulder_1_c5" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c6" id="off-shoulder_1_c6" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c7" id="off-shoulder_1_c7" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-12">
                                        <img className="bodice off-shoulder-1-c8" id="off-shoulder_1_c8" src={require("../../assets/img/dct/Bodice/Colors/off-shoulder/off-shoulder-c8.png")}/>
                                    </div>
                                
                                {/* Scoop 1 */}
                                <div className="flex-model-item dress-bodice-container-13">
                                    <img className="bodice scoop-1" id="scoop_1" src={require("../../assets/img/dct/Bodice/scoop-sleeveless-1.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c2" id="scoop_1_c2" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c3" id="scoop_1_c3" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c4" id="scoop_1_c4" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c5" id="scoop_1_c5" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c6" id="scoop_1_c6" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c7" id="scoop_1_c7" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-13">
                                        <img className="bodice scoop-1-c8" id="scoop_1_c8" src={require("../../assets/img/dct/Bodice/Colors/scoop-sleeveless-1/scoop-sleeveless-1-c8.png")}/>
                                    </div>

                                {/* Half 1 */}
                                <div className="flex-model-item dress-bodice-container-14">
                                    <img className="bodice half-1" id="half_1" src={require("../../assets/img/dct/Bodice/half-sleeveless-1.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c2" id="half_1_c2" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c3" id="half_1_c3" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c4" id="half_1_c4" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c5" id="half_1_c5" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c6" id="half_1_c6" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c7" id="half_1_c7" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-14">
                                        <img className="bodice half-1-c8" id="half_1_c8" src={require("../../assets/img/dct/Bodice/Colors/half-sleeveless-1/half-sleeveless-1-c8.png")}/>
                                    </div>

                                {/* Boat 1 */}
                                <div className="flex-model-item dress-bodice-container-15">
                                    <img className="bodice boat-1" id="boat_1" src={require("../../assets/img/dct/Bodice/boat-sleeveless-1.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c2" id="boat_1_c2" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c3" id="boat_1_c3" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c4" id="boat_1_c4" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c5" id="boat_1_c5" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c6" id="boat_1_c6" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c7" id="boat_1_c7" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-bodice-container-15">
                                        <img className="bodice boat-1-c8" id="boat_1_c8" src={require("../../assets/img/dct/Bodice/Colors/boat-sleeveless-1/boat-sleeveless-1-c8.png")}/>
                                    </div>


                            {/* SKIRT */}
                                {/* Skirt 1 */}
                                <div className="flex-model-item dress-skirt-container-1">
                                    <img className="skirt skirt-1" id="skirt_1" src={require("../../assets/img/dct/Skirt/skirt-1.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c2" id="skirt_1_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c3" id="skirt_1_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c4" id="skirt_1_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c5" id="skirt_1_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c6" id="skirt_1_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c7" id="skirt_1_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-1">
                                        <img className="skirt skirt-1-c8" id="skirt_1_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-1/skirt-1-c8.png")}/>
                                    </div>
                                
                                {/* Skirt 2 */}
                                <div className="flex-model-item dress-skirt-container-2">
                                    <img className="skirt skirt-2" id="skirt_2" src={require("../../assets/img/dct/Skirt/skirt-22.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c2" id="skirt_2_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c3" id="skirt_2_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c4" id="skirt_2_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c5" id="skirt_2_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c6" id="skirt_2_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c7" id="skirt_2_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-2">
                                        <img className="skirt skirt-2-c8" id="skirt_2_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-2/skirt-2-c8.png")}/>
                                    </div>

                                {/* Skirt 3 */}
                                <div className="flex-model-item dress-skirt-container-3">
                                    <img className="skirt skirt-3" id="skirt_3" src={require("../../assets/img/dct/Skirt/skirt-3.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c2" id="skirt_3_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c3" id="skirt_3_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c4" id="skirt_3_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c5" id="skirt_3_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c6" id="skirt_3_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c7" id="skirt_3_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-3">
                                        <img className="skirt skirt-3-c8" id="skirt_3_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-3/skirt-3-c8.png")}/>
                                    </div>

                                {/* Skirt 4 */}
                                <div className="flex-model-item dress-skirt-container-4">
                                    <img className="skirt skirt-4" id="skirt_4" src={require("../../assets/img/dct/Skirt/skirt-4.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c2" id="skirt_4_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c3" id="skirt_4_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c4" id="skirt_4_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c5" id="skirt_4_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c6" id="skirt_4_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c7" id="skirt_4_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-4">
                                        <img className="skirt skirt-4-c8" id="skirt_4_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-4/skirt-4-c8.png")}/>
                                    </div>

                                {/* Skirt 5 */}
                                <div className="flex-model-item dress-skirt-container-5">
                                    <img className="skirt skirt-5" id="skirt_5" src={require("../../assets/img/dct/Skirt/skirt-5.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c2" id="skirt_5_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c3" id="skirt_5_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c4" id="skirt_5_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c5" id="skirt_5_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c6" id="skirt_5_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c7" id="skirt_5_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-5">
                                        <img className="skirt skirt-5-c8" id="skirt_5_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-5/skirt-5-c8.png")}/>
                                    </div>

                                {/* Skirt 6 */}
                                <div className="flex-model-item dress-skirt-container-6">
                                    <img className="skirt skirt-6" id="skirt_6" src={require("../../assets/img/dct/Skirt/skirt-6.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c2" id="skirt_6_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c3" id="skirt_6_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c4" id="skirt_6_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c5" id="skirt_6_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c6" id="skirt_6_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c7" id="skirt_6_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-6">
                                        <img className="skirt skirt-6-c8" id="skirt_6_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-6/skirt-6-c8.png")}/>
                                    </div>

                                {/* Skirt 7 */}
                                <div className="flex-model-item dress-skirt-container-7">
                                    <img className="skirt skirt-7" id="skirt_7" src={require("../../assets/img/dct/Skirt/skirt-7.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c2" id="skirt_7_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c3" id="skirt_7_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c4" id="skirt_7_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c5" id="skirt_7_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c6" id="skirt_7_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c7" id="skirt_7_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-7">
                                        <img className="skirt skirt-7-c8" id="skirt_7_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-7/skirt-7-c8.png")}/>
                                    </div>

                                {/* Skirt 8 */}
                                <div className="flex-model-item dress-skirt-container-8">
                                    <img className="skirt skirt-8" id="skirt_8" src={require("../../assets/img/dct/Skirt/skirt-8.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c2" id="skirt_8_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c3" id="skirt_8_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c4" id="skirt_8_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c5" id="skirt_8_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c6" id="skirt_8_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c7" id="skirt_8_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-8">
                                        <img className="skirt skirt-8-c8" id="skirt_8_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-8/skirt-8-c8.png")}/>
                                    </div>

                                {/* Skirt 9 */}
                                <div className="flex-model-item dress-skirt-container-9">
                                    <img className="skirt skirt-9" id="skirt_9" src={require("../../assets/img/dct/Skirt/skirt-9.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c2" id="skirt_9_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c3" id="skirt_9_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c4" id="skirt_9_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c5" id="skirt_9_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c6" id="skirt_9_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c7" id="skirt_9_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-9">
                                        <img className="skirt skirt-9-c8" id="skirt_9_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-9/skirt-9-c8.png")}/>
                                    </div>

                                {/* Skirt 10 */}
                                <div className="flex-model-item dress-skirt-container-10">
                                    <img className="skirt skirt-10" id="skirt_10" src={require("../../assets/img/dct/Skirt/skirt-10.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c2" id="skirt_10_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c3" id="skirt_10_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c4" id="skirt_10_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c5" id="skirt_10_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c6" id="skirt_10_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c7" id="skirt_10_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-10">
                                        <img className="skirt skirt-10-c8" id="skirt_10_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-10/skirt-10-c8.png")}/>
                                    </div>

                                {/* Skirt 11 */}
                                <div className="flex-model-item dress-skirt-container-11">
                                    <img className="skirt skirt-11" id="skirt_11" src={require("../../assets/img/dct/Skirt/skirt-11.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c2" id="skirt_11_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c3" id="skirt_11_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c4" id="skirt_11_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c5" id="skirt_11_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c6" id="skirt_11_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c7" id="skirt_11_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-11">
                                        <img className="skirt skirt-11-c8" id="skirt_11_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-11/skirt-11-c8.png")}/>
                                    </div>

                                {/* Skirt 12 */}
                                <div className="flex-model-item dress-skirt-container-12">
                                    <img className="skirt skirt-12" id="skirt_12" src={require("../../assets/img/dct/Skirt/skirt-12.png")}/>
                                </div>
                                    {/* Colors */}
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c2" id="skirt_12_c2" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c2.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c3" id="skirt_12_c3" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c3.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c4" id="skirt_12_c4" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c4.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c5" id="skirt_12_c5" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c5.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c6" id="skirt_12_c6" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c6.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c7" id="skirt_12_c7" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c7.png")}/>
                                    </div>
                                    <div className="flex-model-item dress-skirt-container-12">
                                        <img className="skirt skirt-12-c8" id="skirt_12_c8" src={require("../../assets/img/dct/Skirt/Colors/skirt-12/skirt-12-c8.png")}/>
                                    </div>
                        
                        </div>
                    </div>

                    <div className="flex-item flex-custom-item responsive-content">
                        <div className="dress-bodice-container">
                            <div className="dress-bodice-header">
                                <span style={{margin:"10px"}}>&ensp; BODICE</span>
                            </div>
                            <div className="dress-bodice-group">
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="straight_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/straight-sleeveless-2 w model fr2.png")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="straight_2_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/straight-sleeveless-3 w model fr3.png")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="sweetheart_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-2 w model fr4.png")}/>
                                </div>
                                {/* <div className="dress-bodice-item">
                                    <img className="option-img" id="sweetheart_2_btn" src="../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-3 w model fr5.png"/>
                                </div> */}
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="sweetheart_3_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-4 w model fr6.png")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="vneck_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr7.png")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="vneck_2_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck-straight w model fr8.jpg")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="vneck_3_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr9.jpg")}/>
                                </div>
                                {/* <div className="dress-bodice-item">
                                    <img className="option-img" id="vneck_4_btn" src="../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr10.jpg"/>
                                </div> */}
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="vneck_4_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr11.jpg")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="sweetheart_4_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-5 w model fr12.jpg")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="sweetheart_5_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-6 w model fr13.jpg")}/>
                                </div>
                                {/* <div className="dress-bodice-item">
                                    <img className="option-img" id="straight_3_btn" src="../../assets/img/dct/Bodice/Bodice w Model/Frames/straight-sleeveless-4 w model fr14.jpg"/>
                                </div> */}
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="off-shoulder_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/off-shoulder fr15.jpg")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="scoop_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/scoop-sleeveless-1 w model fr16.jpg")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="half_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/half-sleeveless-1 w model fr17.jpg")}/>
                                </div>
                                <div className="dress-bodice-item">
                                    <img className="option-img" id="boat_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/boat-sleeveless-1 w model fr18.jpg")}/>
                                </div>
                            </div>
                            {/* Colors */}
                            <div className="dress-colorgroup">
                                <div className="dress-bodice-colors-straight_1" id="bodice_colors_straight_1">
                                    <div className="color-c1" id="straight_1_btn_c1"></div>
                                    <div className="color-c2" id="straight_1_btn_c2"></div>
                                    <div className="color-c3" id="straight_1_btn_c3"></div>
                                    <div className="color-c4" id="straight_1_btn_c4"></div>
                                    <div className="color-c5" id="straight_1_btn_c5"></div>
                                    <div className="color-c6" id="straight_1_btn_c6"></div>
                                    <div className="color-c7" id="straight_1_btn_c7"></div>
                                    <div className="color-c8" id="straight_1_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-straight_2" id="bodice_colors_straight_2">
                                    <div className="color-c1" id="straight_2_btn_c1"></div>
                                    <div className="color-c2" id="straight_2_btn_c2"></div>
                                    <div className="color-c3" id="straight_2_btn_c3"></div>
                                    <div className="color-c4" id="straight_2_btn_c4"></div>
                                    <div className="color-c5" id="straight_2_btn_c5"></div>
                                    <div className="color-c6" id="straight_2_btn_c6"></div>
                                    <div className="color-c7" id="straight_2_btn_c7"></div>
                                    <div className="color-c8" id="straight_2_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-sweetheart_1" id="bodice_colors_sweetheart_1">
                                    <div className="color-c1" id="sweetheart_1_btn_c1"></div>
                                    <div className="color-c2" id="sweetheart_1_btn_c2"></div>
                                    <div className="color-c3" id="sweetheart_1_btn_c3"></div>
                                    <div className="color-c4" id="sweetheart_1_btn_c4"></div>
                                    <div className="color-c5" id="sweetheart_1_btn_c5"></div>
                                    <div className="color-c6" id="sweetheart_1_btn_c6"></div>
                                    <div className="color-c7" id="sweetheart_1_btn_c7"></div>
                                    <div className="color-c8" id="sweetheart_1_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-sweetheart_2" id="bodice_colors_sweetheart_2">
                                    <div className="color-c1" id="sweetheart_2_btn_c1"></div>
                                    <div className="color-c2" id="sweetheart_2_btn_c2"></div>
                                    <div className="color-c3" id="sweetheart_2_btn_c3"></div>
                                    <div className="color-c4" id="sweetheart_2_btn_c4"></div>
                                    <div className="color-c5" id="sweetheart_2_btn_c5"></div>
                                    <div className="color-c6" id="sweetheart_2_btn_c6"></div>
                                    <div className="color-c7" id="sweetheart_2_btn_c7"></div>
                                    <div className="color-c8" id="sweetheart_2_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-sweetheart_3" id="bodice_colors_sweetheart_3">
                                    <div className="color-c1" id="sweetheart_3_btn_c1"></div>
                                    <div className="color-c2" id="sweetheart_3_btn_c2"></div>
                                    <div className="color-c3" id="sweetheart_3_btn_c3"></div>
                                    <div className="color-c4" id="sweetheart_3_btn_c4"></div>
                                    <div className="color-c5" id="sweetheart_3_btn_c5"></div>
                                    <div className="color-c6" id="sweetheart_3_btn_c6"></div>
                                    <div className="color-c7" id="sweetheart_3_btn_c7"></div>
                                    <div className="color-c8" id="sweetheart_3_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-vneck_1" id="bodice_colors_vneck_1">
                                    <div className="color-c1" id="vneck_1_btn_c1"></div>
                                    <div className="color-c2" id="vneck_1_btn_c2"></div>
                                    <div className="color-c3" id="vneck_1_btn_c3"></div>
                                    <div className="color-c4" id="vneck_1_btn_c4"></div>
                                    <div className="color-c5" id="vneck_1_btn_c5"></div>
                                    <div className="color-c6" id="vneck_1_btn_c6"></div>
                                    <div className="color-c7" id="vneck_1_btn_c7"></div>
                                    <div className="color-c8" id="vneck_1_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-vneck_2" id="bodice_colors_vneck_2">
                                    <div className="color-c1" id="vneck_2_btn_c1"></div>
                                    <div className="color-c2" id="vneck_2_btn_c2"></div>
                                    <div className="color-c3" id="vneck_2_btn_c3"></div>
                                    <div className="color-c4" id="vneck_2_btn_c4"></div>
                                    <div className="color-c5" id="vneck_2_btn_c5"></div>
                                    <div className="color-c6" id="vneck_2_btn_c6"></div>
                                    <div className="color-c7" id="vneck_2_btn_c7"></div>
                                    <div className="color-c8" id="vneck_2_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-vneck_3" id="bodice_colors_vneck_3">
                                    <div className="color-c1" id="vneck_3_btn_c1"></div>
                                    <div className="color-c2" id="vneck_3_btn_c2"></div>
                                    <div className="color-c3" id="vneck_3_btn_c3"></div>
                                    <div className="color-c4" id="vneck_3_btn_c4"></div>
                                    <div className="color-c5" id="vneck_3_btn_c5"></div>
                                    <div className="color-c6" id="vneck_3_btn_c6"></div>
                                    <div className="color-c7" id="vneck_3_btn_c7"></div>
                                    <div className="color-c8" id="vneck_3_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-vneck_4" id="bodice_colors_vneck_4">
                                    <div className="color-c1" id="vneck_4_btn_c1"></div>
                                    <div className="color-c2" id="vneck_4_btn_c2"></div>
                                    <div className="color-c3" id="vneck_4_btn_c3"></div>
                                    <div className="color-c4" id="vneck_4_btn_c4"></div>
                                    <div className="color-c5" id="vneck_4_btn_c5"></div>
                                    <div className="color-c6" id="vneck_4_btn_c6"></div>
                                    <div className="color-c7" id="vneck_4_btn_c7"></div>
                                    <div className="color-c8" id="vneck_4_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-sweetheart_4" id="bodice_colors_sweetheart_4">
                                    <div className="color-c1" id="sweetheart_4_btn_c1"></div>
                                    <div className="color-c2" id="sweetheart_4_btn_c2"></div>
                                    <div className="color-c3" id="sweetheart_4_btn_c3"></div>
                                    <div className="color-c4" id="sweetheart_4_btn_c4"></div>
                                </div>
                                <div className="dress-bodice-colors-sweetheart_5" id="bodice_colors_sweetheart_5">
                                    <div className="color-c1" id="sweetheart_5_btn_c1"></div>
                                    <div className="color-c2" id="sweetheart_5_btn_c2"></div>
                                    <div className="color-c3" id="sweetheart_5_btn_c3"></div>
                                    <div className="color-c4" id="sweetheart_5_btn_c4"></div>
                                    <div className="color-c5" id="sweetheart_5_btn_c5"></div>
                                    <div className="color-c6" id="sweetheart_5_btn_c6"></div>
                                    <div className="color-c7" id="sweetheart_5_btn_c7"></div>
                                    <div className="color-c8" id="sweetheart_5_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-off-shoulder_1" id="bodice_colors_off-shoulder_1">
                                    <div className="color-c1" id="off-shoulder_1_btn_c1"></div>
                                    <div className="color-c2" id="off-shoulder_1_btn_c2"></div>
                                    <div className="color-c3" id="off-shoulder_1_btn_c3"></div>
                                    <div className="color-c4" id="off-shoulder_1_btn_c4"></div>
                                    <div className="color-c5" id="off-shoulder_1_btn_c5"></div>
                                    <div className="color-c6" id="off-shoulder_1_btn_c6"></div>
                                    <div className="color-c7" id="off-shoulder_1_btn_c7"></div>
                                    <div className="color-c8" id="off-shoulder_1_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-scoop_1" id="bodice_colors_scoop_1">
                                    <div className="color-c1" id="scoop_1_btn_c1"></div>
                                    <div className="color-c2" id="scoop_1_btn_c2"></div>
                                    <div className="color-c3" id="scoop_1_btn_c3"></div>
                                    <div className="color-c4" id="scoop_1_btn_c4"></div>
                                    <div className="color-c5" id="scoop_1_btn_c5"></div>
                                    <div className="color-c6" id="scoop_1_btn_c6"></div>
                                    <div className="color-c7" id="scoop_1_btn_c7"></div>
                                    <div className="color-c8" id="scoop_1_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-half_1" id="bodice_colors_half_1">
                                    <div className="color-c1" id="half_1_btn_c1"></div>
                                    <div className="color-c2" id="half_1_btn_c2"></div>
                                    <div className="color-c3" id="half_1_btn_c3"></div>
                                    <div className="color-c4" id="half_1_btn_c4"></div>
                                    <div className="color-c5" id="half_1_btn_c5"></div>
                                    <div className="color-c6" id="half_1_btn_c6"></div>
                                    <div className="color-c7" id="half_1_btn_c7"></div>
                                    <div className="color-c8" id="half_1_btn_c8"></div>
                                </div>
                                <div className="dress-bodice-colors-boat_1" id="bodice_colors_boat_1">
                                    <div className="color-c1" id="boat_1_btn_c1"></div>
                                    <div className="color-c2" id="boat_1_btn_c2"></div>
                                    <div className="color-c3" id="boat_1_btn_c3"></div>
                                    <div className="color-c4" id="boat_1_btn_c4"></div>
                                    <div className="color-c5" id="boat_1_btn_c5"></div>
                                    <div className="color-c6" id="boat_1_btn_c6"></div>
                                    <div className="color-c7" id="boat_1_btn_c7"></div>
                                    <div className="color-c8" id="boat_1_btn_c8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="sleeves-container">
                            <div className="sleeves-header" id="sleeves_header">
                                <span style={{margin:"10px"}}>&ensp; SLEEVES</span>
                            </div>
                            <div className="sleeves-group" id="sleeves_group_show">
                                <div className="sleeves-item">
                                    <img className="option-img" id="longsleeves_1_btn" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1.png")}/>
                                </div>
                                <div className="sleeves-item">
                                    <img className="option-img" id="longsleeves_2_btn" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-2.png")}/>
                                </div>
                                <div className="sleeves-item">
                                    <img className="option-img remove" id="remove_sleeve_btn" src={require("../../assets/img/dct/remove.png")}/>
                                </div>
                            </div>
                            <div className="dress-colorgroup" id="dress_colorgroup">
                                <div className="dress-sleeves-colors-longsleeves_1" id="sleeves_colors_longsleeves_1">
                                    <div className="color-c1" id="longsleeves_1_btn_c1"></div>
                                    <div className="color-c2" id="longsleeves_1_btn_c2"></div>
                                    <div className="color-c3" id="longsleeves_1_btn_c3"></div>
                                    <div className="color-c4" id="longsleeves_1_btn_c4"></div>
                                    <div className="color-c5" id="longsleeves_1_btn_c5"></div>
                                    <div className="color-c6" id="longsleeves_1_btn_c6"></div>
                                    <div className="color-c7" id="longsleeves_1_btn_c7"></div>
                                    <div className="color-c8" id="longsleeves_1_btn_c8"></div>
                                </div>
                                {/* <div className="dress-sleeves-colors-longsleeves_2" id="sleeves_colors_longsleeves_2">
                                    <p>Lngslv2</p>
                                    <div className="color-c1" id="longsleeves_2_btn_c1"></div>
                                    <div className="color-c2" id="longsleeves_2_btn_c2"></div>
                                    <div className="color-c3" id="longsleeves_2_btn_c3"></div>
                                    <div className="color-c4" id="longsleeves_2_btn_c4"></div>
                                    <div className="color-c5" id="longsleeves_2_btn_c5"></div>
                                    <div className="color-c6" id="longsleeves_2_btn_c6"></div>
                                    <div className="color-c7" id="longsleeves_2_btn_c7"></div>
                                    <div className="color-c8" id="longsleeves_2_btn_c8"></div>
                                </div> */}
                            </div>
                        </div>
                        <div className="skirt-container">
                            <div className="skirt-header">
                                <span style={{margin:"10px"}}>&ensp; SKIRT</span>
                            </div>
                            <div className="skirt-group">
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_1_btn"src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-1 w model fr1.png")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_2_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-2 w model fr2.png")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_3_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-3 w model fr3.png")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_4_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-4 w model fr4.png")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_5_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-5 w model fr5.png")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_6_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-6 w model fr6.jpg")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_7_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-7 w model fr7.jpg")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_8_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-8 w model fr8.jpg")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_9_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-9 w model fr9.jpg")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_10_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-10 w model fr10.jpg")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_11_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-11 w model fr11.jpg")}/>
                                </div>
                                <div className="skirt-item">
                                    <img className="option-img" id="skirt_12_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-12 w model fr12.jpg")}/>
                                </div>
                            </div>
                            <div className="dress-colorgroup">
                                <div className="dress-skirt-colors-skirt_1" id="skirt_colors_skirt_1">
                                    <div className="color-c1" id="skirt_1_btn_c1"></div>
                                    <div className="color-c2" id="skirt_1_btn_c2"></div>
                                    <div className="color-c3" id="skirt_1_btn_c3"></div>
                                    <div className="color-c4" id="skirt_1_btn_c4"></div>
                                    <div className="color-c5" id="skirt_1_btn_c5"></div>
                                    <div className="color-c6" id="skirt_1_btn_c6"></div>
                                    <div className="color-c7" id="skirt_1_btn_c7"></div>
                                    <div className="color-c8" id="skirt_1_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_2" id="skirt_colors_skirt_2">
                                    <div className="color-c1" id="skirt_2_btn_c1"></div>
                                    <div className="color-c2" id="skirt_2_btn_c2"></div>
                                    <div className="color-c3" id="skirt_2_btn_c3"></div>
                                    <div className="color-c4" id="skirt_2_btn_c4"></div>
                                    <div className="color-c5" id="skirt_2_btn_c5"></div>
                                    <div className="color-c6" id="skirt_2_btn_c6"></div>
                                    <div className="color-c7" id="skirt_2_btn_c7"></div>
                                    <div className="color-c8" id="skirt_2_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_3" id="skirt_colors_skirt_3">
                                    <div className="color-c1" id="skirt_3_btn_c1"></div>
                                    <div className="color-c2" id="skirt_3_btn_c2"></div>
                                    <div className="color-c3" id="skirt_3_btn_c3"></div>
                                    <div className="color-c4" id="skirt_3_btn_c4"></div>
                                    <div className="color-c5" id="skirt_3_btn_c5"></div>
                                    <div className="color-c6" id="skirt_3_btn_c6"></div>
                                    <div className="color-c7" id="skirt_3_btn_c7"></div>
                                    <div className="color-c8" id="skirt_3_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_4" id="skirt_colors_skirt_4">
                                    <div className="color-c1" id="skirt_4_btn_c1"></div>
                                    <div className="color-c2" id="skirt_4_btn_c2"></div>
                                    <div className="color-c3" id="skirt_4_btn_c3"></div>
                                    <div className="color-c4" id="skirt_4_btn_c4"></div>
                                    <div className="color-c5" id="skirt_4_btn_c5"></div>
                                    <div className="color-c6" id="skirt_4_btn_c6"></div>
                                    <div className="color-c7" id="skirt_4_btn_c7"></div>
                                    <div className="color-c8" id="skirt_4_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_5" id="skirt_colors_skirt_5">
                                    <div className="color-c1" id="skirt_5_btn_c1"></div>
                                    <div className="color-c2" id="skirt_5_btn_c2"></div>
                                    <div className="color-c3" id="skirt_5_btn_c3"></div>
                                    <div className="color-c4" id="skirt_5_btn_c4"></div>
                                    <div className="color-c5" id="skirt_5_btn_c5"></div>
                                    <div className="color-c6" id="skirt_5_btn_c6"></div>
                                    <div className="color-c7" id="skirt_5_btn_c7"></div>
                                    <div className="color-c8" id="skirt_5_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_6" id="skirt_colors_skirt_6">
                                    <div className="color-c1" id="skirt_6_btn_c1"></div>
                                    <div className="color-c2" id="skirt_6_btn_c2"></div>
                                    <div className="color-c3" id="skirt_6_btn_c3"></div>
                                    <div className="color-c4" id="skirt_6_btn_c4"></div>
                                    <div className="color-c5" id="skirt_6_btn_c5"></div>
                                    <div className="color-c6" id="skirt_6_btn_c6"></div>
                                    <div className="color-c7" id="skirt_6_btn_c7"></div>
                                    <div className="color-c8" id="skirt_6_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_7" id="skirt_colors_skirt_7">
                                    <div className="color-c1" id="skirt_7_btn_c1"></div>
                                    <div className="color-c2" id="skirt_7_btn_c2"></div>
                                    <div className="color-c3" id="skirt_7_btn_c3"></div>
                                    <div className="color-c4" id="skirt_7_btn_c4"></div>
                                    <div className="color-c5" id="skirt_7_btn_c5"></div>
                                    <div className="color-c6" id="skirt_7_btn_c6"></div>
                                    <div className="color-c7" id="skirt_7_btn_c7"></div>
                                    <div className="color-c8" id="skirt_7_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_8" id="skirt_colors_skirt_8">
                                    <div className="color-c1" id="skirt_8_btn_c1"></div>
                                    <div className="color-c2" id="skirt_8_btn_c2"></div>
                                    <div className="color-c3" id="skirt_8_btn_c3"></div>
                                    <div className="color-c4" id="skirt_8_btn_c4"></div>
                                    <div className="color-c5" id="skirt_8_btn_c5"></div>
                                    <div className="color-c6" id="skirt_8_btn_c6"></div>
                                    <div className="color-c7" id="skirt_8_btn_c7"></div>
                                    <div className="color-c8" id="skirt_8_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_9" id="skirt_colors_skirt_9">
                                    <div className="color-c1" id="skirt_9_btn_c1"></div>
                                    <div className="color-c2" id="skirt_9_btn_c2"></div>
                                    <div className="color-c3" id="skirt_9_btn_c3"></div>
                                    <div className="color-c4" id="skirt_9_btn_c4"></div>
                                    <div className="color-c5" id="skirt_9_btn_c5"></div>
                                    <div className="color-c6" id="skirt_9_btn_c6"></div>
                                    <div className="color-c7" id="skirt_9_btn_c7"></div>
                                    <div className="color-c8" id="skirt_9_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_10" id="skirt_colors_skirt_10">
                                    <div className="color-c1" id="skirt_10_btn_c1"></div>
                                    <div className="color-c2" id="skirt_10_btn_c2"></div>
                                    <div className="color-c3" id="skirt_10_btn_c3"></div>
                                    <div className="color-c4" id="skirt_10_btn_c4"></div>
                                    <div className="color-c5" id="skirt_10_btn_c5"></div>
                                    <div className="color-c6" id="skirt_10_btn_c6"></div>
                                    <div className="color-c7" id="skirt_10_btn_c7"></div>
                                    <div className="color-c8" id="skirt_10_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_11" id="skirt_colors_skirt_11">
                                    <div className="color-c1" id="skirt_11_btn_c1"></div>
                                    <div className="color-c2" id="skirt_11_btn_c2"></div>
                                    <div className="color-c3" id="skirt_11_btn_c3"></div>
                                    <div className="color-c4" id="skirt_11_btn_c4"></div>
                                    <div className="color-c5" id="skirt_11_btn_c5"></div>
                                    <div className="color-c6" id="skirt_11_btn_c6"></div>
                                    <div className="color-c7" id="skirt_11_btn_c7"></div>
                                    <div className="color-c8" id="skirt_11_btn_c8"></div>
                                </div>
                                <div className="dress-skirt-colors-skirt_12" id="skirt_colors_skirt_12">
                                    <div className="color-c1" id="skirt_12_btn_c1"></div>
                                    <div className="color-c2" id="skirt_12_btn_c2"></div>
                                    <div className="color-c3" id="skirt_12_btn_c3"></div>
                                    <div className="color-c4" id="skirt_12_btn_c4"></div>
                                    <div className="color-c5" id="skirt_12_btn_c5"></div>
                                    <div className="color-c6" id="skirt_12_btn_c6"></div>
                                    <div className="color-c7" id="skirt_12_btn_c7"></div>
                                    <div className="color-c8" id="skirt_12_btn_c8"></div>
                                </div>
                            </div>
                        </div>
                        <div className="download-container">
                            <div className="download-header" id="download_header">
                                <button className="dct-button" id="generateImageBtn" onClick={handleGenerateImage}>Download</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex-customize-field">
                    <button className="dct-button" /* style={{ backgroundColor: "green" }} */ id="custom_btn">Customize</button>
                    <button className="dct-button" /* style={{ backgroundColor: "blue" }} */ id="generateImageBtn" onClick={handleGenerateImage}>Download</button>
                </div>

                <div className="responsive-custom-content">
                    <div className="responsive-bodice-container">
                        <div className="dress-bodice-header">
                            <span style={{margin:"10px"}}>&ensp; BODICE</span>
                        </div>
                        <div className="responsive-bodice-group">
                            <div className="dress-bodice-item">
                                <img className="option-img" id="straight_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/straight-sleeveless-2 w model fr2.png")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="straight_2_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/straight-sleeveless-3 w model fr3.png")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="sweetheart_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-2 w model fr4.png")}/>
                            </div>
                            {/* <div className="dress-bodice-item">
                                <img className="option-img" id="sweetheart_2_btn" src="../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-3 w model fr5.png"/>
                            </div> */}
                            <div className="dress-bodice-item">
                                <img className="option-img" id="sweetheart_3_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-4 w model fr6.png")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="vneck_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr7.png")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="vneck_2_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck-straight w model fr8.jpg")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="vneck_3_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr9.jpg")}/>
                            </div>
                            {/* <div className="dress-bodice-item">
                                <img className="option-img" id="vneck_4_btn" src="../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr10.jpg"/>
                            </div> */}
                            <div className="dress-bodice-item">
                                <img className="option-img" id="vneck_4_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/vneck top w model fr11.jpg")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="sweetheart_4_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-5 w model fr12.jpg")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="sweetheart_5_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/sweetheart-sleeveless-6 w model fr13.jpg")}/>
                            </div>
                            {/* <div className="dress-bodice-item">
                                <img className="option-img" id="straight_3_btn" src="../../assets/img/dct/Bodice/Bodice w Model/Frames/straight-sleeveless-4 w model fr14.jpg"/>
                            </div> */}
                            <div className="dress-bodice-item">
                                <img className="option-img" id="off-shoulder_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/off-shoulder fr15.jpg")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="scoop_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/scoop-sleeveless-1 w model fr16.jpg")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="half_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/half-sleeveless-1 w model fr17.jpg")}/>
                            </div>
                            <div className="dress-bodice-item">
                                <img className="option-img" id="boat_1_btn" src={require("../../assets/img/dct/Bodice/Bodice w Model/Frames/boat-sleeveless-1 w model fr18.jpg")}/>
                            </div>
                        </div>
                        {/* Colors */}
                        <div className="dress-colorgroup">
                            <div className="dress-bodice-colors-straight_1" id="bodice_colors_straight_1">
                                <div className="color-c1" id="straight_1_btn_c1"></div>
                                <div className="color-c2" id="straight_1_btn_c2"></div>
                                <div className="color-c3" id="straight_1_btn_c3"></div>
                                <div className="color-c4" id="straight_1_btn_c4"></div>
                                <div className="color-c5" id="straight_1_btn_c5"></div>
                                <div className="color-c6" id="straight_1_btn_c6"></div>
                                <div className="color-c7" id="straight_1_btn_c7"></div>
                                <div className="color-c8" id="straight_1_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-straight_2" id="bodice_colors_straight_2">
                                <div className="color-c1" id="straight_2_btn_c1"></div>
                                <div className="color-c2" id="straight_2_btn_c2"></div>
                                <div className="color-c3" id="straight_2_btn_c3"></div>
                                <div className="color-c4" id="straight_2_btn_c4"></div>
                                <div className="color-c5" id="straight_2_btn_c5"></div>
                                <div className="color-c6" id="straight_2_btn_c6"></div>
                                <div className="color-c7" id="straight_2_btn_c7"></div>
                                <div className="color-c8" id="straight_2_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-sweetheart_1" id="bodice_colors_sweetheart_1">
                                <div className="color-c1" id="sweetheart_1_btn_c1"></div>
                                <div className="color-c2" id="sweetheart_1_btn_c2"></div>
                                <div className="color-c3" id="sweetheart_1_btn_c3"></div>
                                <div className="color-c4" id="sweetheart_1_btn_c4"></div>
                                <div className="color-c5" id="sweetheart_1_btn_c5"></div>
                                <div className="color-c6" id="sweetheart_1_btn_c6"></div>
                                <div className="color-c7" id="sweetheart_1_btn_c7"></div>
                                <div className="color-c8" id="sweetheart_1_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-sweetheart_2" id="bodice_colors_sweetheart_2">
                                <div className="color-c1" id="sweetheart_2_btn_c1"></div>
                                <div className="color-c2" id="sweetheart_2_btn_c2"></div>
                                <div className="color-c3" id="sweetheart_2_btn_c3"></div>
                                <div className="color-c4" id="sweetheart_2_btn_c4"></div>
                                <div className="color-c5" id="sweetheart_2_btn_c5"></div>
                                <div className="color-c6" id="sweetheart_2_btn_c6"></div>
                                <div className="color-c7" id="sweetheart_2_btn_c7"></div>
                                <div className="color-c8" id="sweetheart_2_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-sweetheart_3" id="bodice_colors_sweetheart_3">
                                <div className="color-c1" id="sweetheart_3_btn_c1"></div>
                                <div className="color-c2" id="sweetheart_3_btn_c2"></div>
                                <div className="color-c3" id="sweetheart_3_btn_c3"></div>
                                <div className="color-c4" id="sweetheart_3_btn_c4"></div>
                                <div className="color-c5" id="sweetheart_3_btn_c5"></div>
                                <div className="color-c6" id="sweetheart_3_btn_c6"></div>
                                <div className="color-c7" id="sweetheart_3_btn_c7"></div>
                                <div className="color-c8" id="sweetheart_3_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-vneck_1" id="bodice_colors_vneck_1">
                                <div className="color-c1" id="vneck_1_btn_c1"></div>
                                <div className="color-c2" id="vneck_1_btn_c2"></div>
                                <div className="color-c3" id="vneck_1_btn_c3"></div>
                                <div className="color-c4" id="vneck_1_btn_c4"></div>
                                <div className="color-c5" id="vneck_1_btn_c5"></div>
                                <div className="color-c6" id="vneck_1_btn_c6"></div>
                                <div className="color-c7" id="vneck_1_btn_c7"></div>
                                <div className="color-c8" id="vneck_1_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-vneck_2" id="bodice_colors_vneck_2">
                                <div className="color-c1" id="vneck_2_btn_c1"></div>
                                <div className="color-c2" id="vneck_2_btn_c2"></div>
                                <div className="color-c3" id="vneck_2_btn_c3"></div>
                                <div className="color-c4" id="vneck_2_btn_c4"></div>
                                <div className="color-c5" id="vneck_2_btn_c5"></div>
                                <div className="color-c6" id="vneck_2_btn_c6"></div>
                                <div className="color-c7" id="vneck_2_btn_c7"></div>
                                <div className="color-c8" id="vneck_2_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-vneck_3" id="bodice_colors_vneck_3">
                                <div className="color-c1" id="vneck_3_btn_c1"></div>
                                <div className="color-c2" id="vneck_3_btn_c2"></div>
                                <div className="color-c3" id="vneck_3_btn_c3"></div>
                                <div className="color-c4" id="vneck_3_btn_c4"></div>
                                <div className="color-c5" id="vneck_3_btn_c5"></div>
                                <div className="color-c6" id="vneck_3_btn_c6"></div>
                                <div className="color-c7" id="vneck_3_btn_c7"></div>
                                <div className="color-c8" id="vneck_3_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-vneck_4" id="bodice_colors_vneck_4">
                                <div className="color-c1" id="vneck_4_btn_c1"></div>
                                <div className="color-c2" id="vneck_4_btn_c2"></div>
                                <div className="color-c3" id="vneck_4_btn_c3"></div>
                                <div className="color-c4" id="vneck_4_btn_c4"></div>
                                <div className="color-c5" id="vneck_4_btn_c5"></div>
                                <div className="color-c6" id="vneck_4_btn_c6"></div>
                                <div className="color-c7" id="vneck_4_btn_c7"></div>
                                <div className="color-c8" id="vneck_4_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-sweetheart_4" id="bodice_colors_sweetheart_4">
                                <div className="color-c1" id="sweetheart_4_btn_c1"></div>
                                <div className="color-c2" id="sweetheart_4_btn_c2"></div>
                                <div className="color-c3" id="sweetheart_4_btn_c3"></div>
                                <div className="color-c4" id="sweetheart_4_btn_c4"></div>
                            </div>
                            <div className="dress-bodice-colors-sweetheart_5" id="bodice_colors_sweetheart_5">
                                <div className="color-c1" id="sweetheart_5_btn_c1"></div>
                                <div className="color-c2" id="sweetheart_5_btn_c2"></div>
                                <div className="color-c3" id="sweetheart_5_btn_c3"></div>
                                <div className="color-c4" id="sweetheart_5_btn_c4"></div>
                                <div className="color-c5" id="sweetheart_5_btn_c5"></div>
                                <div className="color-c6" id="sweetheart_5_btn_c6"></div>
                                <div className="color-c7" id="sweetheart_5_btn_c7"></div>
                                <div className="color-c8" id="sweetheart_5_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-off-shoulder_1" id="bodice_colors_off-shoulder_1">
                                <div className="color-c1" id="off-shoulder_1_btn_c1"></div>
                                <div className="color-c2" id="off-shoulder_1_btn_c2"></div>
                                <div className="color-c3" id="off-shoulder_1_btn_c3"></div>
                                <div className="color-c4" id="off-shoulder_1_btn_c4"></div>
                                <div className="color-c5" id="off-shoulder_1_btn_c5"></div>
                                <div className="color-c6" id="off-shoulder_1_btn_c6"></div>
                                <div className="color-c7" id="off-shoulder_1_btn_c7"></div>
                                <div className="color-c8" id="off-shoulder_1_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-scoop_1" id="bodice_colors_scoop_1">
                                <div className="color-c1" id="scoop_1_btn_c1"></div>
                                <div className="color-c2" id="scoop_1_btn_c2"></div>
                                <div className="color-c3" id="scoop_1_btn_c3"></div>
                                <div className="color-c4" id="scoop_1_btn_c4"></div>
                                <div className="color-c5" id="scoop_1_btn_c5"></div>
                                <div className="color-c6" id="scoop_1_btn_c6"></div>
                                <div className="color-c7" id="scoop_1_btn_c7"></div>
                                <div className="color-c8" id="scoop_1_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-half_1" id="bodice_colors_half_1">
                                <div className="color-c1" id="half_1_btn_c1"></div>
                                <div className="color-c2" id="half_1_btn_c2"></div>
                                <div className="color-c3" id="half_1_btn_c3"></div>
                                <div className="color-c4" id="half_1_btn_c4"></div>
                                <div className="color-c5" id="half_1_btn_c5"></div>
                                <div className="color-c6" id="half_1_btn_c6"></div>
                                <div className="color-c7" id="half_1_btn_c7"></div>
                                <div className="color-c8" id="half_1_btn_c8"></div>
                            </div>
                            <div className="dress-bodice-colors-boat_1" id="bodice_colors_boat_1">
                                <div className="color-c1" id="boat_1_btn_c1"></div>
                                <div className="color-c2" id="boat_1_btn_c2"></div>
                                <div className="color-c3" id="boat_1_btn_c3"></div>
                                <div className="color-c4" id="boat_1_btn_c4"></div>
                                <div className="color-c5" id="boat_1_btn_c5"></div>
                                <div className="color-c6" id="boat_1_btn_c6"></div>
                                <div className="color-c7" id="boat_1_btn_c7"></div>
                                <div className="color-c8" id="boat_1_btn_c8"></div>
                            </div>
                        </div>
                    </div>
                    <div className="responsive-sleeves-container">
                        <div className="sleeves-header" id="sleeves_header">
                            <span style={{margin:"10px"}}>&ensp; SLEEVES</span>
                        </div>
                        <div className="responsive-sleeves-group" id="sleeves_group_show">
                            <div className="sleeves-item">
                                <img className="option-img" id="longsleeves_1_btn" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-1.png")}/>
                            </div>
                            <div className="sleeves-item">
                                <img className="option-img" id="longsleeves_2_btn" src={require("../../assets/img/dct/Bodice/Sleeves/long-sleeves-2.png")}/>
                            </div>
                            <div className="sleeves-item">
                                <img className="option-img remove" id="remove_sleeve_btn" src={require("../../assets/img/dct/remove.png")}/>
                            </div>
                        </div>
                        <div className="dress-colorgroup" id="dress_colorgroup">
                            <div className="dress-sleeves-colors-longsleeves_1" id="sleeves_colors_longsleeves_1">
                                <div className="color-c1" id="longsleeves_1_btn_c1"></div>
                                <div className="color-c2" id="longsleeves_1_btn_c2"></div>
                                <div className="color-c3" id="longsleeves_1_btn_c3"></div>
                                <div className="color-c4" id="longsleeves_1_btn_c4"></div>
                                <div className="color-c5" id="longsleeves_1_btn_c5"></div>
                                <div className="color-c6" id="longsleeves_1_btn_c6"></div>
                                <div className="color-c7" id="longsleeves_1_btn_c7"></div>
                                <div className="color-c8" id="longsleeves_1_btn_c8"></div>
                            </div>
                            {/* <div className="dress-sleeves-colors-longsleeves_2" id="sleeves_colors_longsleeves_2">
                                <p>Lngslv2</p>
                                <div className="color-c1" id="longsleeves_2_btn_c1"></div>
                                <div className="color-c2" id="longsleeves_2_btn_c2"></div>
                                <div className="color-c3" id="longsleeves_2_btn_c3"></div>
                                <div className="color-c4" id="longsleeves_2_btn_c4"></div>
                                <div className="color-c5" id="longsleeves_2_btn_c5"></div>
                                <div className="color-c6" id="longsleeves_2_btn_c6"></div>
                                <div className="color-c7" id="longsleeves_2_btn_c7"></div>
                                <div className="color-c8" id="longsleeves_2_btn_c8"></div>
                            </div> */}
                        </div>
                    </div>
                    <div className="responsive-skirt-container">
                        <div className="skirt-header">
                            <span style={{margin:"10px"}}>&ensp; SKIRT</span>
                        </div>
                        <div className="skirt-group">
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_1_btn"src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-1 w model fr1.png")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_2_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-2 w model fr2.png")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_3_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-3 w model fr3.png")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_4_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-4 w model fr4.png")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_5_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-5 w model fr5.png")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_6_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-6 w model fr6.jpg")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_7_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-7 w model fr7.jpg")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_8_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-8 w model fr8.jpg")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_9_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-9 w model fr9.jpg")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_10_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-10 w model fr10.jpg")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_11_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-11 w model fr11.jpg")}/>
                            </div>
                            <div className="skirt-item">
                                <img className="option-img" id="skirt_12_btn" src={require("../../assets/img/dct/Skirt/Skirt w Model/Frames/skirt-12 w model fr12.jpg")}/>
                            </div>
                        </div>
                        <div className="dress-colorgroup">
                            <div className="dress-skirt-colors-skirt_1" id="skirt_colors_skirt_1">
                                <div className="color-c1" id="skirt_1_btn_c1"></div>
                                <div className="color-c2" id="skirt_1_btn_c2"></div>
                                <div className="color-c3" id="skirt_1_btn_c3"></div>
                                <div className="color-c4" id="skirt_1_btn_c4"></div>
                                <div className="color-c5" id="skirt_1_btn_c5"></div>
                                <div className="color-c6" id="skirt_1_btn_c6"></div>
                                <div className="color-c7" id="skirt_1_btn_c7"></div>
                                <div className="color-c8" id="skirt_1_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_2" id="skirt_colors_skirt_2">
                                <div className="color-c1" id="skirt_2_btn_c1"></div>
                                <div className="color-c2" id="skirt_2_btn_c2"></div>
                                <div className="color-c3" id="skirt_2_btn_c3"></div>
                                <div className="color-c4" id="skirt_2_btn_c4"></div>
                                <div className="color-c5" id="skirt_2_btn_c5"></div>
                                <div className="color-c6" id="skirt_2_btn_c6"></div>
                                <div className="color-c7" id="skirt_2_btn_c7"></div>
                                <div className="color-c8" id="skirt_2_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_3" id="skirt_colors_skirt_3">
                                <div className="color-c1" id="skirt_3_btn_c1"></div>
                                <div className="color-c2" id="skirt_3_btn_c2"></div>
                                <div className="color-c3" id="skirt_3_btn_c3"></div>
                                <div className="color-c4" id="skirt_3_btn_c4"></div>
                                <div className="color-c5" id="skirt_3_btn_c5"></div>
                                <div className="color-c6" id="skirt_3_btn_c6"></div>
                                <div className="color-c7" id="skirt_3_btn_c7"></div>
                                <div className="color-c8" id="skirt_3_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_4" id="skirt_colors_skirt_4">
                                <div className="color-c1" id="skirt_4_btn_c1"></div>
                                <div className="color-c2" id="skirt_4_btn_c2"></div>
                                <div className="color-c3" id="skirt_4_btn_c3"></div>
                                <div className="color-c4" id="skirt_4_btn_c4"></div>
                                <div className="color-c5" id="skirt_4_btn_c5"></div>
                                <div className="color-c6" id="skirt_4_btn_c6"></div>
                                <div className="color-c7" id="skirt_4_btn_c7"></div>
                                <div className="color-c8" id="skirt_4_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_5" id="skirt_colors_skirt_5">
                                <div className="color-c1" id="skirt_5_btn_c1"></div>
                                <div className="color-c2" id="skirt_5_btn_c2"></div>
                                <div className="color-c3" id="skirt_5_btn_c3"></div>
                                <div className="color-c4" id="skirt_5_btn_c4"></div>
                                <div className="color-c5" id="skirt_5_btn_c5"></div>
                                <div className="color-c6" id="skirt_5_btn_c6"></div>
                                <div className="color-c7" id="skirt_5_btn_c7"></div>
                                <div className="color-c8" id="skirt_5_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_6" id="skirt_colors_skirt_6">
                                <div className="color-c1" id="skirt_6_btn_c1"></div>
                                <div className="color-c2" id="skirt_6_btn_c2"></div>
                                <div className="color-c3" id="skirt_6_btn_c3"></div>
                                <div className="color-c4" id="skirt_6_btn_c4"></div>
                                <div className="color-c5" id="skirt_6_btn_c5"></div>
                                <div className="color-c6" id="skirt_6_btn_c6"></div>
                                <div className="color-c7" id="skirt_6_btn_c7"></div>
                                <div className="color-c8" id="skirt_6_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_7" id="skirt_colors_skirt_7">
                                <div className="color-c1" id="skirt_7_btn_c1"></div>
                                <div className="color-c2" id="skirt_7_btn_c2"></div>
                                <div className="color-c3" id="skirt_7_btn_c3"></div>
                                <div className="color-c4" id="skirt_7_btn_c4"></div>
                                <div className="color-c5" id="skirt_7_btn_c5"></div>
                                <div className="color-c6" id="skirt_7_btn_c6"></div>
                                <div className="color-c7" id="skirt_7_btn_c7"></div>
                                <div className="color-c8" id="skirt_7_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_8" id="skirt_colors_skirt_8">
                                <div className="color-c1" id="skirt_8_btn_c1"></div>
                                <div className="color-c2" id="skirt_8_btn_c2"></div>
                                <div className="color-c3" id="skirt_8_btn_c3"></div>
                                <div className="color-c4" id="skirt_8_btn_c4"></div>
                                <div className="color-c5" id="skirt_8_btn_c5"></div>
                                <div className="color-c6" id="skirt_8_btn_c6"></div>
                                <div className="color-c7" id="skirt_8_btn_c7"></div>
                                <div className="color-c8" id="skirt_8_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_9" id="skirt_colors_skirt_9">
                                <div className="color-c1" id="skirt_9_btn_c1"></div>
                                <div className="color-c2" id="skirt_9_btn_c2"></div>
                                <div className="color-c3" id="skirt_9_btn_c3"></div>
                                <div className="color-c4" id="skirt_9_btn_c4"></div>
                                <div className="color-c5" id="skirt_9_btn_c5"></div>
                                <div className="color-c6" id="skirt_9_btn_c6"></div>
                                <div className="color-c7" id="skirt_9_btn_c7"></div>
                                <div className="color-c8" id="skirt_9_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_10" id="skirt_colors_skirt_10">
                                <div className="color-c1" id="skirt_10_btn_c1"></div>
                                <div className="color-c2" id="skirt_10_btn_c2"></div>
                                <div className="color-c3" id="skirt_10_btn_c3"></div>
                                <div className="color-c4" id="skirt_10_btn_c4"></div>
                                <div className="color-c5" id="skirt_10_btn_c5"></div>
                                <div className="color-c6" id="skirt_10_btn_c6"></div>
                                <div className="color-c7" id="skirt_10_btn_c7"></div>
                                <div className="color-c8" id="skirt_10_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_11" id="skirt_colors_skirt_11">
                                <div className="color-c1" id="skirt_11_btn_c1"></div>
                                <div className="color-c2" id="skirt_11_btn_c2"></div>
                                <div className="color-c3" id="skirt_11_btn_c3"></div>
                                <div className="color-c4" id="skirt_11_btn_c4"></div>
                                <div className="color-c5" id="skirt_11_btn_c5"></div>
                                <div className="color-c6" id="skirt_11_btn_c6"></div>
                                <div className="color-c7" id="skirt_11_btn_c7"></div>
                                <div className="color-c8" id="skirt_11_btn_c8"></div>
                            </div>
                            <div className="dress-skirt-colors-skirt_12" id="skirt_colors_skirt_12">
                                <div className="color-c1" id="skirt_12_btn_c1"></div>
                                <div className="color-c2" id="skirt_12_btn_c2"></div>
                                <div className="color-c3" id="skirt_12_btn_c3"></div>
                                <div className="color-c4" id="skirt_12_btn_c4"></div>
                                <div className="color-c5" id="skirt_12_btn_c5"></div>
                                <div className="color-c6" id="skirt_12_btn_c6"></div>
                                <div className="color-c7" id="skirt_12_btn_c7"></div>
                                <div className="color-c8" id="skirt_12_btn_c8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            {/* Modal dialog */}
            <ImageModal show={showModal} onHide={handleCloseModal} />

        </section>
    );
  };
  
  export default DesignToolContent;
  
