import React from 'react';

const UserCard = ({avatar, name, login, company, location, repositories, following, followers}) => (
	<div className="card">
        <img className="card-img-top" src={avatar} alt={login + '_avatar'}/>
	    <div className="card-body">
	        <div className="card-title">
		        <h1 className=" h2 mb-0">{name ? name : '-'}</h1>
		       	<h2 className="h3">{login}</h2>
	        </div>
	        <div className="mb-3 h5">
		        <p className="card-text">Company: <span> {company ? company : '-'} </span></p>
		        <p className="card-text"> Location: <span>{location ? location : '-'}</span></p>
	        </div>
	        <h4 className="h4">Statics</h4>
	        <p>Repositories: <span>{repositories}</span></p>
	        <p>Following: <span>{following}</span></p>
	        <p>Followers: <span>{followers}</span></p>
	    </div>
    </div>
)

export default UserCard;