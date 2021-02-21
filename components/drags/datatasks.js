import React, { useState } from "react";

import data from '../../components/data.json';

import DragItem from "./drag-item";
import DropItem from "./drop-item";

// styles
import { Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import {BtnAddTask} from '../UI/btnaddtask'





const DataTasks = () =>  {

  // console.log(data)


  const [todoValues, setValue] = useState(data);
  return (
      <div>
      <Row gutter={16}>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <div className="container-task container-task-backlog">
              <div className="header gradient_1">
              </div>
              <div className="body">
                <DropItem
                  heading="Backlog"
                  onDrop={id => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "backlog";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map(key => ({ id: key, ...todoValues[key] }))
                    .filter(todo => todo.state === "backlog")
                    .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
                </DropItem>
              </div>
              <div className="footer">
                <BtnAddTask>Add task<PlusCircleOutlined /></BtnAddTask>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <div className="container-task container-task-backlog">
              <div className="header gradient_2">
              </div>
              <div className="body">
                <DropItem
                  heading="in Progress"
                  onDrop={id => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "progress";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map(key => ({ id: key, ...todoValues[key] }))
                    .filter(todo => todo.state === "progress")
                    .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
                </DropItem>
              </div>
              <div className="footer">
                <BtnAddTask>Add task<PlusCircleOutlined /></BtnAddTask>
              </div>
              </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <div className="container-task container-task-backlog">
              <div className="header gradient_3">
              </div>
              <div className="body">
              <DropItem
                  heading="Review"
                  onDrop={id => {
                    const currentTodo = { ...todoValues[id] };
                    currentTodo.state = "review";
                    setValue({ ...todoValues, ...{ [id]: currentTodo } });
                  }}
                >
                  {Object.keys(todoValues)
                    .map(key => ({ id: key, ...todoValues[key] }))
                    .filter(todo => todo.state === "review")
                    .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
                </DropItem>
              </div>
              <div className="footer">
                <BtnAddTask>Add task<PlusCircleOutlined /></BtnAddTask>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={24} xs={24}>
            <div className="container-task container-task-backlog">
              <div className="header gradient_4">
              </div>
              <div className="body">
              <DropItem
                heading="Complete"
                onDrop={id => {
                  const currentTodo = { ...todoValues[id] };
                  currentTodo.state = "complete";
                  setValue({ ...todoValues, ...{ [id]: currentTodo } });
                }}
              >
                {Object.keys(todoValues)
                  .map(key => ({ id: key, ...todoValues[key] }))
                  .filter(todo => todo.state === "complete")
                  .map(todo => <DragItem id={todo.id} data={todo} key={todo.id} />)}
              </DropItem>
              </div>
              <div className="footer">
                <BtnAddTask>Add task<PlusCircleOutlined /></BtnAddTask>
              </div>
            </div>
          </Col>
      </Row>
        
        

    
    </div>
  );
}

export default DataTasks;