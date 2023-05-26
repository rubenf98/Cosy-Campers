import React from 'react'
import { Button, Col, DatePicker, Row, Select, Dropdown, Space } from 'antd';
import styled, { css } from "styled-components";
import { borderRadius, buttonPadding, dimensions } from '../../../helper';


const styles = css`
    height: 100%;
    width: 100%;
    margin: 0px;
    box-sizing: border-box;
    padding: ${buttonPadding};
    font-size: 16px;
    border-radius: 0px;
`;

const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
        font-size: clamp(36px, 5vw, 90px);
        text-align: center;
        margin: auto;
        line-height: 100%;
        margin-bottom: 30px;
    }

    .button-container {
        margin: 5px 0px ;
    }

    @media (max-width: ${dimensions.md}) {
        br {
            width: 70%;
            display: none;
        }
    }

`;

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${borderRadius};
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
`;

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 40px 5px 5px;
    box-sizing: border-box;
    width: 100%;
    left: 0px;
    top: 0px;
    position: absolute;
    color: white;
    text-transform: uppercase;

    .logo {
        width: 120px;
    }

    .language {
        .ant-select-selector, svg { 
            color: white;
        }
    }
`;

const StyledSelect = styled(Select)`
    width: 100%;

    .ant-select-selector {
        height: 100% !important;
        width: 100% !important;
        margin: 0px;
        box-sizing: border-box;
        padding: ${buttonPadding} !important;
        border: 0px  !important; 
        font-size: 16px;
        border-radius: 0px;
        border-top-left-radius: ${borderRadius};
        border-bottom-left-radius: ${borderRadius};
        

        .ant-select-selection-item, .ant-select-selection-placeholder {
            box-sizing: border-box !important;
            height: 100% !important;
            font-size: 14px;
        }

        
    }

    @media (max-width: ${dimensions.md}) {

        .ant-select-selector {
            padding: 8px !important;
            border-radius: ${borderRadius} ;
        }
        
    }
`;

const StyledDatePicker = styled(DatePicker.RangePicker)`
    ${styles}

    .ant-picker-input {
        background-image: url("/icon/calendar.svg");
        background-size: 22px 24px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 8px;
        border-radius: ${borderRadius} ;
    }
`;

const StyledButton = styled(Button)`
    ${styles}
    background-color: ${({ theme }) => theme.primary};
    color: white;
    font-weight: bold;
    border: 0px;
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.primaryHover};
        color: white !important;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 8px;
        border-radius: ${borderRadius} ;
    }
`;

const items = [
    {
        key: '1',
        label: "en"
    },
    {
        key: '2',
        label: "pt",
    },
];

function Header({ text, language, setLanguage }) {
    return (
        <Container>
            <Background src="/images/header.jpg" />

            <Navbar>
                <img className="logo" alt="logo" src="/images/logo.png" />
                <Select
                    className="language"
                    onChange={setLanguage}
                    value={language}
                    bordered={false}
                    options={[
                        {
                            value: 'en',
                            label: 'EN',
                        },
                        {
                            value: 'pt',
                            label: 'PT',
                        },
                    ]}
                />

            </Navbar>



            <div style={{ padding: "0px 30px", boxSizing: "border-box" }}>
                {text.title}

                <Row>
                    <Col className='button-container' xs={24} md={10}>
                        <StyledSelect
                            placeholder={text.placeholder[0]}
                        >
                            <Select.Option value="airport">Aeroporto</Select.Option>
                        </StyledSelect>
                    </Col>
                    <Col className='button-container' xs={24} md={10}>
                        <StyledDatePicker
                            placeholder={[text.placeholder[1], text.placeholder[2]]}
                            format="DD-MM-YYYY"
                            suffixIcon={(<></>)}
                        />
                    </Col>
                    <Col className='button-container' xs={24} md={4}>
                        <StyledButton>{text.button}</StyledButton>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default Header