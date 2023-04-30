import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './reduxnew/store/index';

import Chartpage from './screens/Chartpage';
import Mainpage from './screens/Mainpage';
import Contactpage from './screens/Contactpage';

const App =()=>{
    return(
        <Provider store = {store}>
        <BrowserRouter>
        
       <Switch>
       <Route exact path="/" component={Mainpage}/>
       <Route path="/contactpage" component={Contactpage}/>
       <Route path="/chartpage" component={Chartpage}/>
       </Switch> 
       
       </BrowserRouter>
       </Provider>
    )

}
export default App;