import React, { forwardRef } from "react";
import { CardTask } from '../../UI/cardtask';
import {
  UserOutlined,
  PaperClipOutlined,
  CommentOutlined 
} from '@ant-design/icons';



export default forwardRef(({ data, classValue }, ref) => {
  return (
    <div className={`item ${classValue}`} ref={ref}>
      <CardTask>
        <div className="card-task-header">
          <span 
            className="tag-square" 
            style={{background:`linear-gradient${data.tag}`}}
          >
            Priority
          </span>
        </div>
        <div className="card-task-body">
          <p className="font s-14 w-regular c-info-important">{data.title}</p>
        </div>
        <div className="card-task-footer">
            <ul className="list horizontal">
              <li>
                <CommentOutlined className="font-icon s-md c-light-marine" />
                <p className="font s-14 w-regular c-info-light-marine">{data.comments}</p>
              </li>
              <li>
                <PaperClipOutlined className="font-icon s-md c-light-marine"  />
                <p className="font s-14 w-regular c-info-light-marine">{data.files}</p>
              </li>
            </ul>
          <span
            className="tag-rounded" 
            style={{background:`linear-gradient${data.tag}`}}
          >
            <UserOutlined />
          </span>
        </div>
      </CardTask>
    </div>
  );
});