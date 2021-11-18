import "./Github.css";
import { useState } from "react";
import { GetRequest } from "../Utilites/Network";
import RepoItem from "./RepoItem";
import ProfileCard from "./ProfileCard";

function GitHubProfiler() {
  const [searchInput, setSearchInput] = useState("");
  let [userName, setUserName] = useState("");
  let [avatar, setAvatar] = useState("");
  let [repoList, setRepoList] = useState([]);

  const _handleOnInputChange = (data: any) => {
    setSearchInput(data.target.value);
    // console.log(searchInput);
  };

  const _handleSearchProfile = async () => {
    if (!searchInput || searchInput.length == 0) {
      alert("Enter Something");
    }
    const profileResponse = await GetRequest(
      `https://api.github.com/users/${searchInput}`
    );
    // console.log("LN23 data :", profileResponse);

    if (!profileResponse) {
      return;
    }

    const { avatar_url, name, repos_url } = profileResponse;
    setUserName(name);
    setAvatar(avatar_url);

    const repoResponse = await GetRequest(repos_url);
    // console.log("LN33 repo_data :", repoResponse);

    if (!repoResponse) {
      return;
    }
    setRepoList(repoResponse);
  };

  const _renderRepoList = () => {
    if (!repoList || repoList.length === 0) {
      return null;
    }
    return repoList.map((data: any) => {
      return <RepoItem key={data.id} {...data} />;
    });
  };
  return (
    <>
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
          >
            Search
          </button>
        </div>
        <div className="cards">
          <ProfileCard uname={userName} image={avatar} />
          <div className="repo-list"> {_renderRepoList()}</div>
        </div>
      </div>
    </>
  );
}

export default GitHubProfiler;
