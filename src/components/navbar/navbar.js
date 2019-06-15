import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class extends Component {

  render() {
    return (
      <Menu>
        <Dropdown item text='Employees'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/listEmployees'>See All</Dropdown.Item>
            <Dropdown.Item as={Link} to='/addEmployee'>New Employee</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text='Departments'>
          <Dropdown.Menu>
            <Dropdown.Item>See All</Dropdown.Item>
            <Dropdown.Item>New Department</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}