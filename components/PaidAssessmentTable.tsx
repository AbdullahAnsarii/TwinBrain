import { Button, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FC } from 'react';
import { Table } from 'react-bootstrap';
import { paidAssessments } from '../data/paidAssessments';

const PaidAssessmentTable:FC = () => {
    return (
        <Table  striped bordered size='sm' responsive='md'>
            <thead className='text-center table-dark'>
                <tr>
                    <th>Assessment Type</th>
                    <th>Face to Face <br/>(Report Included)</th>
                    <th>Remote Audio or Video Call <br/>(Report Included)</th>
                </tr>
            </thead>
            <tbody className=''>
                {paidAssessments.map(assessment => (
                    <tr>
                        <td style={{width: '50%', padding: 20}}>{assessment.type}</td>
                        <td style={{width: '25%', textAlign: 'center', padding: 20}}><h4>&#163;{assessment.priceOnsite}</h4><Button shape='round' type='primary'>Book Now</Button></td>
                        <td style={{width: '25%', textAlign: 'center', padding: 20}}><h4>&#163;{assessment.priceRemote}</h4><Button shape='round' type='primary'>Book Now</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default PaidAssessmentTable;