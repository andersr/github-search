import React, { Component } from 'react';
import { fetchData } from "./utils/fetchData";
import UserBadge from './Userbadge';
import RepoList from './RepoList';
import Loading from "./Loading";
import './App.css';
import SearchForm from './SearchForm';


const GITHUB_API = "https://api.github.com";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            input: "",
            userData: null,
            repoData: null,
        };
    }

    render() {
        return (<div>
            <SearchForm
                placeholder={"Github username"}
                onSubmit={(e) => this.handleSubmit(e)}
                input={this.state.input}
                onChange={(e, value) => this.handleInput(e, value)}
                onClick={() => this.runSearch()}
            />
            {this.state.loading && <Loading />}
            {this.state.error != null && <div>Sorry, no matches found for "{this.state.error}".  Try again?</div>}
            {this.state.userData && <UserBadge userData={this.state.userData}
            />}
            {this.state.repoData && <RepoList repos={this.state.repoData}
            />}
        </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.runSearch();
    }

    handleInput = (e, value) => {
        e.preventDefault();
        this.setState({
            input: value,
            error: null,
        })
    }

    runSearch = async () => {
        await this.asyncSetState({ loading: true });
        try {
            const input = this.state.input;
            const userData = await fetchData(`${GITHUB_API}/users/${this.state.input}`);
            const repoData = await fetchData(`${GITHUB_API}/users/${this.state.input}/repos`);

            await this.asyncSetState({
                loading: false,
                error: userData == null ? input : null,
                userData,
                repoData,
                input: "",
            });
        } catch (error) {
            console.log('error: ', error);

            await this.asyncSetState({
                loading: false,
                error: null,
                userData: null,
                repoData: null,
                input: "",
            });
        }
    }

    asyncSetState = (newState) => new Promise((resolve) => this.setState(newState, resolve));

}

export default Search;
