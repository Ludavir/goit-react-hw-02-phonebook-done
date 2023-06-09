import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Filter.css';

const Filter = ({ onFilter }) => {
return (
    <label className="label">
    <span className="span">Find contacts by name</span>
    <input
        className="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onFilter}
    />
    </label>
);
};
export default Filter;
Filter.propTypes = { onFilter: PropTypes.func };