import React from 'react'
import {Grid, Grow, Typography, Card, CardContent} from "@material-ui/core";
import useStyles from "./Style.js"
import NewsCard from "./NewsCard.js"

const infoCards = [
    { title: 'Latest News All', info: 'news from all over the world inculdes all categories from global sources', text: 'Give me the latest news or show me the global news ' },
    { title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news or what\'s the latest news about sports' },
    { title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5 or give me the news about Smartphones' },
    { title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN of show me the latest news from ABC News' },
  ];


function HomeCards({art}) {
    const classes = useStyles()
    if(!art.length){
        return(
            <Grow in>
                
                <Grid className={classes.container} style={{paddingTop: 0}} container alignItems="stretch" spacing={1}>
                    {infoCards.map((infoCard, index) => (
                        <Grid key={index} item xs={12} sm={12} md={6} lg={6} /* className={classes.infoCard} */>
                            <Card className={classes.rootHomeCard} style={{backgroundColor: "rgba(0,74,135, 0.1)"}}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    search by :
                                </Typography>
                                <Typography className={classes.bigTitle} variant="h5" component="h2">{infoCard.title.split(' ')[2]}</Typography>
                                <Typography variant="body2" component="p">{infoCard.info}</Typography><hr style={{margin: "8px"}} />
                                <Typography variant="body2" component="p">
                                    Try saying <i className="fas fa-microphone"></i>  : <br/> 
                                    
                                    {infoCard.text}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }
    return (
        <Grid>
        <Grid className={classes.header}>
        <i className="fas fa-microphone"></i>  Try saying : Go back <i className="fas fa-arrow-left"></i>
        </Grid>    
        <Grid className={classes.container} container alignItems="stretch" justify="space-between" spacing={4}>
            {art.map((el, index)=>(
                <Grid key={index} item xs={12} sm={6} md={4} lg={4} >
                <NewsCard key={index} article={el}/>
                </Grid>
            ))}
        </Grid>
        </Grid>
    )
}

export default HomeCards
