const RepoName = (props) => {
  

  return (
    <div>
      {props.repoData &&
        props.repoData.slice(0, 5).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white bg-blue-500 text-xs py-1 px-2 mr-2 mb-2 inline-block"
          >
            {repo.name}
          </a>
        ))}
    </div>
  );
};

export default RepoName;
