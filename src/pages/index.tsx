import React, { FC } from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/Seo";

const IndexPage: FC = () => (
  <Layout>
    <SEO title={"Home"} />
    {/* <Map {...mapSettings}>
      <Marker ref={markerRef} position={CENTER} />
    </Map> */}
  </Layout>
);

export default IndexPage;
