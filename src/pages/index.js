import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

// data
const links = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "About",
    url: "#",
  },
  {
    text: "Shop",
    url: "#",
  },
  {
    text: "Blog",
    url: "#",
  },
  {
    text: "Connect",
    url: "#",
  },
  {
    text: "Contact",
    url: "#",
  },
]

function index() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default index
