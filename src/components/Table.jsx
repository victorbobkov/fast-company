import React, { useState } from 'react'
import API from '../api'

const Table = () => {

   const [users, setUsers] = useState(API.users.fetchAll())
   const handleDelete = (userId) => {
      setUsers((state) => {
         return state.filter(({ _id }) => _id !== userId)
      })
   }

   const renderPhrase = (number) => {
      if (!number) return 'Никто с тобой не тусанет'
      const a = number >= 2 && number >= 5 ? '' : 'а'
      return number === 1 ? `${number} человек тусанет с тобой сегодня` : `${number} человек${a} тусанут с тобой сегодня`
   }

   const user = users.map(elem => {
      return (
         <tr key={elem._id}>
            <td>{elem.name}</td>
            <td>
               {elem.qualities.map(({ _id, name, color }) => (
                  <span key={_id} className={`badge bg-${color} me-2`}>
                { name }
              </span>
               ))}
            </td>
            <td>{elem.profession.name}</td>
            <td>{elem.completedMeetings}</td>
            <td>{elem.rate}/5</td>
            <td>
               <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(elem._id)}
               >
                  Удалить
               </button>
            </td>
         </tr>
      )
   })

   return (
      <div className="wrapper">
         <h1 className="mb-4">
               <span className={`badge ${users.length ? 'bg-primary' : 'bg-danger'}`}>
                  {renderPhrase(users.length)}
               </span>
         </h1>
         <table className="table">

            <thead>
            <tr>
               <th scope="col">Имя</th>
               <th scope="col">Качества</th>
               <th scope="col">Профессия</th>
               <th scope="col">Встретился, раз</th>
               <th scope="col">Оценка</th>
               <th scope="col"/>
            </tr>
            </thead>
            <tbody>
            { user }
            </tbody>
         </table>
      </div>
   )
}

export default Table