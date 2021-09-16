import React from 'react'

const renderPhrase = (number) => {
   if (!number) return 'Никто с тобой не тусанет'
   const a = number >= 2 && number >= 5 ? '' : 'а'
   return number === 1
      ? `${number} человек тусанет с тобой сегодня`
      : `${number} человек${a} тусанут с тобой сегодня`
}

const SearchStatus = ({length}) => {
   return (
      <h1 className="mb-4">
      <span className={`badge bg-${length ? 'primary' : 'danger'}`}>
        {renderPhrase(length)}
      </span>
      </h1>
   )
}

export default SearchStatus