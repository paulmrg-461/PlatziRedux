import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Paul Realpe',
          email: 'paulmrg461@gmail.com',
          website: 'https://paulrealpe.com'
        },
        {
          name: 'Rafael Belalcázar',
          email: 'rafabelalkzar17@gmail.com',
          website: 'https://rafabelalcazar.com'
        },
      ]
    }
  }

  getRows = () => [
    <tr>
      <td>
        Paul Realpe
      </td>
      <td>
        paulmrg461@gmail.com
      </td>
      <td>
        https://paulrealpe.com
      </td>
    </tr>
  ];
  
  render() {
    return(
      <div className="margin">
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            { this.getRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;