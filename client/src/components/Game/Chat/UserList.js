import Ruby from '../../../assets/Ruby_logo.png'
import './Chat.scss'

const UserList = (props) => {
  return (
    <ul style={{padding: '5px'}}>
      {props.users.map((user) => (
        <div className='user-list'>
          <img style={{ width: '2vw', height:'3vh', marginRight:'5px' }} src={Ruby} alt='' />
          <li style={{ listStyleType: 'none' }} key={user.id}>
            {user.name}
            {user.name === props.user.name && <span>(You)</span>}
            <span style={{ backgroundColor: user.color }}>_</span>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default UserList;
