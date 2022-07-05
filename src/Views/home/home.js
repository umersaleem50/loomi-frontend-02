import React from "react";
import Slider from "../../Components/Stateful/Slider/Slider";
import Brands from "../../Components/Stateless/Brands/Brands";
import Category from "../../Components/Stateless/category/Category";
import Header from "../../Components/Stateless/Header/Header";
import Section from "../../Components/Stateless/Section/Section";
import SliderItem from "../../Components/Stateless/SliderItem/SliderItem";

import "../../SCSS/_home.scss";

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Section heading="trending now">{Slider(SliderItem)}</Section>

      <Section heading="Actual Categories">
        <Category />
      </Section>
      <Section heading="Only Trusted Brands">
        <Brands />
      </Section>
    </React.Fragment>
  );
};

export default Home;
