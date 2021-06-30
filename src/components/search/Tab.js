import { connect } from "react-redux";
import { setSearchName } from "../../redux/search/search.actions";
import { selectSearchName } from "../../redux/search/search.selectors";
import { createStructuredSelector } from "reselect";

const Tab = ({ title, searchName, setSearchName }) => (
  <span
    className={`tab ${searchName === title ? "tab-selected" : ""}`}
    onClick={() => setSearchName(title)}
  >
    {title === "rent" ? "Louer" : "Acheter"}
  </span>
);

const mapStateToProps = createStructuredSelector({
  searchName: selectSearchName,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchName: (search) => dispatch(setSearchName(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
