import React from 'react'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { getProfessionsById, getProfessionsLoadingStatus } from '../../store/professions'

const Profession = ({ id }) => {
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const profession = useSelector(getProfessionsById(id));
    if (!isLoading) {
        return <p>{profession.name}</p>
    } else return "loading ...";
}

Profession.propTypes = {
    id: PropTypes.string
}

export default Profession
