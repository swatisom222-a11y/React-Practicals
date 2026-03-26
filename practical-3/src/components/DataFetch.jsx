import React from "react";
import useFetch from "../hooks/useFetch";

function DataFetch() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return  (
  <>
      <h2>User List</h2>
      {data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  );
}

export default DataFetch;
