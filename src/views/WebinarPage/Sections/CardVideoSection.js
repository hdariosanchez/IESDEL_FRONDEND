
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, blueGrey, grey, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { grayColor } from 'assets/jss/material-kit-react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height:  500,
    width: 800,
    //paddingTop: '56.25%', // 16:9
    border: "2px solid red"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),    
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: 12
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className={classes.expand} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            IESDEL
          </Avatar>
        }

        title="El titulo del webinar es el que debe ir aqjui"
        subheader="Podemos ubicar la fecha de emision Agosto 15, 2021"
      />

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <iframe
            className={classes.media}
            src="https://www.youtube.com/embed/Wp1h01gCQLg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          </Grid>
          <Grid item xs>
            <Typography >{
            `Aqui puede vernir cualquier char que deseemos poner en vivo, o puede venir una 
            descripion de lo que se trata`
            }</Typography>
          </Grid>
        </Grid>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Una breve descripcion de lo que trata el tema focal del webinar Una breve descripcion de lo que trata el tema focal del webinar Una breve descripcion de lo que trata el tema focal del webinar
          Una breve descripcion de lo que trata el tema focal del webinar Una breve descripcion de lo que trata el tema focal del webinar
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar a favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartir en las redes sociales">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Introduccion de los temas:</Typography>
          <Typography paragraph>
            Aqui va una breve introduccion del webinar, aspecto mas técnico
          </Typography>
          <Typography paragraph>
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinarEste debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
          Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinarEste debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webina           
          </Typography>
          <Typography paragraph>
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
            v
            Este debe ser una amplia descripcion que estara mucho antes de la emision como algo mas especifico que se va  tratar en el webinar
            v
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
