import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { Provider, connect } from 'react-redux';
import {initializeApp} from './Components/Redux/app-reducer'
import { compose } from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import store from './Components/Redux/redux-store';
import DialogsContainer from './Components/Messages/DialogsContainer'

// const DialogsContainer = React.lazy(() => import('./Components/Messages/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount(){
        this.props.initializeApp()   
    }

    render(){
        if(!this.props.initialized){
            return <Preloader/> 
        }
        return (
            <div className='wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='container-wrapper'>
                        {/* <Suspense fallback={<div><Preloader /></div>}> */}
                            <Routes>
                                <Route path='/profile/' element={<ProfileContainer />}>
                                    <Route path=':userId' element={<ProfileContainer />}/>
                                </Route>
                                <Route path='/users' element={<UsersContainer/>}/>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                <Route path='/news' element={<News/>}/>
                                <Route path='/login' element={<Login/>}/>
                            </Routes>
                        {/* </Suspense> */}
                        
                    </div>
            </div> 
      );
    }
  
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }    
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)  (App);


const MainApp = (props) => {
    return <HashRouter>
            <Provider store={store}>
                <AppContainer/>
        </Provider>
    </HashRouter> 
            
        
   
}

export default MainApp;

