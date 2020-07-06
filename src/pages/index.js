import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
`

export const Overlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        section {
            display: flex; 
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
        div {
            font-weight: bold;
            font-size: 20vw;
            color: white;
            text-shadow: 0px 0px 10px black;
            line-height: 1;
            max-width: calc(100vw - 32px)
        }
        }
   
    
`


const IndexPage = () => (
    <Layout>
        <Container>
            <SEO title="Is Canada real?" keywords={[`Canada`]} />

            <div style={{ width: '100%', maxWidth: "100vw", height: '100vh', }}>
                <img alt="turtles" style={{ width: '100%', maxWidth: "100vw", height: '100vh', objectFit: 'cover', margin: '0' }} src="https://media.giphy.com/media/MONvE9pT7jsEE/giphy.gif" />
            </div>
            <Overlay >


                <section><div>
                    nope.
                </div></section>

            </Overlay>
        </Container>
    </Layout>
)

export default IndexPage
