import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import StationSelect from './Stations';
import NavigationBar from './Navigation';

import logo from '../images/logo.svg';
import './style.css';


class Header extends Component {

  render() {
    return (
      <div className="flexbox_container">
        <p className="title_item col-lg-9"> 
          <div className="row">
            <a className="logo_item" target="_blank" rel="noopener noreferrer" href="http://cams.seti.org">
              <img src={logo} alt="NASA" width="36.7" height="30" />
            </a>
            Meteor Shower Portal
          </div>
        </p>
        <div className="search_box col-lg-3 text-right">
          <Grid container spacing={2}>
            <Grid item>
              <NavigationBar
                onChange={this.props.onDateChange}
              />
            </Grid>

            <Grid item>
              <StationSelect
                onChange={this.props.onSourceChange}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default React.memo(Header);
