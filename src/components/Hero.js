import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';

const Hero = () => {
    return (
       <HeroContainer>
        <HeroBg>
            <VideoBg src = "" type="video/mp4" />
        </HeroBg>
        <HeroContent >
            <HeroItems>
                <HeroHeading>
                Unreal Destinations
                </HeroHeading>
            <HeroParagraph>
            Out of this world
            </HeroParagraph>
            <Button>Travel Now</Button>
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

`
const HeroBg = styled.div`

`
const VideoBg = styled.video`

`

const HeroContent = styled.div`
`
const HeroItems = styled.div`
`
const HeroHeading = styled.h1`
`
const HeroParagraph = styled.p`
`
export default Hero
