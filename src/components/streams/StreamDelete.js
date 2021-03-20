import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream({ id: this.props.match.params.id });
  }

  renderButtons = () => {
    return (
      <>
        <button onClick={this.onDelete} className="ui negative button">Delete</button>
        <button className="ui button">
          Cancel
        </button>
      </>
    );
  };

  onDelete = () => {
    this.props.deleteStream({ id: this.props.match.params.id });
  };

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          buttons={this.renderButtons()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
