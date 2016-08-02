var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query =  this.props.location.query;
    console.log(this);
    githubHelper.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        this.setState({
          isLoading: false,
          playerInfo: players
        });
      }.bind(this));
  },
  render: function() {
      console.log('before mount');
      return (
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playerInfo={this.state.playerInfo}
         />)
  }
});

module.exports = ConfirmBattleContainer;
