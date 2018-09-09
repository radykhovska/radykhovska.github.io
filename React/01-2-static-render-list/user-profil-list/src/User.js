import React from 'react';

const AdminBage = ({text}) => (
	<span className="badge badge-info">{text}</span>
);

const User = ({avatar, login, admin, link, itemClass}) => (
	<div className={itemClass}>
		<div className="d-flex flex-wrap">
			<img className="mr-3" src={avatar} alt={login} style={{width:'60px', height: '60px'}}/>
			<div className="d-flex flex-column justify-content-between align-items-start">
				<h5>
					{login}&nbsp;
					{admin ? <AdminBage text="admin"/> : ''}
				</h5>
				<a href={link}>{link}</a>
			</div>
		</div>
	</div>
);

export default User;