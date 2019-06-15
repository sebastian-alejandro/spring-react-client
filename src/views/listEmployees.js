import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Table from '../components/table/table';

export default class listEmployees extends Component {
    render() {
        return (
            <div className="listEmployees">
                <Container>
                    <Header as='h1'>
                        <Header.Content>
                            List of Employees
                    </Header.Content>
                    </Header>
                    <Table></Table>
                </Container>
            </div>
        );
    }
}