import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(frend => (
        <FriendListItem
          key={frend.id}
          avatar={frend.avatar}
          name={frend.name}
          isOnline={frend.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem(props) {
  const { avatar, name } = props;
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
// --------------------------------------------
// export default function FriendList({avatar,name,isOnline}){
// 	return(<ul className="friend-list">
// 	<FriendListItem/>
// 	</ul>)
// 	};

// 	function FriendListItem(avatar,name, isOnline){
// 		return(
// 				<li className="item">
// 	  <span className="status"></span>
// 	  <img className="avatar" src={avatar} alt="User avatar" width="48" />
// 	  <p className="name">{}</p>
// 	</li>
// 		)
// 	}

FriendListItem.propTypes = {
  friends: PropTypes.array,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
