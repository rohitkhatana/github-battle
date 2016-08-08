var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('../components/UserDetails');
var UserDetailWrapper = require('../components/UserDetailWrapper');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> Loading.. </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailWrapper header='Player One'>
            <UserDetails info={props.playerInfo[0]} />
          </UserDetailWrapper>
          <UserDetailWrapper header='Player Two'>
            <UserDetails info={props.playerInfo[1]} />
          </UserDetailWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2' style={styles.space}>
          <div className='col-sm-12'>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiatBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  onInitiatBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
