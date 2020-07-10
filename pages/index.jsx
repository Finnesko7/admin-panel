import {useRef} from 'react';
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
    const Login = useRef('');
    const Password = useRef('')

    const sigin = async () => {
        const response = await api('/api/login', {
         login: Login.current.value,
         password: Password.current.value
        }, 'POST');
        const data = await response.json();
        console.log("Your token:", data.token )
        cookies.set('admin-atlanta', data.token);

        if (data.token) {
            Router.push('/home');
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
                                                   innerRef={Login}
                                                   onKeyPress={(e) => {
                                                       if (e.key === 'Enter') sigin()
                                                   }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword"
                                                   placeholder="Your password"
                                                   innerRef={Password}
                                                   onKeyPress={(e) => {
                                                       if (e.key === 'Enter') sigin()
                                                   }}
                                            />
                                        </FormGroup>

                                        <Button color="primary pull-right"
                                                onClick={sigin}>Sign in</Button>
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
