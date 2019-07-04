import React from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import ImageOne from "../images/image-1.png"
import ImageTwo from "../images/image-2.png"
import ImageThree from "../images/image-3.png"

import "../scss/index.scss"

class IndexPage extends React.Component {
  state = {
    work: [],
    about: [],
  }

  async componentDidMount() {
    try {
      const work = await axios.get("http://localhost:8080/work")
      const about = await axios.get("http://localhost:8080/about")

      this.setState({ work: work.data, about: about.data })

      console.log(this.state)
    } catch (error) {
      // handle error here
      console.log(error)
    }
  }

  render() {
    return (
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
            {this.state.work.map(text => (
              <p>{text}</p>
            ))}
          </section>
          <section>
            <h2>About us</h2>
            {this.state.about.map(text => (
              <p>{text}</p>
            ))}
          </section>

          <aside className="some-image-ads">
            <img src={ImageOne} alt="some ad" />
            <img src={ImageTwo} alt="some ad" />
            <img src={ImageThree} alt="some ad" />
          </aside>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
