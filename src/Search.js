import React, { Component } from 'react';
import { Input, Button, Icon, Preloader } from 'react-materialize';
import UserBadge from './Userbadge';
import './App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            message: null,
            input: "",
            userData: null,
        };
    }

    render() {
        return (
            <div>
                <Input placeholder="Github username" onChange={(e, value) => this.handleInput(e, value)} /><Button disabled={this.state.input === ""} onClick={() => this.runSearch()}><Icon>search</Icon></Button>
                <div>{this.state.loading && <Preloader size='small' />}</div>
                {this.state.error && <div>Sorry, no matches found for this search :-/</div>}
                {this.state.userData && <UserBadge
                    name={this.state.userData.name}
                    followerCount={this.state.userData.followers}
                    followingCount={this.state.userData.following}
                />}
            </div>
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
            const result = await fetch(`https://api.github.com/users/${this.state.input}`);
            if (result.ok) {
                const userData = await result.json();
                console.log('data: ', userData);
                await this.asyncSetState({
                    loading: false,
                    userData
                });
            } else {
                this.setState({
                    loading: false,
                    error: true,
                    userData: null,
                })
            }
        } catch (error) {
            console.log('error: ', error);
        }

    }

    asyncSetState = (newState) => new Promise((resolve) => this.setState(newState, resolve));

}

export default Search;
