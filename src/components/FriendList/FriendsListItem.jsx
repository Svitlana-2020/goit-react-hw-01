// import friends from "../friendslist.json";
import css from "./FriendList.module.css";
import clsx from 'clsx';

export default function FriendListItem({friends: {avatar, name, isOnline}}) {
  return <div>
        <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
        <p className={css.friendName}>{name}</p>
        <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>{isOnline ? "Online" : "Offline"}</p>
      </div>
}
