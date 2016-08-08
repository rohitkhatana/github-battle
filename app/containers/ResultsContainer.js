var React = require('react');
var Results = require('../components/Results.js');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playerInfo)
      .then(function(scores){
        this.setState({
          isLoading: false,
          scores: scores
        })
      }.bind(this));
  },
  render: function() {
    return (
      <Results
        scores={this.state.scores}
        playersInfo={this.props.location.state.playerInfo}
        isLoading={this.state.isLoading}
      />)
  }
});

module.exports = ResultsContainer;
