import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './component/header';
import StreamList from './component/streams/streamList';
import StreamCreate from './component/streams/streamCreate';
import StreamEdit from './component/streams/streamEdit';
import StreamDelete from './component/streams/streamDelete';
import StreamShow from './component/streams/streamShow';
import history from './history';

export const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={StreamList} />
                        <Route path='/stream/new' component={StreamCreate} />
                        <Route path='/streamedit/:id' component={StreamEdit} />
                        <Route path='/streamdelete/:id' component={StreamDelete} />
                        <Route path='/streamshow/:id' component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

