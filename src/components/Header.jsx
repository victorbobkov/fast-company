import React from 'react'

const Header = () => {
   const titles = [
      'Имя',
      'Качества',
      'Профессия',
      'Встретился, раз',
      'Оценка',
      'Избранное',
      '', 
   ]

   const header = titles.map((title, index) => (
      <th key={titles.length - index} scope="col">
         {title}
      </th>
   ))

   return (
      <>
         {header}
      </>
   )
}

export default Header