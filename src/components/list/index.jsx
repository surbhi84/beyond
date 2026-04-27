import React from "react";

function List({ users }) {
    return (
        <>{users.length > 0 ?

            users.map((user) => (
                <p key={user.id}>Name: {user.name},  Status: {user.status}</p>
            ))
            : <p>No results found</p>}
        </>
    );
}

export default List;