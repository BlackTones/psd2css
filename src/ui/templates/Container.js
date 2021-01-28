import React from 'react';
import Header from '../organisms/Header';
import Section from '../organisms/Section';
import Logo from '../images/logo-wordpressx1.png';
import LogoRetina from '../images/logo-wordpressx2.png';

function Container() {

    const sliderBoxContent = {
        'slider01': {
            'boxHeading': 'Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': Logo,
            'imageRetina': LogoRetina,
            'imageAlt': 'Wordpress logo'
        },
        'slider02': {
            'boxHeading': 'Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet, consect etur adipiscing elit.Aenea uismod bibendum laoreet.Lorem ipsum dolor sit amet',
            'imageSimple': null,
            'imageRetina': null
        },
        'slider03': {
            'boxHeading': 'Ultra Mega Super Long Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': null,
            'imageRetina': null
        },
        'slider04': {
            'boxHeading': 'Ultra Mega Super Long Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': null,
            'imageRetina': null
        },
        'slider05': {
            'boxHeading': 'Ultra Mega Super Long Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': null,
            'imageRetina': null
        },
        'slider06': {
            'boxHeading': 'Ultra Mega Super Long Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': null,
            'imageRetina': null
        }
    }
    const columnBoxContent = {
        'slider01': {
            'boxHeading': 'Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': Logo,
            'imageRetina': LogoRetina,
            'imageAlt': 'Wordpress logo'
        },
        'slider02': {
            'boxHeading': 'Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet, consect etur adipiscing elit.Aenea uismod bibendum laoreet.Lorem ipsum dolor sit amet',
            'imageSimple': null,
            'imageRetina': null
        },
        'slider03': {
            'boxHeading': 'Ultra Mega Super Long Heading',
            'boxParagraph': 'Lorem ipsum dolor sit amet.',
            'imageSimple': null,
            'imageRetina': null
        }
    }


    return (
        <div className='container'>
            <Header />
            <main>
                <Section boxes={sliderBoxContent} background="blue" mainTitle={true} heading="Heading" paragraph="Lorem ipsum dolor sit amet, consect etur adipiscing elit." boxType="slider" additionalClasses='dott' />
                <Section boxes={columnBoxContent} background="lightBlue" heading="Heading" paragraph="Lorem ipsum dolor sit amet, consect etur adipiscing elit." smallHeading="Heading" boxType="columns" />
            </main>
        </div>
    )
}

export default Container;