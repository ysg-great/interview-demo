import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RepoDetails() {
  const { owner, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      const data = await response.json();
      setRepoDetails(data);
    };
    fetchRepoDetails();
  }, [owner, repo]);

  if (!repoDetails) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{repoDetails.name}</h1>
      <p><strong>Description:</strong> {repoDetails?.description}</p>
      <p><strong>Owner:</strong> {repoDetails.owner?.login}</p>
      <p><strong>Stars:</strong> {repoDetails?.stargazers_count}</p>
      <p><strong>Forks:</strong> {repoDetails?.forks_count}</p>
      <p><strong>Open Issues:</strong> {repoDetails?.open_issues_count}</p>
      <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}

export default RepoDetails;
