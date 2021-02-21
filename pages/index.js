import React from 'react';
import Layout from '../components/Layout';
import DataTasks from '../components/drags/datatasks';
import { BtnAddColumn } from '../components/UI/btnaddcolumn';
import { PlusOutlined } from '@ant-design/icons';

export default function Home() {

  return (
    <Layout>
        <div className="content-max">
            <div className="inner-content-max">
                <h1 className="font s-26 w-regular c-info-important">Tasks</h1>
                <DataTasks/>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <BtnAddColumn><PlusOutlined /></BtnAddColumn>
                </div>
            </div>
        </div>
    </Layout>
  )
}
 