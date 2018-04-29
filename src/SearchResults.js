import React, { Component } from 'react';
import { Input, Button, Icon, Preloader } from 'react-materialize';
import { fetchData } from "./fetchData";
import UserBadge from './Userbadge';
import RepoList from './RepoList';
import './App.css';

const GITHUB_API = "https://api.github.com";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            input: "",
            userData: null,
            repoData: null,
        };
    }

    render() {
        return (<React.Fragment>
            <div className={"flex-row"}>
                <div style={{ flex: 1 }}>
                    <Input placeholder="Github username" onChange={(e, value) => this.handleInput(e, value)} /></div>
                <Button disabled={this.state.input === ""} onClick={() => this.runSearch()}><Icon>search</Icon></Button>
            </div>
            <div>{this.state.loading && <Preloader size='small' />}</div>
            {this.state.error && <div>Sorry, no matches found for "{this.state.input}".  Try again?</div>}
            {this.state.userData && <UserBadge
                name={this.state.userData.name}
                followerCount={this.state.userData.followers}
                followingCount={this.state.userData.following}
            />}
            {this.state.repoData && <RepoList repos={this.state.repoData}
            />}

        </React.Fragment>
        );
    }

    handleInput = (e, value) => {
        e.preventDefault();
        this.setState({
            input: value
        })
    }

    runSearch = async () => {
        await this.asyncSetState({ loading: true });
        try {

            const userData = await fetchData(`${GITHUB_API}/users/${this.state.input}`); // await fetch(`https://api.github.com/users/${this.state.input}`);
            const repoData = await fetchData(`${GITHUB_API}/users/${this.state.input}/repos`);
            console.log('repoData: ', repoData);

            await this.asyncSetState({
                loading: false,
                error: userData == null,
                userData,
                repoData
            });
        } catch (error) {
            console.log('error: ', error);

            await this.asyncSetState({
                loading: false,
                error: true,
                userData: null,
                repoData: null,
                input: "",
            });
        }
    }

    asyncSetState = (newState) => new Promise((resolve) => this.setState(newState, resolve));

}

export default Search;
