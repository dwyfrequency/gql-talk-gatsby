import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Vocab from "../components/vocab"
import SEO from "../components/seo"

export const query = graphql`
  query {
    adjectiveQuery: allVocabWordsJson(filter: { type: { eq: "adj." } }) {
      edges {
        node {
          ...TestFragment
        }
      }
    }
    verbQuery: allVocabWordsJson(filter: { type: { eq: "v." } }) {
      edges {
        node {
          id
          word
          definition
          type
        }
      }
    }
    nounQuery: allVocabWordsJson(filter: { type: { eq: "n." } }) {
      edges {
        node {
          id
          word
          definition
          type
        }
      }
    }
  }
`

const SecondPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <Vocab {...data} />
    </Layout>
  )
}

export default SecondPage
