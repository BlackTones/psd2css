import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';

function Box({ boxHeading, boxParagraph, boxSimpleImage, boxRetinaImage, boxImageAlt, type }) {
    return (
        <div className="boxes__box box">
            <Heading className="box__heading" type={type}>{boxHeading}</Heading>
            <Paragraph className="box__paragraph">{boxParagraph}</Paragraph>
            <Image simple={boxSimpleImage} retina={boxRetinaImage} alt={boxImageAlt} className="box__image" />
        </div>
    )
}

export default Box;