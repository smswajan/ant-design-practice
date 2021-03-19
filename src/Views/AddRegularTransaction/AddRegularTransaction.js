import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,

} from 'antd';



const AddRegularTransaction = () => {
    const [upcoming, setUpcoming] = useState(false);
    const onUpcomingChanged =()=>{
        setUpcoming(!upcoming)
    }
    const [componentSize, setComponentSize] = useState("default");
    const onFormSubmitted = (data) => {
        data.upcoming = upcoming
        console.log(data);
    }
    const { Option } = Select;

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                size={componentSize}
                onFinish={onFormSubmitted}
            >
                <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="trxWith" label="TrxWith" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="type" label="Trx. Type" rules={[{ required: true }]}>
                    <Select>
                    <Option value="Expense">Expense </Option>
                        <Option value="Lend">Lend </Option>
                        <Option value="Borrow">Borrow </Option>
                    </Select>
                </Form.Item>

                <Form.Item name="note" label="Input" rules={[{
                    required: true
                }]}>
                    <Input />
                </Form.Item>
      
                <Switch checkedChildren="Upcoming" unCheckedChildren="Current" onChange={onUpcomingChanged} />

                <Form.Item label="&nbsp;">
                    <Button type="primary" htmlType="submit" >Button</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddRegularTransaction;