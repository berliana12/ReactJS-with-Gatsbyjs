import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaRegLightbulb } from 'react-icons/fa'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { graphql, useStaticQuery } from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimonials-1", "testimonials-2"]}}) {
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
        <TopLine>
            Testimonials
        </TopLine>
        <Description>
            What People are Saying 
        </Description>
        <ContentWrapper>
            <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline
                        css={`
                        color: blue;
                        font-size: 2rem;
                        margin-bottom: 1rem;
                    `}
                    />
                    <h3>Margot Bell</h3>
                    <p>
                        {" "}
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    </p>
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb
                        css={`
                            color: green;
                            font-size: 2rem;
                            margin-bottom: 1rem;
                        `}
                    />
                    <h3>Isaac Tunel</h3>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                    </p>
                </Testimonial>
            </ColumnOne>
            <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images
                        key={key}
                        fluid={image.node.childImageSharp.fluid}
                    />
                ))}
            </ColumnTwo>
        </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    color: black;
    padding: 5rem calc((100vw - 1300px) /2);
`
const TopLine = styled.p`
    color: blue;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1.5 rem;
        font-style: italic;
    }

    p{
        color: grey;

    }
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px){
        grid-template-rows: 1fr;
    }
`
const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`