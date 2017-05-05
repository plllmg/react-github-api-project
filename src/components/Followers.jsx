import React from 'react';
import { browserHistory as history } from 'react-router';
import User from './User'
import Follower from './Follower'
var TOKEN = '7c888b8a3d5b73498b72385e9bd364044e58d563'

class Followers extends React.Component {

    constructor(props){
      super(props)
      this.state = {}
    }

    componentDidMount() {

        fetch(`https://api.github.com/users/${this.props.params.username}/followers?access_token=${TOKEN}`)
        .then(response => response.json())
        .then(
            followers => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    followers: followers
                });
            }
        );
    }
    render() {
        if (!this.state.followers) {
            return (<div>LOADING FOLLOWERS...</div>)
        }

        return (
            <div className="followers-page">
              <h2>Followers of {this.props.params.username}</h2>
              <ul>
                  {this.state.followers.map((follower) => <Follower stat={follower}/>)}
              </ul>
            </div>
        );
    }
};

export default Followers;
