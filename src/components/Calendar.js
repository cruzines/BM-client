import React from 'react'
import { Calendar, Badge, Typography } from 'antd';
import '../Calendar.css'
import { Link } from "react-router-dom";


function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'success', content: <Link to='/closedauctions'>'The most wanted amateur collection of our days 2020/2021'</Link> } ,
        ];
        break;
      case 18:
        listData = [
          { type: 'success', content: 'Private sales of Manish art' },
        ];
        break;
        case 17:
        listData = [
          { type: 'warning', content: 'Last day of auction - Private Collection' },
        ];
        break;
        case 19:
        listData = [
          { type: 'warning', content: 'Assorted Lot Auction' },
        ];
        break;
      case 22:
        listData = [
          { type: 'error', content: 'The Gauguin Collection - Auction cancelled at the request of the seller' },
        ];
        break;
      default: 
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  
  

function CalendarOutside() {
    return (
        <div>
            <div className="site-calendar-customize-header-wrapper">
            <Typography.Title level={8}>Future and Past auctions</Typography.Title>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}  />
            </div>
        </div>
    )
}

export default CalendarOutside
