import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import WhiteLogo from "../images/tango_logo_white.svg"
import CloseButton from "../images/tango_close_button.svg"

import { Overlay } from "./styles/OverlayMenuStyles"

const OverlayMenu = () => {
  // const { menu: { edges: [{ node: menu }], },
  // } = useStaticQuery(graphql`
  //   query OverlayMenu {
  //     menu: allWpMenuItem(filter: { wordpress_id: { eq: 5 } }) {
  //       totalCount
  //       edges {
  //         node {
  //           items {
  //             title
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <h1>OverlayMenu!</h1>
    </div>
  )
}

export default OverlayMenu
