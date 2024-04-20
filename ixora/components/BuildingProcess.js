import React from "react";

import ImageGallery from "react-image-gallery";


const BuildingProcess = ({images}) => {
    return (
        <div className="w-full h-full p-10 bg-white">
            <ImageGallery items={images} />
        </div>
    );
};

export default BuildingProcess;
