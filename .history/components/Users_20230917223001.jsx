import Link from "next/link";

function Users({users}){
    return(
        <ul className="font-bold text-white mt-2">
        {users.map((user) =>(
          <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-blue-900 mb-2 p-4 rounded-md flex justify-between items-center transition-colors duration-500 hover:bg-blue-700">
            <div>
              <h5 className="text-xl">{user.id} {user.first_name} {user.last_name}</h5>
              <p className="text-gray-200">email: {user.email}</p>          
            </div>   
            <img src={user.avatar} className="rounded-full w-20" />       
          </li>
          </Link>
        ))}
      </ul>
    );
}

export default Users;
