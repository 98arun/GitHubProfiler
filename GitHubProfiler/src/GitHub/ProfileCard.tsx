import "./Github.css";
function ProfileCard(props: any) {
  const { uname, image } = props;
  return (
    <div className="ProfileCard-container">
      <p className="ProfileCard-title">{uname}</p>
      <img className="ProfileCard-img" src={image} alt={uname} />
    </div>
  );
}

export default ProfileCard;
