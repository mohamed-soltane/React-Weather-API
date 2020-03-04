import React, { Component } from 'react';
const Weather = (props) => {

        return (
            <div>
               {
                   props.tempreature && <p>tempreature : {props.tempreature}</p>
               }
               {
                   props.city && <p>City : {props.city}</p>
               }
               {
                   props.country && <p>country : {props.country}</p>
               }
               {
                   props.humidity && <p>humidity : {props.humidity}</p>
               }
               {
                   props.description && <p>description : {props.description}</p>
               }
               {
                   props.error && <p>error : {props.error}</p>
               }
            </div>
        )
    
}
export default Weather;