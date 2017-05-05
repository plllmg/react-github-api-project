import React from 'react';
import { browserHistory as history } from 'react-router';
import User from './User'
import Follower from './Follower'
import Repo from './Repo'
var TOKEN = '7c888b8a3d5b73498b72385e9bd364044e58d563';

class Repos extends React.Component {

    constructor(props){
      super(props)
      this.state = {}
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos?access_token=${TOKEN}`)
        .then(response => response.json())
        .then(
            following => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    following: following
                });
            }
        );
    }
    render() {
        if (!this.state.following) {
            return (<div>LOADING REPOS...</div>)
        }

        return (
            <div className="followers-page">
              <h2>{this.props.params.username}'s repositories</h2>
              <ul>
                  {this.state.following.map((follower) => <Repo stat={follower}/>)}
              </ul>
            </div>
        );
    }
};

export default Repos;
