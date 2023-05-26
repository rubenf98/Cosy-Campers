import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollToTop from "./helpers/ScrollToTop";
import ThemeContainer from "./helpers/ThemeContainer";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    margin: auto;
    display: block;
    position: relative;
    box-sizing: border-box;
    overflow-x: hidden;
`;



export const Layout = (props) => {

    return (
        <ThemeContainer>
            <ScrollToTop>
                <Container>
                    <div> {props.children} </div>
                </Container>
            </ScrollToTop>
        </ThemeContainer>
    )
}

export default Layout;
