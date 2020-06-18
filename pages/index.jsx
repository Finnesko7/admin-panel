import Head from 'next/head'
import {
    Button, Form,
    FormGroup, Label,
    Input, FormText,
    Row, Col,
    Card, CardBody,
    CardTitle,
} from 'reactstrap';

const Login = () => (
    <div>
        <Head>
            <title>Login Admin Access</title>
        </Head>
        <main>
            <Col md="3">
                <Card className="main-card">
                    <CardBody>
                        <CardTitle>Controls Types</CardTitle>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail"
                                       placeholder="with a placeholder"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword"
                                       placeholder="password placeholder"/>
                            </FormGroup>

                            <Button color="primary" className="mt-1">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </main>
    </div>
)

export default Login;
