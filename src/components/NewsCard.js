import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions} from "@material-ui/core"
import useStyles from "./Style.js"
/* import classNames from 'classnames'; */

function NewsCard({article, i, activeCard}) {
    const classes = useStyles()
    return (
            <Card className={activeCard === i ? classes.active : classes.root}> 
              {/* <Card className={classNames(classes.root, activeCard === i ? classes.activeCard : null)>  */} 
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={article.urlToImage}
                title={article.title}
                />
                <CardContent>
                    Author : {article.author ? article.author : "Not found"}
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{article.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{article.description}</Typography>
                </CardContent>
                
            </CardActionArea>
            <CardActions>

                <Button size="small" color="primary" href={article.url} target="_blank">
                 Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default NewsCard
