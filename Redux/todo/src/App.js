import { Table, Row, Col, Form, Input, Button, Modal, TimePicker } from 'antd';
import "./App.css";
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import CallApi from './utils/CallApi';
import { formatCountdown } from 'antd/lib/statistic/utils';
import NumberFormat from 'react-number-format';
import Cleave from "cleave.js/react";
function App() {

    useEffect(() => {
        CallApi("users", "GET", null)
            .then(res => {
                setdataSource([...res.data])
            })

    }, [])
    const [dataSource, setdataSource] = useState([

    ])

    const [search, setsearch] = useState('')

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
         
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: "Thao tác",
            dataIndex: '',
            key: '',
            render: (item) => (
                <>
                    <Button onClick={() => handleEdit(item, "edit")}>Sửa</Button>
                    {"  "}<Button onClick={() => handleDelete(item.id)}>Xóa</Button>
                </>
            )
        }
    ];
    const handleDelete = (id) => {
        CallApi(`users/${id}`, "DELETE", null)
            .then(res => {
                const data = dataSource.filter(item => item.id !== id)
                setdataSource([...data])
            })
    }
    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const handleEdit = (data, type) => {
        (type = "edit" && OpenModal())
        console.log("data", data);
        setInput({
            id: data.id,
            name: data.name,
            username: data.username,
            email: data.email
        })
    }
    const [visible, setvisible] = useState(false)
    const OpenModal = () => {
        setvisible(!visible)
    }


    const hideModal = () => {
        setvisible(false)
        setInput({
            id: "",
            name: "",
            username: "",
            email: ""
        })
    }
    const [input, setInput] = useState({
        id: "",
        name: "",
        username: "",
        email: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }


    const findIndex = (data, id) => {
        let index = -1;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) return index = i
        }
        return index
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...input,
            name: input.name,
            email: input.email,
            username: input.username
        }

        console.log("data", data);
        if (data.id === "") {
            CallApi("users", "POST", data)
                .then(res => {
                    setdataSource([...dataSource, res.data])
                })
            hideModal();
            setInput({
                id: "",
                name: "",
                username: "",
                email: ""
            })
        } else {
            CallApi(`users/${data.id}`, "PUT", data)
                .then(res => {
                    const index = findIndex(dataSource, data.id);
                    dataSource[index] = res.data;
                    setdataSource([...dataSource])
                    // setdataSource([...dataSource, res.data])
                    console.log("res", res);
                })
            hideModal();
            setInput({
                id: "",
                name: "",
                username: "",
                email: ""
            })
        }

    }

    const [fields, setFields] = useState([])


    



    


    return (
        <div className="container">
            {/* <NumberFormat thousandSeparator={true}
                onValueChange={handleChangeValue}
            />
            <p>{mony.value}VND</p>


            <Cleave
                placeholder="VND"
                options={{
                    numeral: true,
                    numeralThousandsGroupStyle: "thousand"
                }}
                onChange={onDonationAmountChange}
                className="form-field"
            />
            <h3>{donationAmount} VND</h3> */}
            <Button style={{ margin: "20px" }} onClick={OpenModal}>Thêm mới</Button>
            <Row justify="center">
                <Col span={12}>
                    <Table
                        dataSource={dataSource}
                        pagination={{ defaultPageSize: 5 }}
                        columns={columns} />
                </Col>
            </Row>




            <Modal
                title="Thêm mới"
                visible={visible}
                onOk={hideModal}
                onCancel={hideModal}
                okText="Ok"
                cancelText="Trờ lại"
                footer={
                    [
                        <Button onClick={hideModal}>Trở về</Button>,
                        <Button onClick={handleSubmit}>{input.id !== "" ? "Cập nhật" : "Thêm mới"}</Button>

                    ]
                }
            >

                <Row justify="center">
                    <Col span={24}>
                        <Form
                            {...layout}
                            name="basic"
                            form={form}
                            fields={fields}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="name"
                                rules={[{ required: true, message: 'Please input your name!' }]}

                            >
                                <Input value={input && input.name}
                                    name="name"
                                    onChange={handleChange}

                                />
                            </Form.Item>
                            <Form.Item
                                label="Username"

                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input value={input && input.username} name="username" onChange={handleChange} />
                            </Form.Item>

                            <Form.Item
                                label="email"

                                rules={[{ required: true, message: 'Please input your email' }]}
                            >
                                <Input value={input && input.email} name="email" onChange={handleChange} />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>

{/* 

            <Row gutter={30}>
                <Col xs={24} sm={12} lg={6}>
                    <div className="box">
                        <div className="item" style={{ background: "red", height: "50px" }}>

                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <div className="box">
                        <div className="item" style={{ background: "red", height: "50px" }}>

                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <div className="box">
                        <div className="item" style={{ background: "red", height: "50px" }}>

                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <div className="box">
                        <div className="item" style={{ background: "red", height: "50px" }}>

                        </div>
                    </div>
                </Col>
            </Row> */}
        </div>



    )
}

export default App;
