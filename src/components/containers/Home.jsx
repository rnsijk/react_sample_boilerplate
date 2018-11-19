import React from 'react';
import {connect} from 'react-redux';

import helloSelector from '../../selectors/helloSelector';
import helloActions from '../../actions/helloActions';

import MessageForm from '../presenters/MessageForm';

class Home extends React.Component {
  handleMessagechange(message) {
    this.props.updateMEssage(message);
  }

  handleReversechange() {
    this.props.toggleReverse();
  }

  render() {
    return(
      <div>
        <h1>{this.props.messageToShow}</h1>
        <MessageForm
          message={this.props.message}
          reverse={this.props.reverse}
          onMessageChange={this.handleMessagechange.bind(this)}
          onReverseChange={this.handleReversechange.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => (helloSelector(state));

const mapDispatchToProps = (dispatch) => (helloActions(dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
