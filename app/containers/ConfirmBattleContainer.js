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
  handleInitiatBattle: function() {
    console.log('called');
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    });
  },
  render: function() {
      return (
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playerInfo={this.state.playerInfo}
          onInitiatBattle={this.handleInitiatBattle}
         />)
  }
});

module.exports = ConfirmBattleContainer;
