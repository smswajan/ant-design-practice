import { Table } from 'antd';
import React from 'react';


const dataSource = [
    {
        key: 1,
        date: "34/2/4",
        trxWith: "Swajan",
        amount: 100,
        type: "Expense",
        note: "This is note",
        upcoming: false
    },
    {
        key: 2,
        date: "34/2/4",
        trxWith: "Swajan",
        amount: 100,
        type: "Expense",
        note: "This is note",
        upcoming: false
    }
]
const columns = [
    {
        title: "Date",
        dataIndex: "date",
        key: "date"
    },
    {
        title: "Trx. With",
        dataIndex: "trxWith",
        key: "trxWith"
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount"
    },
    {
        title: "Type",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "Note",
        dataIndex: "note",
        key: "note"
    },
   
]
const AllTransactions = () => {
    return (
        <>
<Table dataSource={dataSource} columns={columns}/>
        </>
    );
};

export default AllTransactions;