import React from 'react';

// an API that returns a player object
import PlayerAPI from './PlayerAPI';

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )

  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
    </div>
  )
}

// const Player = ({ match }) => <h1>Player {match.params.number}</h1>

export default Player;
