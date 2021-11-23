import "./index.css";
import { useState } from "react";
import { GetRequest } from "../../Utilites/Network";
import RepoItem from "./Views/RepoItem";
import ProfileCard from "./Views/ProfileCard";

function GitHubProfiler() {
  const [searchInput, setSearchInput] = useState("");
  let [userName, setUserName] = useState("");
  let [avatar, setAvatar] = useState("");
  let [repoList, setRepoList] = useState([]);

  const _handleOnInputChange = (data: any) => {
    if (!data || !data.target) {
      return;
    }
    setSearchInput(data.target.value);
  };

  const _handleSearchProfile = async () => {
    if (!searchInput || searchInput.length === 0) {
      alert("Enter Your GitHub UserID");
    }
    const profileResponse = await GetRequest(
      `https://api.github.com/users/${searchInput}`
    );

    //Check & Handle if there is a fallback response from the api
    if (!profileResponse) {
      alert("You Entered Wrong UserID");
      setSearchInput("");
      setRepoList([]);
      setUserName("");
      setAvatar("");
      return;
    }

    const { avatar_url, name, repos_url } = profileResponse;
    setUserName(name);
    setAvatar(avatar_url);

    const repoResponse = await GetRequest(repos_url);

    if (!repoResponse) {
      return;
    }
    setRepoList(repoResponse);
  };

  const _renderRepoList = () => {
    if (!repoList || repoList.length === 0) {
      return null;
    }
    const list = repoList.map((data: any) => {
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
            onClick={_handleSearchProfile}
            disabled={!searchInput || searchInput.length === 0}
          >
            Search
          </button>
        </div>
        <div className="cards">
          <ProfileCard uname={userName} image={avatar} />
          {_renderRepoList()}
        </div>
      </div>
    </div>
  );
}

export default GitHubProfiler;
