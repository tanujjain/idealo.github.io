import React from 'react';
import './Socials.scss';

var FontAwesome = require('react-fontawesome');

export default (props) => {
    return (
        <p className={'socials__container ' + props.className}>
            <a href='https://www.xing.com/companies/idealointernetgmbh' className='socials__item'><FontAwesome name='xing' /></a>
            <a href='https://www.linkedin.com/company/idealo-internet-gmbh/' className='socials__item'><FontAwesome name='linkedin' /></a>
            <a href='https://www.instagram.com/idealo/' className='socials__item'><FontAwesome name='instagram' /></a>
            <a href='https://www.facebook.com/idealoDE/' className='socials__item'><FontAwesome name='facebook' /></a>
        </p>
    );
}
