import React from 'react';
import classNames from 'classnames';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';

import { useHomeStyles } from '../Pages/Home/theme';
import { Avatar, IconButton, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({
    _id,
    text,
    user,
    classes,
}: TweetProps): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя ${user.fullname}`}
                    src={user.avatarUrl}
                />
                <div>
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
                </div>
            </Paper>
        </Link>
    );
};