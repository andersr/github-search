import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

const UserBadge = ({ name, followerCount, followingCount }) => {
    return (
        <Collection header={name}>
            <CollectionItem>Followers: {followerCount}</CollectionItem>
            <CollectionItem>Following: {followingCount}</CollectionItem>
        </Collection>
    );
}

export default UserBadge;
