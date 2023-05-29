import React from 'react'
import styled from "styled-components";
import Header from './sections/Header'
import About from './sections/About'
import Banner from './sections/Banner'
import Calendar from './sections/Calendar'
import Newsletter from './sections/Newsletter'
import Reviews from './sections/Reviews'
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/application/actions';

const Spacer = styled.div`
    margin: 100px 0px;
`;


function Homepage(props) {
    const { text } = require('../../../assets/' + props.language + "/homepage");

    const handleLanguageChange = (value) => {
        localStorage.setItem("language", value);
        props.setLanguage(value)
    }

    return (
        <div>
            <Header setLanguage={handleLanguageChange} language={props.language} text={text.header} />
            <Spacer />
            <About text={text.about} />
            <Spacer />
            <Banner text={text.banner} />
            <Calendar text={text.calendar} />
            <Spacer />
            <Newsletter text={text.newsletter} />
            <Spacer />
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