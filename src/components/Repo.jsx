import React from 'react';
import { Link } from 'react-router';

class Repo extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <li key={this.props.stat.id} className="follower__stat">
                <a href={this.props.stat.html_url} target="_blank">
                    <p className="follower__stat-login">{this.props.stat.name}</p>
                    <p>{this.props.stat.stargazers_count}</p>
                </a>
            </li>
        );
    }
};

export default Repo;
