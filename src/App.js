import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './component/header';
import {StreamList} from './component/streams/streamList';
import {StreamCreate} from './component/streams/streamCreate';
import { StreamEdit } from './component/streams/streamEdit';
import { StreamDelete } from './component/streams/streamDelete';
import { StreamShow } from './component/streams/streaShow';

export const App =()=>{
    return(
        <div className="ui container">
        <Header/>
        <Switch>
            <Route exact path='/' component={StreamList}/>
            <Route path='/streamnew' component={StreamCreate}/>
            <Route path='/streamedit' component={StreamEdit}/>
            <Route path='/streamdelete' component={StreamDelete}/>
            <Route path='/streamshow' component={StreamShow}/>
        </Switch>
        </div>
        
    )
}

