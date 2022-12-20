import React from 'react';
import Scheduler, { Resource, View } from 'devextreme-react/scheduler';
import useData from './useData';

import { Data, docksData, typeData } from './data.js';

const currentDate = new Date(2022, 11, 11);
const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const typeGroups = ['typeId'];
const priorityGroups = ['dockId'];


function Home1() {

    const {data} = useData();



    
   
    return (
        <Scheduler
          timeZone="Europe/London"
          dataSource={data.jobs}
          defaultCurrentView="workWeek"
          showAllDayPanel={false}
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={7}
          endDayHour={23}
        >
          <View
            type="day"
          />
          <View
            type="week"
            groups={typeGroups}
            dateCellRender={renderDateCell}
          />
          <View
            type="workWeek"
            groups={priorityGroups}
            startDayHour={9}
            endDayHour={18}
            dateCellRender={renderDateCell}
          />
          <View
            type="month"
          />
          <Resource
            dataSource={docksData}
            fieldExpr="dockId"
            label="Dock"
            allowMultiple={false}
          />
          <Resource
            dataSource={typeData}
            fieldExpr="typeId"
            label="Type"
            allowMultiple={false}
          />
        </Scheduler>
      );
}



function renderDateCell(cellData) {
  return (
    <React.Fragment>
      <div className="name">{dayOfWeekNames[cellData.date.getDay()]}</div>
      <div className="number">{cellData.date.getDate()}</div>
    </React.Fragment>
  );
}

export default Home1
