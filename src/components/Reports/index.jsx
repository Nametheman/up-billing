import React from "react";
import Layout from "../../layout/PageLayout";
import Home from "./Home";

const index = () => {
  return (
    <div>
      <Layout children={<Home />} />
    </div>
  );
};

export default index;
