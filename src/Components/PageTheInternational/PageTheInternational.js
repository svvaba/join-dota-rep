import React from 'react';
import { connect } from 'react-redux';
import './PageTheInternational.css';
import MenuBarContainer from '../MenuBar/MenuBar';
import PageTIOverview from './PageTIOverview/PageTIOverview';
import PageTIStandings from './PageTIStandings/PageTIStandings.js';
import PageTITeams from './PageTITeams/PageTITeams';
import PageTIMedia from './PageTIMedia/PageTIMedia';
import { Switch, Route } from 'react-router-dom';

class PageTheInternational extends React.PureComponent {


  render() {
    let currenturl= this.props.routerprops.location.pathname;
    return (
        <div className="All-content-container">
          <div id="international-header-bg">
            <div id="international-header-logo">

            </div>
          </div>
          <div id="international-navibar-bg">
            <div id="international-navibar-content">
            <MenuBarContainer
              menuButtons={["Overview", "Standings", "Media", "Teams"]}
              currentURL={currenturl}
              subLink="The International/"
              className="Menu-link"
            />
          </div>

          </div>

          <Switch>
            <Route exact path='/The International/Overview' render={(props) => <PageTIOverview />}
            />

            <Route exact path='/The International/Media' render={(props) => <PageTIMedia />}
            />
            <Route exact path='/The International/Teams' render={(props) => <PageTITeams />}
            />
            <Route exact path='/The International/Standings' render={(props) => <PageTIStandings />}
            />
          </Switch>

        </div>
    )
  }
}


const mapDispatchToProps= (dispatch)=> {
  return {

    setActiveIndex: (index) => {
      dispatch({
        type: 'CHANGE_ACTIVE_INDEX',
        index: index,
      });
    },
  }
}

const PageTheInternationalContainer= connect(null, mapDispatchToProps)(PageTheInternational);
export default PageTheInternationalContainer