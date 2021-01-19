import { connect } from 'react-redux';
import { login ,forgotPassword} from '../../actions/public.action';
import Login from './Login';

export default connect(
  null,
  { login,forgotPassword }
)(Login);
