import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Header = styled.div`
    display: flex;
    padding-left: 16rem;
    padding-top: 1.8rem;
    .header-title{
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.1rem;
        color: var(--purple);
        margin-left: 1rem;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`

export const SectionPrincipal = styled.section`
    h1{
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 900;
        font-size: 6.4rem;
        line-height: 8rem;
        max-width: 52rem;
    }

`