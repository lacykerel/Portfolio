import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Main Container
import Main from './../Main/Main';
import Home from './../../pages/Home/Home';
import About from './../../pages/About/About';
import NotFound from './../../pages/NotFound/NotFound';
import TrumpCard from './../../pages/TrumpCard/TrumpCard';
import Horsemasks from './../../pages/Horsemasks/Horsemasks';
import ClickerGame from './../../pages/ClickerGame/ClickerGame';
import TwoSevenZero from './../../pages/TwoSevenZero/TwoSevenZero';
import AudioVisualizer from './../../pages/AudioVisualizer/AudioVisualizer';

// Create store
import store from './../../store/store';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Provider store={store}>
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/audiovisualizer' component={AudioVisualizer} />
              <Route exact path='/twosevenzero' component={TwoSevenZero} />
              <Route exact path='/clickergame' component={ClickerGame} />
              <Route exact path='/horsemask' component={Horsemasks} />
              <Route exact path='/trumpcard' component={TrumpCard} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
