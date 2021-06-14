import './PlayerList.scss';

const PlayerList = ({ players, user }) => {
  return (
    <ul style={{ padding: '0', marginTop: '5px' }}>
      {players.map((player, id) => (
        <div key={id} className="player-list">
          <li style={{ listStyleType: 'none' }}>
            {player.name}
            {user.id === player.id && <span> (You)</span>}
            <span style={{ backgroundColor: player.color }}>_</span>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default PlayerList;
