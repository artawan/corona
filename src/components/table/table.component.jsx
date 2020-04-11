import React from 'react';

import {TableRow} from '../table-row/table-row.component';
import {SearchBox} from '../search-box/search-box.component';

import './table.style.css';

class Table extends React.Component {
    constructor() {
      super();
      this.state = {
        list: [],
        searchField: ''
      };
    }

    componentDidMount(){
        fetch('https://api.kawalcorona.com/')
        .then(response => response.json())
        .then(lists => this.setState({ list: lists }))
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    
    render() {
        const { list, searchField } = this.state;
        return(
        <div className='container'>
                <SearchBox placeholder="Search" handleChange={this.handleChange}/>
                <table className='table'>
                <thead>
                    <tr>
                    <td>Country Region</td>
                    <td>Confirmed</td>
                    <td>Deaths</td>
                    <td>Recovered</td>
                    <td>Active</td>
                    <td>Last Update</td>
                    </tr>
                </thead>
                <tbody>
                    {
                      list
                      .filter(
                        function( data, index ){
                          return data.attributes.Country_Region.toLowerCase().includes(searchField.toLowerCase())
                        }
                      )
                      .map(function(data, index){
                        return (<TableRow key={data.attributes.OBJECTID} date={ data.attributes.Last_Update } attributes={data.attributes} />)
                      })
                    }
                </tbody>
            </table>
        </div>
    )
    }

}

export default Table;