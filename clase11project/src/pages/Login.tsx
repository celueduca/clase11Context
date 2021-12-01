import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd'
import users from '../json/users.json'
import AuthContext from '../context/AuthContext'
import { useHistory } from 'react-router'

const Login = () => {
    const [form] = Form.useForm();
    const { setUser } = useContext(AuthContext);
    const history = useHistory();

    const handleLogin = (values: any) => {
        let user;
        for (let index = 0; index < users.length - 1; index++) {
            if (values.email === users[index].email && values.password === users[index].password) {
                user = users[index];
                break;
            }
        }
        if (user) {
            setUser(user);
            redirect();
        }
    }
    const redirect = () => {
        history.push("/");
    }

    return (
        <div className="login" style={{ backgroundImage: "url(/assets/images/back.jpeg)" }}>
            <div className="login-content">
                <div className="login-back" />

                <div className="login-sub-content">
                    <div className="login-logo">
                    </div>
                    <div className="login-panel">

                        <Form
                            layout="vertical"
                            form={form}
                            onFinish={handleLogin}>

                            <h3 className="title">INICIAR SESIÓN</h3>

                            <div className="form-control">

                                <Form.Item
                                    name="email"
                                    id="email"
                                    label="Usuario:"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese el nombre!',
                                        }
                                    ]}
                                >
                                    <Input placeholder="example@example.com" />
                                </Form.Item>

                            </div>


                            <div className="form-control">

                                <Form.Item
                                    name="password"
                                    id="password"
                                    label="Contraseña:"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese la contraseña!',
                                        }
                                    ]}
                                >
                                    <Input.Password placeholder="Ingrese la contraseña." />
                                </Form.Item>
                            </div>

                            <div>
                                <Button htmlType="submit" className="form-action-login">Ingresar</Button>
                            </div>


                        </Form>

                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Login
