import { memo } from "react";
import "../index.css";

function ProfileCard(props: any) {
  const { uname, image } = props;
  if (!uname || !image) {
    return null;
  }

  return (
    <div className="ProfileCard-container">
      <p className="ProfileCard-title">{uname}</p>
      <img className="ProfileCard-img" src={image} alt={uname} />
    </div>
  );
}

export default memo(ProfileCard);
