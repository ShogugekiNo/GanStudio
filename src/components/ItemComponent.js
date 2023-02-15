// This renders the items that are in the Shop.

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  card: {
    maxWidth: 300,
    boxShadow: `0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px, hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)`,
    transition: "all ease 200ms",
    "&:hover": {
      transform: "scale(1.03)",
      boxSshadow:
        "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
    },

  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    width:'100%',
    fontWeight: "bold",
    borderRadius:'0px',
    backgroundColor:'#3f51b5',
    color:'white',
    '&:hover':{
        backgroundColor:'#6674c4'
    }
  },
  grid: {
    marginTop: 20,
    marginLeft: 30,
  },
});

class ItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, item, addToCart } = this.props;

    return (
      <Grid item xs={3} className={classes.grid}>
        <Card className={classes.card} key={item.id}>
          <CardMedia
            className={classes.media}
            image={item.pictureURL}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {item.name}
            </Typography>
            <Typography component="p">${item.price}</Typography>
          </CardContent>
          <CardActions style={{padding:'5px 0px'}}>
            <Button
              size="small"
              color="primary"
              className={classes.button}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

ItemComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default withStyles(styles)(ItemComponent);
