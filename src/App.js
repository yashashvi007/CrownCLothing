import React from 'react'
import './App.css';
import HomePage from './components/pages/homepage/hompageComponent'
import ShopPage from './components/pages/shoppage/shopPage'
import Header from './components/header/header'
import SignInSignOut from './components/pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page'
import {auth ,createUserProfile } from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {Switch , Route} from 'react-router-dom'
import {setCurrentUser} from './redux/user/user-action'




class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser : null
  //   }
  // }

  unsuscribeFromAuth = null;

  componentDidMount(){
   this.unsuscribeFromAuth = auth.onAuthStateChanged(async  userAuth=>{
      if(userAuth){
        const userRef =await createUserProfile(userAuth);

      //  userRef.onSnapshot(snapShot => {
      //    this.setState({
      //      currentUser : {
      //      id : snapShot.id , 
      //      ...snapShot.data()
      //    }}  )
      //  })

      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
          id : snapShot.id,
          ...snapShot.data()
        })
      })
      }

      // this.setState({currentUser : userAuth})
      this.props.setCurrentUser(userAuth)
    }
    )

  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInSignOut} />
          
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(null , mapDispatchToProps)(App);
