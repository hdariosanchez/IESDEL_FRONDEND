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
                El Instituto de Educación Semipresencial, a Distancia y en Línea es la unidad académica que se encarga del desarrollo de políticas, normas, condiciones y procedimientos para el diseño, elaboración, seguimiento y evaluación de planes y programas de formación semipresencial, a distancia y en línea en concordancia con los lineamientos académicos de la Escuela Superior Politécnica de Chimborazo.{"\n"}
                Actualmente la Educación virtual es una alternativa de formación para los estudiantes de las IES, ya que, a través de las distintas plataformas tecnológicas se logra cumplir los objetivos de aprendizaje en los distintos cursos y programas que se desarrollan a través de uso de tecnologías y entornos virtuales de aprendizaje en plataformas digitales que posee la ESPOCH.{"\n"}
                Entre las actividades que se han venido desarrollando, se destaca la capacitación a los docentes en el uso de tecnologías y metodologías de educación virtual, lo cual permite promover la adquisición de competencias en el uso de tecnologías interactivas multimedia y entornos virtuales de aprendizaje.{"\n"}
                Invitamos a los docentes e investigadores que estén interesados en diseñar y migrar sus cursos y/o asignaturas tradicionales hacia un medio digital o virtual, apoyadas por modelos pedagógicos de educación en línea, para que presenten sus propuestas académicas de cursos virtuales.{"\n"}
              </h5>
            </div>


            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills 
                  alignCenter
                  color="success"
                  tabs={[
                    {
                      tabButton: "Misión",
                      tabIcon: LoyaltyIcon,
                      tabContent: (
                        <GridContainer justify="center">
                            <h5 className={classes.textCenter}>
                              Planificar, organizar, dirigir, liderar, aprobar y retroalimentar el Sistema Académico de Educación Semipresencial y Virtual, en el ámbito de la Planificación Educativa, Sistema Tutorial y Administración de Plataforma Virtual.
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
                      tabButton: "Visión",
                      tabIcon: BrightnessHighIcon,
                      tabContent: (
                        <GridContainer justify="center">
                            <h5 className={classes.textCenter}>
                              Desarrollo sustentable de un modelo educativo para  entornos virtuales de aprendizaje a fin de garantizar los principios de educación para brindar oportunidades a los estudiantes/docentes de poder capacitarse y seguir carreras de Grado en modalidad online.
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
                            Formular y proponer al Consejo Politécnico; políticas, normas, lineamientos y procedimientos para el diseño, desarrollo, seguimiento y evaluación de planes y programas de formación semipresencial, a distancia y en línea, en concordancia a la misión, visión, fines y objetivos institucionales;
                            Planificar y coordinar procesos pedagógicos curriculares, enseñanza- aprendizaje, recursos de aprendizajes, recursos tecnológicos educativos;
                            Coordinar con las facultades  la  formulación de carreras o programas de educación semipresencial, a distancia y en línea en concordancia con los reglamentos institucionales  y los lineamientos del CES;
                            Capacitar a las y los docentes en el uso de Tecnologías y metodologías de educación semipresencial, y en línea como apoyo a los procesos de enseñanza y aprendizaje;
                            Dirigir el trabajo tutorial con estudiantes, profesores autores y tutores;
                            Liderar propuestas de actualización de las metodologías, modelos y herramientas aplicadas a la enseñanza-aprendizaje;
                            Aprobar propuestas técnicas e instrumentos para el mejoramiento de la gestión académica y administrativa de la Dirección a su cargo;
                            Aprobar informes técnicos sobre el estado, avance y proyecciones de los programas semipresenciales, a distancia y en línea;
                            Las demás determinadas en las normativas e instrumentos institucionales.
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