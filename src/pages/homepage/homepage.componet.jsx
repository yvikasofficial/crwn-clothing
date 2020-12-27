import React from "react";
import Directory from "../../components/directory/directory.componet";
import { HomePageContainer } from "./homepage.styles";
import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
