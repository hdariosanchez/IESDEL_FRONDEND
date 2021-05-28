import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Book from "@material-ui/icons/Bookmark";
import Calendario from "@material-ui/icons/Event";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";


import course1 from "assets/img/curso1.png";
import course2 from "assets/img/curso2.png";
import course3 from "assets/img/curso3.png";
import course4 from "assets/img/curso1.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import stylesImage from "assets/jss/material-kit-react/imagesStyles.js";
import stylesTitle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);
const useStylesImg = makeStyles(stylesImage);
const useStylesTitle = makeStyles(stylesTitle);

export default function CourseSection() {
    const classes = useStyles();
    const classesImage = useStylesImg();
    const classesTitle = useStylesTitle();
    return (

        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Nuestros MOOC{"'"}s</h2>
                    <h5 className={classes.description}>
                        Aprende con los mejores profesionales y forma parte de la mayor comunidad de politécnicos en línea. Fórmate online como parte de tu crecimiento personal y profesional con un claustro de excelencia
        </h5>
                </GridItem>
            </GridContainer>

            <div>
                <GridContainer>
                    <GridItem xs={4} sm={4} md={4}>
                        <h4 className={classesTitle.cardTitle}>
                            <strong>Plataformas de educación virtual</strong>
                        </h4>
                        <img
                            src={course1}
                            alt="..."
                            className={
                                classesImage.imgRaised +
                                " " +
                                classesImage.imgRounded +
                                " " +
                                classesImage.imgFluid
                            }
                        />
                        <CustomTabs
                            plainTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Intro",
                                    tabIcon: Book,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Este curso busca capacitar a los estudiantes de la Escuela Superior Politécnica de Chimborazo en las 3 plataformas oficiales de educación en Línea: El E-learning Institucional Moodle, Microsoft Office 365 y Microsoft Teams
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Docente",
                                    tabIcon: Face,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Juan Diego Vázquez Moreno – @juavazmor
                                            Desarrollador de juegos y aplicaciones móviles
                                            www.fourattic.com/contact
                                            Abierto a ofertas de empleo freelance o contrato.
                                            Hola, soy Juan  Diego Vázquez, estudié Ingeniería Informática en la Universidad de Sevilla y junto con otros compañeros diseñamos y desarrollamos video juegos.
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Seguimiento",
                                    tabIcon: Calendario,
                                    tabContent: (
                                        <List className={classes.list}>
                                        Nivel: INICIACIÓN
                                        198180 Alumnos
                                        95% Valoraciones positivas (3K)
                                        Online y a tu ritmo
                                        Audio: Español
                                        Español, Inglés, Portugués, Alemán
                                        Actualizado el 12/01/2021
                                        </List>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}>
                    <h4 className={classesTitle.cardTitle}>
                            <strong>Otro curso virtual - ESPOCH</strong>
                        </h4>
                        <img
                            src={course2}
                            alt="..."
                            className={
                                classesImage.imgRaised +
                                " " +
                                classesImage.imgRounded +
                                " " +
                                classesImage.imgFluid
                            }
                        />
                        <CustomTabs
                            plainTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Intro",
                                    tabIcon: Book,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Este curso busca capacitar a los estudiantes de la Escuela Superior Politécnica de Chimborazo en las 3 plataformas oficiales de educación en Línea: El E-learning Institucional Moodle, Microsoft Office 365 y Microsoft Teams
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Docente",
                                    tabIcon: Face,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Juan Diego Vázquez Moreno – @juavazmor
                                            Desarrollador de juegos y aplicaciones móviles
                                            www.fourattic.com/contact
                                            Abierto a ofertas de empleo freelance o contrato.
                                            Hola, soy Juan  Diego Vázquez, estudié Ingeniería Informática en la Universidad de Sevilla y junto con otros compañeros diseñamos y desarrollamos video juegos.
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Seguimiento",
                                    tabIcon: Calendario,
                                    tabContent: (
                                        <List className={classes.list}>
                                        Nivel: INICIACIÓN
                                        198180 Alumnos
                                        95% Valoraciones positivas (3K)
                                        Online y a tu ritmo
                                        Audio: Español
                                        Español, Inglés, Portugués, Alemán
                                        Actualizado el 12/01/2021
                                        </List>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                    <GridItem xs={4} sm={4} md={4}>
                        <h4 className={classesTitle.cardTitle}>
                            <strong>Nuevo curso editado - ESPOCH</strong>
                        </h4>
                        <img
                            src={course3}
                            alt="..."
                            className={
                                classesImage.imgRaised +
                                " " +
                                classesImage.imgRounded +
                                " " +
                                classesImage.imgFluid
                            }
                        />
                        <CustomTabs
                            plainTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Intro",
                                    tabIcon: Book,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Este curso busca capacitar a los estudiantes de la Escuela Superior Politécnica de Chimborazo en las 3 plataformas oficiales de educación en Línea: El E-learning Institucional Moodle, Microsoft Office 365 y Microsoft Teams
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Docente",
                                    tabIcon: Face,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            Juan Diego Vázquez Moreno – @juavazmor
                                            Desarrollador de juegos y aplicaciones móviles
                                            www.fourattic.com/contact
                                            Abierto a ofertas de empleo freelance o contrato.
                                            Hola, soy Juan  Diego Vázquez, estudié Ingeniería Informática en la Universidad de Sevilla y junto con otros compañeros diseñamos y desarrollamos video juegos.
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Seguimiento",
                                    tabIcon: Calendario,
                                    tabContent: (
                                        <List className={classes.list}>
                                        Nivel: INICIACIÓN
                                        198180 Alumnos
                                        95% Valoraciones positivas (3K)
                                        Online y a tu ritmo
                                        Audio: Español
                                        Español, Inglés, Portugués, Alemán
                                        Actualizado el 12/01/2021
                                        </List>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
