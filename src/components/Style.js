import {makeStyles} from "@material-ui/core/styles"
export default makeStyles({
    root: {
        margin: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: "100%"
    },
    active: {
      margin: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: "100%",
      borderBottom: "6px red solid",
      transform: "scale(1.05)",
      transition: "all 500ms linear",
  },
    media: {
        height: 160,
    },
    container: {
        padding: "32px 5%", width: "100%", margin: 0,  
    },
    
    header: {
        position : "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: 16,
        backgroundColor : "rgb(0,36,70)",
        color: "#FFF",
        textAlign: "center",
        zIndex: 5,
    },
    
    rootHomeCard: {
        minWidth: 275,
        textAlign: "left",
        height: "100%",
        color: "white",
      },
      
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      bigTitle: {
          color: "#FFF"
      },
      title: {
        fontSize: 14,
        color: "#888"
      },
      pos: {
        marginBottom: 12,
      },
});