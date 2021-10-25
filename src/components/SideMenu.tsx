import React from 'react';


import Hidden from '@mui/material/Hidden';
import CreateIcon from '@mui/icons-material/Create';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageIcon from '@mui/icons-material/EmailOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';
import UserIcon from '@mui/icons-material/PermIdentityOutlined';
import { Button, IconButton, Typography } from '@mui/material';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { Link } from 'react-router-dom';

import { useHomeStyles } from '../Pages/Home/theme';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
    classes,
}: SideMenuProps): React.ReactElement => {
    const [visibleAddTweet, setSetVisibleAddTweet] = React.useState<boolean>(false);

    const handleClickOpenAddTweet = () => {
        setSetVisibleAddTweet(true);
    };

    const onCloseAddTweet = () => {
        setSetVisibleAddTweet(false);
    };

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to="/home">
                    <IconButton className={classes.logo} aria-label="" color="primary">
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Поиск
                        </Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Уведомления
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Сообщения
                        </Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />

                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Закладки
                        </Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Список
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Hidden mdDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Профиль
                        </Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button
                    onClick={handleClickOpenAddTweet}
                    className={classes.sideMenuTweetButton}
                    variant="contained"
                    color="primary"
                    fullWidth>
                    <Hidden mdDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                    <div style={{ width: 550 }}>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </div>
                </ModalBlock>
            </li>
        </ul>
    );
};
