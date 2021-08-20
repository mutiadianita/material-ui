import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    box: {
        display:'flex',
        marginBottom: 24,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    orangeAvatar: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purpleAvatar: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
const Components = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Typography variant="h5">Avatar</Typography>
            <Box className={classes.box}>
                <Avatar>H</Avatar>
                <Avatar className={classes.orangeAvatar}>N</Avatar>
                <Avatar className={classes.purpleAvatar}>OP</Avatar>
            </Box>
            <Typography variant="h5">Buttons</Typography>
            <Box className={classes.box}>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
            </Box>
            <Typography variant="h5">Card</Typography>
            <Box className={classes.box}>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}

export default Components;
