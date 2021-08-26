import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faHome,
  faCoffee,
  faAddressBook,
  faAmbulance,
  faBus,
  faDice,
} from "@fortawesome/free-solid-svg-icons"

// data
const links = [
  {
    text: "Home",
    url: "/",
    icon: faHome,
  },
  {
    text: "About",
    url: "/about",
    icon: faCoffee,
  },
  {
    text: "Shop",
    url: "/shop",
    icon: faAddressBook,
  },
  {
    text: "Blog",
    url: "/blog",
    icon: faAmbulance,
  },
  {
    text: "Connect",
    url: "/connect",
    icon: faBus,
  },
  {
    text: "Contact",
    url: "/contact",
    icon: faDice,
  },
  {
    text: "",
    url: "/#",
    icon: faTwitter,
  },
]

const Layout = ({ pageTitle, children }) => {
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

      {/* <img
        src="https://assets.codepen.io/296057/lil-bvlogo.png"
        alt="Binaryville logo. Click for home."
      /> */}

      <StaticImage
        src="../images/lil-bvlogo.png"
        alt="Binaryville logo2"
        placeholder="blurred"
        layout="fixed"
      />

      <nav>
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <Link to={link.url} activeClassName="active">
                <FontAwesomeIcon icon={link.icon} size="1x" /> {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </>
  )
}

export default Layout
