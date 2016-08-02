var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

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
    console.log('before render');
    var query =  this.props.location.query;
    console.log('QUERY', query);
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
