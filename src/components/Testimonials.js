import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import {FaRegLightbulb} from 'react-icons/fa';
import {useStaticQuery, graphql} from 'gatsby';

const Testimonials = () => {
    
    const data = useStaticQuery(graphql`
      query TestimonialQuery {
            allFile(filter: {ext : {regex : "/(jpg)|(png)|(jpeg)/"},
            name : {in: ["testimonial-1", "testimonial-2"]}}){
                edges {
                node {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                 }
              }
            }
          }
         }      
    `)
    
    
    return (
       <TestimonialsContainer>
        <Topline>
        Testimonials
        </Topline>
        <Description>What People Are Saying</Description>
        <ContentWrapper>
            <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline css = {`
                                            color:#3fffa8;
                                            font-size:2rem;
                                            margin-bottom:1rem`}/>
                    <h3>Karen Williams</h3>
                    <p>
                    {" "}
                    "The greatest experience of my life. It was a lot of fun 
                    exploring the mountains and they made it super easy to 
                    book my trip and accommodation"</p>
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb  css = {`
                                            color:#f9b19b;
                                            font-size:2rem;
                                            margin-bottom:1rem`}/>
                    <h3>Johnny Doe</h3>
                    <p>
                    {""} "It was super easy to setup my trip. They answered all my 
                    questions right away and gave me the best price out of all the companies
                    I researched"</p>
                </Testimonial>
            </ColumnOne>
            <ColumnTwo>
           {data.allFile.edges.map((image, key) => (
               <Images key = {key} fluid = {image.node.childImageSharp.fluid} />
           ))}
            </ColumnTwo>
        </ContentWrapper>
       </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width:100%;
    background:#fcfcfc;
    color:#000;
    padding: 5rem (calc(100vw = 1300px) / 2)
    height:100%;
`
const Topline = styled.p`
    color:#077bf1;
    font-size:clamp(1.1rem, 3.1vw, 1.5rem);
    padding-left:2.5rem;
    margin-bottom:0.75rem;
`
const Description = styled.h1`
    text-align:start;
    opacity: .7;
    padding-left: 2.5rem;
    margin-bottom: 3rem;
    font-size:clamp(1.5rem, 5vw, 2rem);
    font-weight:bold;
`
const ContentWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
`
const ColumnOne = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr;
    margin-right:1rem;
`
const Testimonial = styled.div`
    padding-top:1rem;
    padding-left:1rem;

h3{
    margin-bottom:1rem;
    font-size:1.5rem;
    font-style:italic;
    color:#000;
    opacity:.75;
    
}

p{
    color:#c9c9c9;
    font-size:clamp(0.75rem, 3.5vw, 1rem);
    line-height:1.55;
}
`
const ColumnTwo = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
margin-top:2rem;
grid-gap:10px;

@media screen and (max-width:500px){
    grid-template-columns: 1fr;
}

`
const Images = styled(Img)`
border-radius:10px;
height:100%;
`
