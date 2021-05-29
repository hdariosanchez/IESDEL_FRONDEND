import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardVideoSection from "./Sections/CardVideoSection.js";

import {Helmet} from "react-helmet";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";


const useStyles = makeStyles(styles);

export default function WebinarPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        
        <div className={classes.container}>
          <CardVideoSection />
        </div>
        
        <Footer whiteFont />
      </div>
    </div>
  );
}
