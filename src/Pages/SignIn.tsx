import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography, Button } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ModeCommentOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { ModalBlock } from '../components/ModalBlock';


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        minWidth: '260%',
        minHeight: '260%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    // loginSideField: {
    //     marginBottom: 18,
    // },
    // registerField: {
    //     marginBottom: theme.spacing(5),
    // },
    // loginFormControl: {
    //     marginBottom: theme.spacing(2),
    // },
}));


export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            ?????????????? ?? ??????, ?????? ?????? ??????????????????.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleIcon className={classes.blueSideListInfoIcon} />
                            ??????????????, ?? ?????? ?????????????? ?? ????????.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListInfoIcon} />
                            ?????????????????????????????? ?? ??????????????.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
                        ??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
                    </Typography>
                    <Typography>
                        <b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b>
                    </Typography>
                    <br />
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginBottom: 20 }}
                        variant="contained"
                        color="primary"
                        fullWidth>
                        ????????????????????????????????????
                    </Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
                        ??????????
                    </Button>
                    <ModalBlock
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="?????????? ?? ??????????????">
                        <FormControl
                            // className={classes.loginFormControl}
                            sx={{ marginBottom: theme => theme.spacing(2)}}
                            component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    sx={{ marginBottom: theme => theme.spacing(3)}}
                                    // className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    // className={classes.loginSideField}
                                    sx={{ marginBottom: theme => theme.spacing(5)}}
                                    autoFocus
                                    id="password"
                                    label="????????????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    ??????????
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="???????????????? ?????????????? ????????????">
                        <FormControl
                            // className={classes.loginFormControl}
                            sx={{ marginBottom: theme => theme.spacing(2)}}
                            component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    // className={classes.registerField}
                                    sx={{ marginBottom: theme => theme.spacing(5)}}
                                    autoFocus
                                    id="name"
                                    label="??????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />
                                <TextField
                                    // className={classes.registerField}
                                    sx={{ marginBottom: theme => theme.spacing(5)}}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    // className={classes.registerField}
                                    sx={{ marginBottom: theme => theme.spacing(5)}}
                                    autoFocus
                                    id="password"
                                    label="????????????"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary" fullWidth>
                                    ??????????
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>

    )
}

