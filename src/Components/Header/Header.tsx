import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../Redux/redux-store";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { logoutTC } from "../Redux/auth-reducer.ts";
import { Button, Col, Layout, Row } from "antd";
import { selectAuth, selectCurrentUserLogin } from "../Redux/auth-selector.ts";
import { Link } from "react-router-dom";
//@ts-ignore
import style from './Header.module.css';
//@ts-ignore
import userProfile from '../../img/avaUsers.png'
import { useParams } from "react-router";
import { HeaderPropsType } from "../../Types/Types.ts";


type Params = {
    userId: string | undefined;
}

const { Header } = Layout;

export const AppHeader: React.FC<{}> = () => {
    const isAuth = useSelector(selectAuth);
    const login = useSelector(selectCurrentUserLogin);
    const profile = useSelector((state: AppStateType) => state.profilePage.profile);
    let {userId} = useParams<Params>()
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId);

    console.log(profile);


    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutTC() as unknown as AnyAction)
    }

    let menuRef = useRef<HTMLDivElement>();

    return (
        <Header className={style.header}>
            <div className={style.logo} />
            <Row className={'headerBlock'}>
                <Col span={18}></Col>
                {isAuth
                    ? <>
                        <Col span={1}>
                            <div profile={profile} userId={userId}>
                                <img ref={menuRef} src={profile?.photos.large || userProfile} className={style.avatarHeader} alt="avatarProfile"></img>
                            </div>
                        </Col>
                        <Col span={5} >
                            <div ref={menuRef}>
                                <span className={style.login}>{login}</span>
                                <button onClick={logout} className={style.btnExit}>Выйти</button>
                            </div>

                        </Col>
                    </>
                    :
                    <Col span={6}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>
                }
            </Row>
        </Header>
    )
}
