# Queries

## Source JSON

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

```
query($tf: Boolean! = true) {
  gatsbyRocks: allVocabWordsJson(limit: 2, filter: { type: { ne: "v." } }) {
    edges {
      node {
        id
        word
        type
        definition @include(if: $tf)
        #     directives, tell us when to include value
      }
    }
  }
}

```

```
query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
```

## Playground

```
github
{
  user(login: "dwyfrequency") {
    repositories(last: 5) {
      edges {
        node {
          id
          createdAt
        }
      }
    }
    pinnedItems(first: 3) {
      totalCount
      edges {
        node {
          ... on Repository {
          	createdAt
          }
        }
      }
    }
  }
}

```

## Source External GraphQL

```
 query {
    github {
      organization(login: "FullstackAcademy") {
        team(slug: "1904-fsa-ny") {
          members(first: 53) {
            edges {
              node {
                id
                login
              }
            }
          }
        }
      }
    }
  }
```

```
query($username: String!) {
    github {
      user(login: $username) {
        avatarUrl
        bio
        location
        name
        login
        websiteUrl
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on GitHub_Repository {
                id
                url
                name
                primaryLanguage {
                  name
                  color
                }
                updatedAt
                owner {
                  login
                }
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
        contributionsCollection {
          totalCommitContributions
        }
        repositories(last: 5) {
          edges {
            node {
              id
              url
              name
              primaryLanguage {
                name
                color
              }
              updatedAt
              owner {
                login
              }
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
        repositoriesContributedTo(last: 5) {
          totalCount
          edges {
            node {
              id
              url
              name
              primaryLanguage {
                name
                color
              }
              updatedAt
              owner {
                login
              }
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
      }
    }
  }
```
