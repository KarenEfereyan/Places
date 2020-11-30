import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Places</h1>
                    <p>We Strive to create the best traveling experiences for our customers</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle> Contact Us </FooterLinkTitle>
                    <FooterLink to ="/">Contact</FooterLink>
                    <FooterLink to = "/" >Support</FooterLink>
                    <FooterLink to = "/">Destinations</FooterLink>
                    <FooterLink to = "/">Sponsorships</FooterLink>
                </FooterLinkItems>
                
                <FooterLinkItems>
                    <FooterLinkTitle> Videos</FooterLinkTitle>
                    <FooterLink to ="/">Submit Video</FooterLink>
                    <FooterLink to = "/" >Ambassadors </FooterLink>
                    <FooterLink to = "/">Agency</FooterLink>
                    <FooterLink to = "/">Influencers</FooterLink>
                </FooterLinkItems>
                
                <FooterLinkItems>
                    <FooterLinkTitle> Social Media</FooterLinkTitle>
                    <FooterLink to ="/">Instagram</FooterLink>
                    <FooterLink to = "/" >Facebook</FooterLink>
                    <FooterLink to = "/">Youtube</FooterLink>
                    <FooterLink to = "/">Twitter</FooterLink>
                </FooterLinkItems>   
                
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px ) /2);
    width : 100%;
    color:#000;
    background:#fafafb;
`

const FooterDesc = styled.div`
    padding: 0 2rem;

h1{
    margin-bottom:2rem;
    color:#f26a2e;
}
p{
    font-size: clamp(0.85rem, 2vw, 1.2rem);
    line-height:1.5;
    color:#c9c9c9;
    ${'' /* color:#000;
    opacity:.75; */}
    
}

@media screen and (max-width:400px){
    padding: 1rem;
}
`

const FooterLinksWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);

@media screen and (max-width: 820px){
    grid-template-columns:1fr 1fr;
}

@media screen and (max-width: 400px){
    grid-template-columns:1fr;
}
`

const FooterLinkItems = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    padding: 1rem 2rem;

@media screen and (max-width: 400px){
    padding:1rem;
}
`

const FooterLinkTitle = styled.h2`
    font-size:clamp(1rem, 2.1vw, 1.2rem);
    margin-bottom: 1.25rem;
    opacity:.75;
`

const FooterLink = styled(Link)`
    text-decoration:none;
    margin-bottom: 0.75rem;
    font-size:clamp(0.75rem, 1.8vw, 1rem);
    color:#c9c9c9;

&:hover{
    color:#f26a2e;
    transition: 0.3s ease-out;
}
`