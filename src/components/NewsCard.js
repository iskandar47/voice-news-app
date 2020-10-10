import React, {useState, useEffect, createRef} from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions} from "@material-ui/core"
import useStyles from "./Style.js"

function NewsCard({article, i, activeCard}) {
    const classes = useStyles()
    const [elementRef, setElementRef] = useState([])
    const scrollToRef  = (ref)=> window.scroll(0, ref.current.offsetTop - 80)
    useEffect(()=>{
        window.scroll(0,0)
        setElementRef((refs)=>Array(20).fill().map((_, j)=> refs[j] || createRef()))
    },[])
    useEffect(()=>{
        if(i === activeCard && elementRef[activeCard]){
            scrollToRef(elementRef[activeCard])
        }
    }, [i, activeCard, elementRef])
    
    
    return (
            <Card ref={elementRef[i]} className={activeCard === i ? classes.active : classes.root}> 
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
