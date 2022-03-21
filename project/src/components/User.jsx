import React, { useEffect, useState } from 'react'

function User() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(3);
    useEffect(() => {
        fetch(`http://localhost:8000/tasks?page=${page}&pageSize=${pageSize}`)
            .then((r) => r.json())
            .then((d) => setData(d.getAll))
            .catch((e) => console.log(e));
    }, [page]);
  
  return (
    <div>
        <button onClick={() => setPage(page + 1)}>NEXT</button>  
        <button onClick={() => setPage(page-1)}>PRE</button>  
        <table>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
            <th>SubTask</th>
          </tr>
        </thead>
        <tbody>
                  {          
            data.map((user) => {
              let x = "Done"
              if (user.status === true) {
                x = "Done";
              } else {
                x = "Pending"
              }
              return (
                <tr key={user.id}>
                  <td>{user.title}</td>
                  <td>{x}</td>
                  <td>{user.subTask}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>      
    </div>
  )
}
export default User