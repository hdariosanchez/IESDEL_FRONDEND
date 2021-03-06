import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LoyaltyIcon from '@material-ui/icons/Loyalty';
//import Camera from "@material-ui/icons/Camera";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
//import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/danilo_pastor.jpg";


import studio1 from "assets/img/examples/studio-1.jpg";
//import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
//import studio4 from "assets/img/examples/studio-4.jpg";
//import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
//import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
//import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  
  return (
    <div>
      <Header
        color="transparent"
        brand="IESDEL"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Ing. Danilo Pastor PhD.</h3>
                    <h6>DIRECTOR IESDEL</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.description}>
              <h5>
                El Instituto de Educaci??n Semipresencial, a Distancia y en L??nea es la unidad acad??mica que se encarga del desarrollo de pol??ticas, normas, condiciones y procedimientos para el dise??o, elaboraci??n, seguimiento y evaluaci??n de planes y programas de formaci??n semipresencial, a distancia y en l??nea en concordancia con los lineamientos acad??micos de la Escuela Superior Polit??cnica de Chimborazo.{"\n"}
                Actualmente la Educaci??n virtual es una alternativa de formaci??n para los estudiantes de las IES, ya que, a trav??s de las distintas plataformas tecnol??gicas se logra cumplir los objetivos de aprendizaje en los distintos cursos y programas que se desarrollan a trav??s de uso de tecnolog??as y entornos virtuales de aprendizaje en plataformas digitales que posee la ESPOCH.{"\n"}
                Entre las actividades que se han venido desarrollando, se destaca la capacitaci??n a los docentes en el uso de tecnolog??as y metodolog??as de educaci??n virtual, lo cual permite promover la adquisici??n de competencias en el uso de tecnolog??as interactivas multimedia y entornos virtuales de aprendizaje.{"\n"}
                Invitamos a los docentes e investigadores que est??n interesados en dise??ar y migrar sus cursos y/o asignaturas tradicionales hacia un medio digital o virtual, apoyadas por modelos pedag??gicos de educaci??n en l??nea, para que presenten sus propuestas acad??micas de cursos virtuales.{"\n"}
              </h5>
            </div>


            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills 
                  alignCenter
                  color="success"
                  tabs={[
                    {
                      tabButton: "Misi??n",
                      tabIcon: LoyaltyIcon,
                      tabContent: (
                        <GridContainer justify="center">
                            <h5 className={classes.textCenter}>
                              Planificar, organizar, dirigir, liderar, aprobar y retroalimentar el Sistema Acad??mico de Educaci??n Semipresencial y Virtual, en el ??mbito de la Planificaci??n Educativa, Sistema Tutorial y Administraci??n de Plataforma Virtual.
                            </h5>
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Visi??n",
                      tabIcon: BrightnessHighIcon,
                      tabContent: (
                        <GridContainer justify="center">
                            <h5 className={classes.textCenter}>
                              Desarrollo sustentable de un modelo educativo para  entornos virtuales de aprendizaje a fin de garantizar los principios de educaci??n para brindar oportunidades a los estudiantes/docentes de poder capacitarse y seguir carreras de Grado en modalidad online.
                          </h5>
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            /> */}


                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Noticias",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <h6 className={classes.textCenter}>
                            Formular y proponer al Consejo Polit??cnico; pol??ticas, normas, lineamientos y procedimientos para el dise??o, desarrollo, seguimiento y evaluaci??n de planes y programas de formaci??n semipresencial, a distancia y en l??nea, en concordancia a la misi??n, visi??n, fines y objetivos institucionales;
                            Planificar y coordinar procesos pedag??gicos curriculares, ense??anza- aprendizaje, recursos de aprendizajes, recursos tecnol??gicos educativos;
                            Coordinar con las facultades  la  formulaci??n de carreras o programas de educaci??n semipresencial, a distancia y en l??nea en concordancia con los reglamentos institucionales  y los lineamientos del CES;
                            Capacitar a las y los docentes en el uso de Tecnolog??as y metodolog??as de educaci??n semipresencial, y en l??nea como apoyo a los procesos de ense??anza y aprendizaje;
                            Dirigir el trabajo tutorial con estudiantes, profesores autores y tutores;
                            Liderar propuestas de actualizaci??n de las metodolog??as, modelos y herramientas aplicadas a la ense??anza-aprendizaje;
                            Aprobar propuestas t??cnicas e instrumentos para el mejoramiento de la gesti??n acad??mica y administrativa de la Direcci??n a su cargo;
                            Aprobar informes t??cnicos sobre el estado, avance y proyecciones de los programas semipresenciales, a distancia y en l??nea;
                            Las dem??s determinadas en las normativas e instrumentos institucionales.
                          </h6>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}