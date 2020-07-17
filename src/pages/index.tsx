import React, { FC } from "react";
import Layout from "../components/Layout";
import Map from "../components/Map";
import SEO from "../components/Seo";

const IndexPage: FC = () => (
  <Layout>
    <SEO title={"Home"} />
    <Map />
  </Layout>
);

export default IndexPage;
