import React from 'react';
import { Icon, Collection, CollectionItem } from 'react-materialize';
import pretty from 'prettysize';

const RepoList = ({ repos }) => {
    return (
        <Collection header={"Repos"}>{repos.length > 0 ?
            repos.map((repo, index) => (<CollectionItem key={`${index.toString()}-${repo.id}`}>
                <Collection>
                    <CollectionItem>Name: {repo.name}</CollectionItem>
                    <CollectionItem>Description: {repo.description ? repo.description : "No description found."}</CollectionItem>
                    <CollectionItem>Git Url: {repo.git_url}</CollectionItem>
                    <CollectionItem>Stars: {repo.stargazers_count}</CollectionItem>
                    <CollectionItem>Forks: {repo.forks_count}</CollectionItem>
                    <CollectionItem>Open Issues: {repo.open_issues}</CollectionItem>
                    <CollectionItem>Size: {pretty(repo.size)}</CollectionItem>
                </Collection>
            </CollectionItem>))
            :
            <CollectionItem>No repos found.</CollectionItem>
        }</Collection>
    );
}

export default RepoList;
