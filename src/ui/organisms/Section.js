import React from 'react';
import Slider from 'react-slick';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Box from '../molecules/Box';

function Section({ background, heading, smallHeading, paragraph, boxType, mainTitle, additionalClasses, boxes }) {
    const classes = `section ${boxType} ${background !== undefined ? 'section--' + background : ''} ${additionalClasses !== undefined ? 'section--' + additionalClasses : ''}`;
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    if (boxType === 'columns') {
        return (
            <section className={classes}>
                <div className='wrap'>
                    {mainTitle ? <Heading type='h1' className='section__heading'>{heading}</Heading> : <Heading type='h2' className='section__heading'>{heading}</Heading>}
                    <Paragraph className='section__paragraph'>{paragraph}</Paragraph>
                    {smallHeading && <Heading type='h3' className='section__heading section__heading--small'>{smallHeading}</Heading>}
                    <div className="wrap__boxes boxes">
                        {Object.keys(boxes).map((keyName, i) => (
                            <Box key={i} boxHeading={boxes[keyName].boxHeading} boxParagraph={boxes[keyName].boxParagraph} boxImageAlt={boxes[keyName].imageAlt} boxSimpleImage={boxes[keyName].imageSimple} boxRetinaImage={boxes[keyName].imageRetina} type='h3' />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className={classes}>
            <div className='wrap'>
                {mainTitle ? <Heading type='h1' className='section__heading'>{heading}</Heading> : <Heading type='h2' className='section__heading'>{heading}</Heading>}
                <Paragraph className='section__paragraph'>{paragraph}</Paragraph>
                {smallHeading && <Heading type='h3' className='section__heading section__heading--small'>{smallHeading}</Heading>}
                <Slider {...settings}>
                    {Object.keys(boxes).map((keyName, i) => (
                        <Box key={i} boxHeading={boxes[keyName].boxHeading} boxParagraph={boxes[keyName].boxParagraph} boxImageAlt={boxes[keyName].imageAlt} boxSimpleImage={boxes[keyName].imageSimple} boxRetinaImage={boxes[keyName].imageRetina} type='h3' />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Section;