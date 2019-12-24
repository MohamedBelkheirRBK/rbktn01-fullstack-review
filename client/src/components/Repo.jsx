import React from 'react';

import './Repo.css'

const Repo = ({repo}) => {
  if(repo){
    return (<div>

      <div className="repo-details">
        <div className="repo-top">
        <a className="user-name">{repo.owner.name}</a>
        <span className="repo-name">{repo.name}</span>
        <span className="repo-watchers">Watchers: {repo.watchers}</span>
        <span className="repo-issues">Issues: {repo.issues}</span>
        </div>
        <div className="repo-description">{repo.desc}</div>
      </div>
    </div>)
  }else{
    return <h1>Loading</h1>
  }
}

export default Repo;