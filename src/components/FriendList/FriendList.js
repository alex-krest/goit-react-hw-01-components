import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className="FriendList_item">
      {isOnline ? (
        <span className="status" style={{ backgroundColor: 'green' }}></span>
      ) : (
        <span className="status" style={{ backgroundColor: 'red' }}></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name_avatar">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
