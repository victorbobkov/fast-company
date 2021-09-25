export const professions = {
   doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
   waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
   physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
   engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
   actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актёр" },
   cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
}

const fetchAll = () => new Promise((res) => {
   window.setTimeout(function () {
      res(professions)
   }, 2000)
})

export default {
   fetchAll
}