import React from 'react'
import './App.css';
import HomePage from './components/pages/homepage/hompageComponent'
import ShopPage from './components/pages/shoppage/shopPage'
import Header from './components/header/header'
import SignInSignOut from './components/pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page'
import {auth ,createUserProfile } from './firebase/firebase.utils'

import {Switch , Route} from 'react-router-dom'




class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount(){
   this.unsuscribeFromAuth = auth.onAuthStateChanged(async  userAuth=>{
      if(userAuth){
        const userRef =await createUserProfile(userAuth);

       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser : {
           id : snapShot.id , 
           ...snapShot.data()
         }}  )
       })
      }

      this.setState({currentUser : userAuth})
    }
    )

  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInSignOut} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
