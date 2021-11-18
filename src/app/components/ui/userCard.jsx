import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import QualitiesList from './qualities/qualitiesList'

const UserCard = ({ user }) => {
   const { _id, name, profession, rate, completedMeetings, qualities } = user
   return (
      <div className="row gutters-sm">
         <div className="col-md-4 mb-3">
            <div className="card mb-3">
               <div className="card-body">
                  <Link
                     to={`/users/${_id}/edit`}
                     className="position-absolute top-0 end-0 btn btn-light btn-sm"
                  >
                     <i className="bi bi-gear"></i>
                  </Link>
                  <div className="d-flex flex-column align-items-center text-center position-relative">
                     <img
                        src="https://avatars.dicebear.com/api/avataaars/qweqwdas.svg"
                        className="rounded-circle"
                        width="150"
                     />
                     <div className="mt-3">
                        <h4>{name}</h4>
                        <p className="text-secondary mb-1">{profession.name}</p>
                        <div className="text-muted">
                           <i
                              className="bi bi-caret-down-fill text-primary"
                              role="button"
                           ></i>
                           <i
                              className="bi bi-caret-up text-secondary"
                              role="button"
                           ></i>
                           <span className="ms-2">{rate}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card mb-3">
               <div className="card-body d-flex flex-column justify-content-center text-center">
                  <h5 className="card-title">
                     <span>Qualities</span>
                  </h5>
                  <p className="card-text">
                     <QualitiesList qualities={qualities} />
                  </p>
               </div>
            </div>
            <div className="card mb-3">
               <div className="card-body d-flex flex-column justify-content-center text-center">
                  <h5 className="card-title">
                     <span>Completed meetings</span>
                  </h5>
                  <h1 className="display-1">{completedMeetings}</h1>
               </div>
            </div>
         </div>
         <div className="col-md-8">
            <div className="card mb-2">
               <div className="card-body">
                  <div>
                     <h2>New comment</h2>
                     <div className="mb-4">
                        <select className="form-select" name="userId" value="">
                           <option disabled value="" selected>
                              Выберите пользователя
                           </option>
                           <option>{name}</option>
                        </select>
                     </div>
                     <div className="mb-3">
                        <label
                           htmlFor="exampleFormControlTextarea1"
                           className="form-label"
                        >
                           Message
                        </label>
                        <textarea
                           className="form-control"
                           id="exampleFormControlTextarea1"
                           rows="3"
                        ></textarea>
                     </div>
                     <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">Опубликовать</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card mb-3">
               <div className="card-body">
                  <h2>Comments</h2>
                  <hr />
                  <div className="bg-light card-body mb-3">
                     <div className="row">
                        <div className="col">
                           <div className="d-flex flex-start">
                              <img
                                 src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
                                 className="rounded-circle shadow-1-strong me-3"
                                 alt="avatar"
                                 width="65"
                                 height="65"
                              />
                              <div className="flex-grow-1 flex-shrink-1">
                                 <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <p className="mb-1">
                                          Джон Дориан
                                          <span className="small">5 минут назад</span>
                                       </p>
                                       <button className="btn btn-sm text-primary d-flex align-items-center">
                                          <i className="bi bi-x-lg"></i>
                                       </button>
                                    </div>
                                    <p className="small mb-0">
                                       Lorem ipsum dolor
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

UserCard.propTypes = {
   user: PropTypes.object.isRequired
}

export default UserCard