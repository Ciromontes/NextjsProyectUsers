import React from 'react'

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage(){
  const users = await fetchUsers()
  return(
    <ul>
      {users.mapu(user =>(
        <li key={user.id}>
          <div>
            <h5>{users.id} {users.first_name} {user.last_name}</h5>
            <p>email:{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
  await fetchUsers()
  return(
    <div>HomePage</div>
  )

}
export default HomePage