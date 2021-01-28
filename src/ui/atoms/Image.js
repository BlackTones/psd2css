import React from 'react';

function Image({ simple, retina, className, alt }) {
    const imageSrc = retina + ' 2x';
    return (
        <img src={simple} srcSet={imageSrc} className={className} alt={alt} />
    )
}

export default Image;