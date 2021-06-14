import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TarefasForm from './pages/Task/Form/index.js';
import Table from './pages/Task/Table/index';

    const Routes = () =>(
        <BrowserRouter>
            <Switch>
                <Route  exact path = '/'            component = {Table      }/>
                <Route  exact path = '/tarefas/:id' component = {TarefasForm}/>
                <Route  exact path = '/tarefas/new' component = {TarefasForm}/>
                <Route  exact path = '/tarefas'     component = {Table      }/>
            </Switch>
        </BrowserRouter> 
    )

    export default Routes;