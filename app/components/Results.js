var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results(props) {
  return (
    <div> Results: {puke(props)} </div>
  )
}
React.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results;
