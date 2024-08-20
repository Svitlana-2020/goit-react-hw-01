import css from "./ProfileCard.module.css";

export default function ProfileCard ({user: {avatar, username, tag, location, stats}}) {
    return (
    <div className={css.container}>
    <div>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.list}>
      <li className={css.item}>
        <span className={css.text}>Followers</span>
        <span className={css.number}>{stats.followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Views</span>
        <span className={css.number}>{stats.views}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Likes</span>
        <span className={css.number}>{stats.likes}</span>
      </li>
    </ul>
  </div>)
  }