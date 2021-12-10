import { makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import clsx from 'clsx';

interface Props {
  
}
const useStyles = makeStyles(() => ({
  root: {
  },
  content: {
  },
  backgroundStyle: {
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50%',
    backgroundSize: 'auto',
    backgroundPositionX: 'right'

  },
  introlCell: {
    backgroundImage: `url("/images/text_color.jpg")`,
    lineHeight: 9,
    fontWeight: 900,
    fontSize: 119,
    whiteSpace: 'pre-line',
    color: 'transparent',
    backgroundSize: 'contain',
    WebkitBackgroundClip: 'text',
  },
  intro: {
    backgroundImage: `url("/images/background.png")`,
  },
  wrap: {
    maxWidth: 1280,
    margin: 'auto'
  },
  service: {
    backgroundImage: `url("/images/background_3.png")`,
  },
  imageWrap: {

  },
  cardContent: {
    backgroundImage: `url("/images/tab_content.png")`,
    backgroundRepeat: 'no-repeat',
  }
}))


export default function Homepage({}: Props): ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={clsx(classes.intro, classes.backgroundStyle)}>
        <div className={classes.wrap}>
          <h1 className={classes.introlCell}>
            Zzz ... Drogon ... zzZ
          </h1>
        </div>
      </div>
      <div className={clsx(classes.cardContent, classes.backgroundStyle)}>
      </div>
      <div className={clsx(classes.service, classes.backgroundStyle)}>
      </div>
    </div>
  )
}
