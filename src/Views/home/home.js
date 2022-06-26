import React from "react";
import Slider from "../../Components/Stateful/Slider/Slider";
import Header from "../../Components/Stateless/Header/Header";
import Section from "../../Components/Stateless/Section/Section";

import "../../SCSS/_home.scss";

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Section heading="trending now">
        <Slider />
      </Section>
    </React.Fragment>
  );
};

export default Home;
