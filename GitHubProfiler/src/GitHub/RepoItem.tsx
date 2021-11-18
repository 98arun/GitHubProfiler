function RepoItem(props: any) {
  const { html_url, name } = props;
  return (
    <div className="repo-list-item">
      <a className="repo-list-link" href={html_url} target="_blank">
        {name}
      </a>
    </div>
  );
}
export default RepoItem;
