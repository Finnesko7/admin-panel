import {useState} from 'react';
import {Cookies} from 'react-cookie';
import Head from 'next/head';
import Router from 'next/router';
import {
    Button, Form,
    FormGroup, Label,
    Input,
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';
import api from "../config/api";

const cookies = new Cookies();

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const sigin = async () => {
        const response = await api('/api/login', {
            login,
            password
        }, 'POST');
        const data = await response.json();
        cookies.set('token', data.token);

        if (data.token) {
            // Router.push('/home');
        }
    }

    return (
        <div>
            <Head>
                <title>Login Admin Access</title>
            </Head>
            <main>
                <div className="container">
                    <Row className="login-form align-items-center justify-content-sm-center">
                        <Col md="4">
                            <Card className="main-card">
                                <CardBody>
                                    <CardTitle>Login Admin Access</CardTitle>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail"
                                                   placeholder="example@mail.com"
                                                   value={login}
                                                   onChange={((e) => {
                                                       setLogin(e.target.value)
                                                   })}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword"
                                                   placeholder="Your password"
                                                   value={password}
                                                   onChange={((e) => {
                                                       setPassword(e.target.value)
                                                   })}
                                            />
                                        </FormGroup>

                                        <Button color="primary pull-right" className="mt-1"
                                                onClick={sigin}>Submit</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </main>
        </div>
    )
}

export default Login;
