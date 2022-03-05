import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLinkWrapper>
            <FooterDesc>
                <h1>Explorix</h1>
                <p>We strive to create the best experiences for our customers</p>
            </FooterDesc>
            <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/about">Contact</FooterLink>
                <FooterLink to="/about">Support</FooterLink>
                <FooterLink to="/about">Destinations</FooterLink>
                <FooterLink to="/about">Sponsorships</FooterLink>
            </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/about">Submit Video</FooterLink>
                <FooterLink to="/about">Ambassadors</FooterLink>
                <FooterLink to="/about">Agency</FooterLink>
                <FooterLink to="/about">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/about">Instagram</FooterLink>
                <FooterLink to="/about">Facebook</FooterLink>
                <FooterLink to="/about">Youtube</FooterLink>
                <FooterLink to="/about">Twitter</FooterLink>
            </FooterLinkItems>
        </FooterLinkWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: black;
    background: white;
`
const FooterDesc = styled.div`
    padding: 0 2rem;

    h1{
        margin-bottom: 3rem;
        color: orange;
    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`
const FooterLinkWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
    color: hotpink;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: grey;

    &:hover{
        color: brown;
        transition: 0.3s ease-out;
    }
`
