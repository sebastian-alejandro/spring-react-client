import React, { Component } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class TableEmployees extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>
              John is an interesting boy but sometimes you don't really have enough room to describe
              everything you'd like
            </Table.Cell>
            <Table.Cell textAlign='center'>
              <Button.Group>
                <Button color='green'>Edit</Button>
                <Button.Or text='or' />
                <Button color='red'>Delete</Button>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>
              Jamie is a kind girl but sometimes you don't really have enough room to describe
              everything you'd like
            </Table.Cell>
            <Table.Cell textAlign='center'>
              <Button.Group>
                <Button color='green'>Edit</Button>
                <Button.Or text='or' />
                <Button color='red'>Delete</Button>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
              Jill is an alright girl but sometimes you don't really have enough room to describe
              everything you'd like
            </Table.Cell>
            <Table.Cell textAlign='center'>
              <Button.Group>
                <Button color='green'>Edit</Button>
                <Button.Or text='or' />
                <Button color='red'>Delete</Button>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Button floated='left' icon labelPosition='left' primary size='small' as={Link} to='/addEmployee'>
                <Icon name='plus' /> New Employee
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}