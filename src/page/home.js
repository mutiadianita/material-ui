import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../components/CustomButton';
import StyledCustomButton from '../components/StyledCustomButton';

const useStyles = makeStyles((theme) => ({
    buttonPink: {
        backgroundColor: theme.palette.common.pink,
        color: theme.palette.common.white
    },
})
)
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Box mb={2} p={{ xs: 3, sm: 2, md: 1, lg: 0 }}>
                <Typography variant="h5">Default With Hook Button</Typography>
                <Button variant="contained" className={classes.buttonPink}>Default Button</Button>
            </Box>
            <Box mb={2} p={{ xs: 3, sm: 2, md: 1, lg: 0 }}>
                <Typography variant="h5">Styled Component Button</Typography>
                <CustomButton>Custom Button</CustomButton>
            </Box>
            <Box mb={2} p={{ xs: 3, sm: 2, md: 1, lg: 0 }}>
                <Typography variant="h5">Styled Component With Props Button</Typography>
                <StyledCustomButton color="red">Styled Custom Button Red</StyledCustomButton>
                <StyledCustomButton color="blue">Styled Custom Button Blue</StyledCustomButton>
            </Box>
        </div>
    );
}

export default Home;
