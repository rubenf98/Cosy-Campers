import React from 'react'

import Header from './sections/Header'
import About from './sections/About'
import Banner from './sections/Banner'
import Calendar from './sections/Calendar'
import Newsletter from './sections/Newsletter'
import Reviews from './sections/Reviews'
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/application/actions';

function Homepage(props) {
    const { text } = require('../../../assets/' + props.language + "/homepage");

    const handleLanguageChange= (value) => {
        localStorage.setItem("language", value);
        props.setLanguage(value)
    }

    return (
        <div>
            <Header setLanguage={handleLanguageChange} language={props.language} text={text.header} />
            <About text={text.about} />
            <Banner />
            <Calendar />
            <Newsletter />
            <Reviews />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage: (state) => dispatch(setLanguage(state)),
    };
};

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);