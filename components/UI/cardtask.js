import styled from '@emotion/styled';

export const CardTask = styled.div`
        padding: .5em;
        margin-bottom: 0.5em;
        background: #fff;
        border-radius: 5px;

        .card-task-header{
            margin-bottom: 1em;
        }

        .card-task-body{
            margin-bottom: 1em;
        }

        .card-task-footer{
            display: flex;
            justify-content: space-between;
            align-items:  center;
        }

        .tag-square{
            padding: .3em 1.5em;
            border-radius: 3px;
            font-size: 14px;
            color: #fff;
        }

        .tag-rounded{
            padding: .5em .8em;
            border-radius: 30px;
            font-size: 14px;
            color: #fff;
        }

        .list{
            &.horizontal{
              display: flex;
              flex-direction: row;
              align-items: center;
              li{
                display: flex;
                flex-direction: row;
                align-items: baseline;
                margin-right: 1em;
                height: 1.5em;
                span{
                  margin-right: .3em;
                }
              }
              li:last-of-type{
                margin-right: 0;
              }
            }
        }

        &:hover{
          cursor: pointer;
          box-shadow: -1px 3px 10px 0px #00000012;
        }
`;