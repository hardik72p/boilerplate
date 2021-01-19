import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { GetNotifications } from '../../actions/notification';
import Header from './Header';

// const select = store => ({ notifications: store.notifications.notifications });

export default withRouter(
  connect(
    null,
    {  }
  )(Header)
);
