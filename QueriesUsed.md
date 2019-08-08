# Queries

## Putting it all together

```
query {
      adjectiveQuery: allVocabWordsJson(filter: { type: { eq: "adj." } }, limit: 5) {
        edges {
          node {
            ...Testfragment
          }
        }
      }
      verbQuery: allVocabWordsJson(filter: { type: { eq: "v." } }, limit: 5) {
        edges {
          node {
            id
            word
            definition
            type
          }
        }
      }
      nounQuery: allVocabWordsJson(filter: { type: { eq: "n." } }, limit: 5) {
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


fragment Testfragment on VocabWordsJson {
  id
  word
  definition
  type
}
```
