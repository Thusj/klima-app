import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="By.."/>
        <input type="text" name="country" placeholder="Land.."/>
        <button>Søk</button>
    </form>
);

export default Form;