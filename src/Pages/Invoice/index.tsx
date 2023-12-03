import React from 'react';
import { Col, Row } from 'antd';
import InvoiceForm from './InvoiceForm';
import './index.css'
const Invoice: React.FC = () => {
    return (
        <>
            <Row className='row-invoice'>
                <Col className='col-invoice'>
                    <InvoiceForm />
                </Col>
            </Row>
        </>
    );
};

export default Invoice;
