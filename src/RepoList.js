import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

const RepoList = ({ repos }) => {
    return (
        <Collection header={"Repos"}>{repos.map((repo, index) => (<CollectionItem key={`${index.toString()}-${repo.id}`}>{repo.name}</CollectionItem>))

        }</Collection>
    );
}

export default RepoList;
