import "./index.css";
import { useState } from "react";
import RepoItem from "./Views/RepoItem";
import ProfileCard from "./Views/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../../Redux/Action";

function GitHubProfiler() {
  const [searchInput, setSearchInput] = useState("");
  const _handleOnInputChange = (data: any) => {
    if (!data || !data.target) {
      return;
    }
    setSearchInput(data.target.value);
  };

  const myState = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  // console.log("LN63", myState);
  const { name, image, repo } = myState.users;

  const _renderRepoList = () => {
    if (!repo || repo.length === 0) {
      return null;
    }
    const list = repo.map((data: any) => {
      return <RepoItem key={data.id} {...data} />;
    });
    return <div className="repo-list">{list}</div>;
  };
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="container-title">GitHub Profile Details </h1>
        <div className="input-wrap">
          <input
            className="input-text"
            type="text"
            placeholder="Enter your GitHub UserId"
            value={searchInput}
            onChange={_handleOnInputChange}
          />
          <button
            className="input-btn"
            type="button"
            disabled={!searchInput || searchInput.length === 0}
            onClick={() => {
              dispatch(fetchUsersRequest(searchInput));
            }}
          >
            Search
          </button>
        </div>
        <div className="cards">
          <ProfileCard uname={name} image={image} />
          {_renderRepoList()}
        </div>
      </div>
    </div>
  );
}

export default GitHubProfiler;
