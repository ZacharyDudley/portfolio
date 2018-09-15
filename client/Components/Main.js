import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Main = props => {
  const { children } = props

  return (
    <div id="page-grid" className={props.settings.color}>
      <div className="background">
        <div className="background-image" />
      </div>
      {children}
    </div>
  )
};

const mapState = ({settings}) => ({settings});

const mapDispatch = (dispatch) => {
  return {}
};

export default withRouter(connect(mapState, mapDispatch)(Main));
