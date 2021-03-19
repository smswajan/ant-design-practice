import {   Row,  Col, Space } from 'antd';


import AddRegularTransaction from './Views/AddRegularTransaction/AddRegularTransaction';

import "../node_modules/antd/dist/antd.less"
import "../node_modules/antd//lib/style/themes/default.less"

import "./styles/default-colors.less"
import './App.less';
import AllTransactions from './Views/AllTransactions/AllTransactions';



const App = () => (
  <>
  <div className="container">
  <Row>
    <Col span={24}>
  {/* <AddRegularTransaction/> */}
  <AllTransactions/>
  </Col>
  </Row>
  </div>
  </>
);

export default App;