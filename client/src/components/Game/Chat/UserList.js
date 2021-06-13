import Ruby from '../../../assets/Ruby_logo.png'
import './Chat.scss'

const UserList = ({players, users}) => {

  let people;
  if (users) {
    people = users;
  } else {
    people = players;
  }

  return (
    <ul style={{ padding: '5px', marginTop: '5px' }}>
      {/* <p>Players:</p> */}
      {people.map((user, idx) => (
        <div key={idx} className='user-list'>
          <img style={{ width: '2vw', height:'3vh', marginRight:'5px' }} src={Ruby} alt='' />
          <li style={{ listStyleType: 'none' }} key={user.id}>
            {user.name}
            {user.id === user.id && <span>(You)</span>}
            <span style={{ backgroundColor: user.color }}>_</span>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default UserList;
