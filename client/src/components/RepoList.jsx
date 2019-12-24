import React from 'react';

import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repositories Available: {props.repos.length}</h4>
    {props.repos.map((element, i)=>{
      return <Repo key={i} repo={element}/>
    })}
  </div>
)

export default RepoList;