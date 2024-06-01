import React from "react";

interface LoadImgProps {
    classes?: string;
    imgTitle: string;
    imgURL: string;
}

const LoadImg: React.FC<LoadImgProps> = ({ classes, imgTitle, imgURL }) => {
    return (
        <img
            className={classes}
            src={imgURL}
            alt={`Imagem ${imgTitle}`}
        />
    );
};

export default LoadImg;
