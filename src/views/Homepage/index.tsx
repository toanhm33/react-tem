import { makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'

interface Props {
  
}
const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url("/images/background.png")`,
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundPositionX: 'right'
  },
  content: {

  },
  imageWrap: {
    
  },
  cardContent: {
    backgroundImage: `url("/images/tab_content.png")`,
    height: 300,
    backgroundRepeat: 'no-repeat',
  }
}))


export default function Homepage({}: Props): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.cardContent}>
        
      </div>
    </div>
  )
}
