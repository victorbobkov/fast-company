import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({onSort, selectedSort, columns}) => {
   const handleSort = (item) => {
      if (selectedSort.path === item) {
         onSort({
            ...selectedSort,
            order: selectedSort.order === 'asc' ? 'desc' : 'asc'
         })
      } else {
         onSort({path: item, order: 'asc'})
      }
   }

   const renderColumnArrow = (column) => {
      if (columns[column].path === selectedSort.path) {
         return selectedSort.order === "asc"
            ? <i className="bi bi-caret-up-fill"></i>
            : <i className="bi bi-caret-down-fill"></i>
      }
      return null
   }

   return (
      <thead>
         <tr>
            {Object.keys(columns).map((column) => (
               <th
                  key={column}
                  onClick={
                     columns[column].path
                        ? () => handleSort(columns[column].path)
                        : undefined
                  }
                  {...{role: columns[column].path && 'button'}}
                  scope='col'
               >
                  {columns[column].name}
                  {renderColumnArrow(column)}
               </th>
            ))}
         </tr>
      </thead>
   )
}

TableHeader.propTypes = {
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired,
   columns: PropTypes.object.isRequired
}

export default TableHeader