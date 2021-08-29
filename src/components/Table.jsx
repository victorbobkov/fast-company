import React from 'react'

const Table = () => {
   return (
      <table className="table">
         <thead>
         <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"> </th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td>Джон Дориан</td>
            <td>
               <span className="badge bg-primary">Нудила</span>
               <span className="badge bg-dark">Неуверенный</span>
               <span className="badge bg-secondary">Странный</span>
            </td>
            <td>Доктор</td>
            <td>36</td>
            <td>2.5/5</td>
            <td>
               <button type="button" className="btn btn-danger">delete</button>
            </td>
         </tr>
         </tbody>
      </table>
   )
}

export default Table