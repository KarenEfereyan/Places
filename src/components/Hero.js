import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import video from '../assets/videos/travel-1.mp4'

const Hero = () => {
    return (
       <HeroContainer>
        <HeroBg>
            <VideoBg src={video} type="video/mp4" autoPlay loop muted playsInline/>
        </HeroBg>
        <HeroContent >
            <HeroItems>
                <HeroHeading>Unreal Destinations </HeroHeading>
                <HeroParagraph> Out of this world</HeroParagraph>
                <Button to = "/trips" primary="true" round = "true">Travel Now</Button>
            </HeroItems>
        </HeroContent>
       </HeroContainer>
    )
}


const HeroContainer = styled.div`
background-color:#0c0c0c;
display:flex;
color:#fff;
justify-content : center;
align-items:center;
height:100vh;
padding: 0 1rem;
position:relative;
margin-top: -80px;

:before{
    content: '';
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:2;
    background: linear-gradient(100deg, rgba(0,0,0,0.2) 0%,
                                rgba(0,0,0,0.6) 100%),
    linear-gradient(100deg, rgba(0,0,0,0.2) 0%, transparent 100%);
}
`
const HeroBg = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
height:100%;
overflow:hidden;
`
const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`
const HeroContent = styled.div`
z-index:3;
height:calc(100vh-80px)
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2)
`
const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height:100vh;
max-height:100%;
padding:0;
color:#fff;
line-height:1.15;
font-weight:bold;

`
const HeroHeading = styled.h1`
font-size: clamp(2rem, 6vw, 4rem) !important;
margin-bottom: 1.5rem;
font-weight:bold;
padding: 0 1rem;
`
const HeroParagraph = styled.p`
font-size: clamp(1.25rem, 4vw, 3rem) !important;
margin-bottom: 2rem;
`
export default Hero
