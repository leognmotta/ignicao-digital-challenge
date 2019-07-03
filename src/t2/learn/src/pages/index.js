import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import ImageOne from "../images/image-1.png"
import ImageTwo from "../images/image-2.png"
import ImageThree from "../images/image-3.png"

import "../scss/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Learn"
      description="Website for Ignição Digital"
      meta={[
        {
          name: "how to use SEO component",
          content:
            "it composes SEO with HELMET, if nothing is set then it takes data from gatsby-config.js",
        },
      ]}
    />

    <Banner />

    <div className="page-content">
      <section>
        <h1>Our latest work</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis
          sem in purus facilisis adipiscing at vitae sapien. Maecenas eget metus
          turpis. Integer ac molestie mauris. Aenean id libero eget ante
          dignissim faucibus.
        </p>
        <p>
          Morbi sit amet nunc et ante feugiat blandit id aliquam risus. Nulla
          mattis auctor mi sit amet interdum. Nam consequat, ipsum non tincidunt
          tincidunt, massa mi tincidunt augue, in elementum lectus sem in
          libero.
        </p>
        <p>
          Morbi feugiat est dui, quis scelerisque ipsum dictum quis. Fusce
          adipiscing est sodales aliquet vulputate. Etiam eget risus at purus
          fermentum mattis vitae eu sem. Maecenas tincidunt sapien in tortor
          adipiscing lacinia. Sed velit odio, pulvinar sagittis diam id, feugiat
          sodales lacus. Quisque magna nisl, aliquet id laoreet ut, placerat et
          felis. Suspendisse aliquet ullamcorper purus, luctus faucibus velit
          feugiat sed. Aenean interdum, elit ut dictum convallis,{" "}
        </p>
      </section>
      <section>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis
          sem in purus facilisis adipiscing at vitae sapien. Maecenas eget metus
          turpis. Integer ac molestie mauris. Aenean id libero eget ante
          dignissim faucibus.
        </p>
        <p>
          Morbi feugiat est dui, quis scelerisque ipsum dictum quis. Fusce
          adipiscing est sodales aliquet vulputate. Etiam eget risus at purus
          fermentum mattis vitae eu sem. Maecenas tincidunt sapien in tortor
          adipiscing lacinia. Sed velit odio, pulvinar sagittis diam id, feugiat
          sodales lacus. Quisque magna nisl, aliquet id laoreet ut, placerat et
          felis. Suspendisse aliquet ullamcorper purus, luctus faucibus velit
          feugiat sed. Aenean interdum, elit ut dictum convallis, dolor arcu
          pulvinar neque, et congue elit nisl quis tellus. Aliquam auctor libero
          nec purus facilisis, sit amet fermentum metus lacinia.
        </p>
      </section>

      <aside className="some-image-ads">
        <img src={ImageOne} alt="some ad" />
        <img src={ImageTwo} alt="some ad" />
        <img src={ImageThree} alt="some ad" />
      </aside>
    </div>
  </Layout>
)

export default IndexPage
