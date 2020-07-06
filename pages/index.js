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
.top {
        top: 0;
    }
   & .bottom {
        bottom: 0;
    }
    section {
        
        margin: 16px;
        position: absolute;
        left: 0;
        div {
            padding: 16px 24px;
            background: black;
            color: white;
            line-height: 1.618;
            max-width: calc(100vw - 32px)
        }
        @media screen and (min-width: 501px) {
            margin: 24px;
        }
        @media screen and (min-width: 901px) {
            margin: 32px;
    }
   
    
`


const IndexPage = () => (
    <Layout>
        <Container>
            <SEO title="is canada real" keywords={[`canada`]} />

            <div style={{ width: '100%', maxWidth: "100vw", height: '100vh', }}>
                <img alt="turtles" style={{ width: '100%', maxWidth: "100vw", height: '100vh', objectFit: 'cover', margin: '0' }} src="https://media.giphy.com/media/MONvE9pT7jsEE/giphy.gif" />
            </div>
            <Overlay >

                <section className="bottom">
                    <div>
                        NO
                    </div>
                </section>
            </Overlay>
        </Container>
    </Layout>
)

export default IndexPage
