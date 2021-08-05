import { connect } from "react-redux";
import ClowderListComponent from "../components/ClowderListComponent";

const mapStateToProps = ({ clowder }) => ({
  clowder,
});

export default connect(mapStateToProps)(ClowderListComponent);
