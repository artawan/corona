import React from 'react';
import Moment from 'react-moment';

import "./table-row.styles.css"

export const TableRow = props => {
    const active = props.attributes.Confirmed - props.attributes.Deaths - props.attributes.Recovered;

    return <>
        <tr className="row-list">
        <td> {props.attributes.Country_Region} </td>
        <td title={props.attributes.Country_Region+": Confirmed "+ props.attributes.Confirmed }>
            {props.attributes.Confirmed}
        </td>
        <td title={props.attributes.Country_Region+": Deaths "+ props.attributes.Deaths}>
            {props.attributes.Deaths}
        </td>
        <td title={props.attributes.Country_Region+": Recovered "+ props.attributes.Recovered }>
            {props.attributes.Recovered}
        </td>
        <td title={props.attributes.Country_Region+": Active "+ active }>
            { active }
        </td>
        <td>
            <span className="durations"><Moment date={ props.date } fromNow withTitle titleFormat="DD MMMM YYYY HH:mm"/></span>
        </td>
        </tr>
    </>
};