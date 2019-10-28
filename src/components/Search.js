import React, { useState, useEffect, useCallback } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { Index, stemmer } from "elasticlunr"
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Modal,
} from "@material-ui/core"

const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`

const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState()
  const [results, setResults] = useState([])
  const [index, setIndex] = useState()
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => setIndex(Index.load(searchIndex)), [])
  useEffect(() => {
    if (!index) {
      return
    }
    if (!query || query.length === 0) {
      setModalOpen(false)

      return
    }

    setModalOpen(true)

    const res = index
      .search(query ? query.toLowerCase() : "", { expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref))
    setResults(res)
  }, [query])

  const getContexts = useCallback(({ text }) => {
    if (!query || query.length === 0) {
      return ""
    }

    const stemmedQuery = stemmer(query).toLowerCase()
    const paragraphs = text.split("\n\n")
    // .replace(/<[^>]*>/g, " ").replace(/\s{2,}/g, " ")

    const re = new RegExp(stemmedQuery, "gi")
    const re2 = new RegExp(`(\\w*${stemmedQuery}\\w*)`, "gmi")

    const contexts = paragraphs
      .filter(text => text.match(re))
      .map(text => `<p>${text.replace(re2, "<b>$1</b>")}</p>`)

    return contexts.join(" ... ")
  })

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Modal
        open={modalOpen}
        onClose={() => {
          setQuery("")
          setModalOpen(false)
        }}
      >
        <Paper
          style={{ padding: "5rem", overflowY: "scroll", maxHeight: "100vh" }}
        >
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <Typography variant="subtitle2">
            <b>{query}</b> returned {results.length} result
            {results.length !== 1 ? "s" : null}
          </Typography>
          {results.map(p => (
            <Link to={`${p.path}`}>
              <Card key={p.id} style={{ marginTop: "0.5rem" }}>
                <CardHeader title={p.title} />
                <CardContent>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: getContexts({ text: p.rawMarkdownBody }),
                    }}
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </Paper>
      </Modal>
    </>
  )
}

const SearchWithData = props => (
  <StaticQuery
    {...props}
    query={query}
    render={data => <Search searchIndex={data.siteSearchIndex.index} />}
  />
)

export default SearchWithData
