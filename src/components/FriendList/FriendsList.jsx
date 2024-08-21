// import friends from '../friendslist.json'
import FriendListItem from './FriendsListItem'
import css from "./FriendList.module.css";

export default function Friendslist ({friends}) {
return (
    <ul className={css.list}>
        {friends.map(friend => {
            return	<li key={friend.id} className={css.item}>
<FriendListItem friends = {friend}/>
            </li>;
            })}
</ul>
)
}

// FriendListItem 