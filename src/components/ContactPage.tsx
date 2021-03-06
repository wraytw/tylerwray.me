import React from 'react'
import { RouteComponentProps } from '@reach/router'

import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import { green, deepPurple } from '@material-ui/core/colors'
import brandColors from '../colors/brands'

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Phone'

import LinkedInIcon from '../images/Linkedin'
import GithubIcon from '../images/github-black.png'
import TwitterIcon from '../images/Twitter'

function styles(theme: Theme) {
  const iconStyle = {
    height: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  }

  return createStyles({
    root: {
      marginTop: theme.spacing.unit * 2
    },
    title: {
      fontSize: 32,
      color: theme.palette.grey[800],
      textAlign: 'center'
    },
    subTitle: {
      fontSize: 16,
      color: theme.palette.grey[800],
      textAlign: 'center',
      marginBottom: theme.spacing.unit * 3
    },
    contactCard: {
      width: 200,
      margin: theme.spacing.unit,
      textAlign: 'center'
    },
    linkedIn: {
      color: brandColors.linkedIn.main,
      '&:hover': {
        backgroundColor: brandColors.linkedIn.background
      }
    },
    linkedInIcon: {
      ...iconStyle,
      fill: brandColors.linkedIn.main
    },
    github: {
      color: brandColors.github.main,
      '&:hover': {
        backgroundColor: brandColors.github.background
      }
    },
    githubIcon: {
      ...iconStyle
    },
    twitter: {
      color: brandColors.twitter.main,
      '&:hover': {
        backgroundColor: brandColors.twitter.background
      }
    },
    twitterIcon: {
      ...iconStyle,
      fill: brandColors.twitter.main
    },
    phone: {
      color: green[600],
      '&:hover': {
        backgroundColor: green[100]
      }
    },
    phoneIcon: {
      ...iconStyle,
      height: '0.85em'
    },
    email: {
      color: deepPurple[500],
      '&:hover': {
        backgroundColor: deepPurple[100]
      }
    },
    emailIcon: {
      ...iconStyle,
      height: '0.85em'
    }
  })
}

interface Props extends RouteComponentProps {
  classes: {
    root: string
    title: string
    subTitle: string
    contactCard: string
    linkedIn: string
    linkedInIcon: string
    github: string
    githubIcon: string
    twitter: string
    twitterIcon: string
    phone: string
    phoneIcon: string
    email: string
    emailIcon: string
  }
}

function Contact({ classes }: Props) {
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Typography className={classes.title}>Hello.</Typography>
        <Typography className={classes.subTitle}>
          I use these things to communicate
        </Typography>
      </Grid>
      <Grid item>
        <Card className={classes.contactCard}>
          <CardContent>
            <Typography>Where I do my business</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://www.linkedin.com/in/wraytw"
              target="_blank"
              className={classes.linkedIn}
              fullWidth
            >
              <LinkedInIcon className={classes.linkedInIcon} />
              LinkedIn
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.contactCard}>
          <CardContent>
            <Typography>Where I do my code</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://github.com/tylerwray"
              target="_blank"
              className={classes.github}
              fullWidth
            >
              <img
                src={GithubIcon}
                className={classes.githubIcon}
                alt="github icon"
              />
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.contactCard}>
          <CardContent>
            <Typography>Where I do my lazy</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="https://twitter.com/wray_tw"
              target="_blank"
              className={classes.twitter}
              fullWidth
            >
              <TwitterIcon className={classes.twitterIcon} />
              Twitter
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.contactCard}>
          <CardContent>
            <Typography>Where I do my talking</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="tel:+18018556510"
              target="_blank"
              className={classes.phone}
              fullWidth
            >
              <PhoneIcon className={classes.phoneIcon} />
              Phone
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.contactCard}>
          <CardContent>
            <Typography>Where I do my deleting</Typography>
          </CardContent>
          <CardActions>
            <Button
              href="mailto:wraytw@gmail.com"
              target="_blank"
              className={classes.email}
              fullWidth
            >
              <EmailIcon className={classes.emailIcon} />
              Email
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Contact)
