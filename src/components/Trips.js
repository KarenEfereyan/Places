import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const Trips = () => {
    
    //Fetch Trips data from graphql
    
    const tripsData = useStaticQuery(graphql `
      query TripQuery{
        allTripsJson {
            edges {
                node {
                    alt
                    button
                    name
                    img {
                    absolutePath
                    }
                 }
              }
            }    
      }                           
 `)
    
    function getTrips(tripsData){
        const tripsArray = [];
        tripsData.allTripsJson.edges.forEach((item, index) => {
            tripsArray.push(
                <div key = {index}>
                    <Img src = {item.node.img.absolutePath}  />
                </div>
            )  
        })
        return tripsArray
    }
    
    
    return (
       <ProductsContainer>
        <ProductsHeading>Heading</ProductsHeading>
        <ProductWrapper>{getTrips(tripsData)}</ProductWrapper>
       </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
min-height:100vh;
padding: 5rem calc((100vw - 1300px) / 2);
background-color : blue;
color:#fff;
`

const ProductsHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem) !important;
text-align:center;
margin-bottom: 5rem;
color:#000;
`
const ProductWrapper = styled.div`
`



