import { useState, useEffect} from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
 
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
    const data = await response.json();
    setRepos(data.items);
  };

  return (
    <>
     <div>
     <h1>GitHub Repository Search</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Enter repository name" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>
                <Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
              </td>
              <td>{repo.owner.login}</td>
              <td>{repo.stargazers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </>
  )
}

export default App
