import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Register from './pages/Register';
import Edit from './pages/Edit';
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component={Main}/>
                <Route path = '/register' component={Register}/>
                <Route path = '/edit' component={Edit}/>
            </Switch>
        </BrowserRouter>
    )
}