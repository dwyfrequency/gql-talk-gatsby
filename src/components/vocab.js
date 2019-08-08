import React from "react"
import { graphql } from "gatsby"
import Word from "./vocab/word"

export const query = graphql`
  fragment TestFragment on VocabWordsJson {
    id
    word
    definition
    type
  }
`

const Vocab = ({ adjectiveQuery, nounQuery, verbQuery }) => {
  return (
    <div>
      <h1>Let's Get Wordy</h1>
      <div>
        <h2>Adjectives</h2>
        {adjectiveQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))}
        <h2>Verbs</h2>
        {verbQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))}
        <h2>Nouns</h2>
        {nounQuery.edges.map(({ node }) => (
          <Word key={node.id} {...node} />
        ))}
      </div>
    </div>
  )
}
export default Vocab
