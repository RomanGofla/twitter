import {
    Container,
    Grid,
    Paper,
    Theme,
    Typography,
} from '@mui/material/';
import InputBase from '@mui/material/InputBase';

import React from 'react';
import { makeStyles, withStyles, createStyles } from '@mui/styles';

import grey from '@mui/material/colors/grey';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: 'rgb(29, 161, 242)',
                },
                '& svg path': {
                    fill: 'rgb(29, 161, 242)',
                },
            },
        },

        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: 13,
        marginTop: 8,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: 20,
        height: 20,
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    tweetUserName: {
        color: grey[500],
    },
    inputStyles: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        height: 45,
        padding: 0,
    },
}));

const SearchTextField = withStyles(() =>
    createStyles({
        
    }),
)(InputBase);



export const Home = () => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        {[
                            ...new Array(20).fill(
                                <Tweet
                                    text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                                    user={{
                                        fullname: 'Glafira Zhur',
                                        username: 'GlafiraZhur',
                                        avatarUrl:
                                            'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                                    }}
                                    classes={classes}
                                />,
                            ),
                        ]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField className={classes.inputStyles} placeholder="Поиск по Твиттеру" fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}
