import {useState} from 'react';
import {Cookies} from 'react-cookie';
import Head from 'next/head';
import {
    Button, Form,
    FormGroup, Label,
    Input,
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

const cookies = new Cookies();

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const sigin = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                login,
                password
            })
        });
        const data = await response.json();
        cookies.set('token', data.token);
        console.log(data.token);
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
                                                   onChange={((e) => {
                                                       setLogin(e.target.value)
                                                   })}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword"
                                                   placeholder="Your password"
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
