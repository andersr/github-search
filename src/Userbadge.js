import React from 'react';
import { Col, Card, CardTitle, CardPanel, Collection, CollectionItem } from 'react-materialize';

const UserBadge = ({ userData }) => {
    return (<Card
    >
        <div className={"flex-row"}><CardTitle style={{ width: 200 }} image={userData.avatar_url} />
            <div style={{ flex: 1 }}> <Collection>
                <CollectionItem>Name: {userData.name ? userData.name : "No name found."}</CollectionItem>
                <CollectionItem>Followers: {userData.followers}</CollectionItem>
                <CollectionItem>Following: {userData.following}</CollectionItem>
            </Collection></div>
        </div>


    </Card>
    );
}

export default UserBadge;
