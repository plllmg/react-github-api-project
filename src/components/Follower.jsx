import React from 'react';
import { Link } from 'react-router';

class Follower extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
    
        return (
            <li key={this.props.stat.login} className="follower__stat">
                <Link to={`/user/${this.props.stat.login}`}>
                    <img className="follower__stat-img" src={this.props.stat.avatar_url} alt=''/>
                    <p className="follower__stat-login">{this.props.stat.login}</p>
                </Link>
            </li>
        );
    }

    // render() {
    //     // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    //     if (!this.state.user) {
    //         return (<div className="user-page">LOADING...</div>);
    //     }
    //
    //     // If we get to this part of `render`, then the user is loaded
    //     const user = this.state.user;
    //
    //     // Gather up some number stats about the user, to be used in a map below
    //     const stats = [
    //         {
    //             name: 'Public Repos',
    //             value: user.public_repos,
    //             url: `/user/${this.props.params.username}/repos`
    //         },
    //         {
    //             name: 'Followers',
    //             value: user.followers,
    //             url: `/user/${this.props.params.username}/followers`
    //         },
    //         {
    //             name: 'Following',
    //             value: user.following,
    //             url: `/user/${this.props.params.username}/following`
    //         }
    //     ];
    //
    //     // Look in index.css for the styles that make this look like it does
    //     return (
    //         <div className="user-page">
    //             <div className="user-info">
    //                 <Link className="user-info__text" to={`/user/${user.login}`}>
    //                     <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
    //                     <h2 className="user-info__title">{user.login} ({user.name})</h2>
    //                     <p className="user-info__bio">{user.bio}</p>
    //                 </Link>
    //
    //                 <ul className="user-info__stats">
    //                     {stats.map(this.renderStat)}
    //                 </ul>
    //             </div>
    //             {this.props.children}
    //         </div>
    //     );
    // }
};

export default Follower;
