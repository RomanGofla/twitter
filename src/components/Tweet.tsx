import React from 'react';
import classNames from 'classnames';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';

import { useHomeStyles } from '../Pages/Home';
import { Avatar, Grid, IconButton, Paper, Typography } from '@mui/material';

interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({
    text,
    user,
    classes,
}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography>
                        <b>{user.fullname}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <CommentIcon style={{ fontSize: 20 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepostIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <LikeIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <ShareIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};