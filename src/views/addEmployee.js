import React, { Component } from 'react';
import { Container, Header, Button, Checkbox, Form, Grid } from 'semantic-ui-react';

export default class AddEmployee extends Component {
    render() {
        return (
            <div className="listEmployees">
                <Container>
                    <Grid>
                        <Grid.Row centered>
                            <Header as='h1'>
                                <Header.Content>
                                    Register Employee
                                </Header.Content>
                            </Header>
                        </Grid.Row>
                        <Grid.Row columns={2} centered>
                            <Grid.Column>
                                <Form>
                                    <Form.Field>
                                        <label>First Name</label>
                                        <input placeholder='First Name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Last Name</label>
                                        <input placeholder='Last Name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.TextArea label='Description' placeholder='Write some description about the new employee...' />
                                    </Form.Field>
                                    <Button type='submit'>Add Employee</Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Container>
            </div>
        );
    }
}