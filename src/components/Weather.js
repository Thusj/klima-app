import React from 'react';

const Weather = props => (
    <div>
        { props.city && props.country && <p>Sted: { props.city }, {props.country }</p> }
        { props.temperature && <p>Temperatur: { props.temperature }</p>}
        { props.humidity && <p>Luftfuktighet: { props.humidity }</p>}
        { props.description && <p>Beskrivelse: { props.description }</p>}
        { props.error && <p> { props.error }</p>}
    </div>
)

export default Weather;