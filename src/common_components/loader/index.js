import { connect } from "react-redux";
import actions from "../../actions/loader.action";

const mapDispatchToProps = dispatch => ({
  setPageLoading: isLoading => {
    dispatch(actions.changeLoaderState(isLoading));
  }
});

const mapStateToProps = state => ({
  Loader: state.Loader,
});

export default connect(mapStateToProps, mapDispatchToProps);
