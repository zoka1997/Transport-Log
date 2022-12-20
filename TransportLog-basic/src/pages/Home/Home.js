 import {useEffect, useState} from 'react';
 import {Week, TimelineViews, TimelineMonth, Day, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, Agenda } from '@syncfusion/ej2-react-schedule';
 import useData from './useData';
 import './Home.css'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import {insertJob,deleteJob, updateJob} from './homeService';
import axios from 'axios';
import { Ajax } from '@syncfusion/ej2-base';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';





 const Home = () => {

   const {data} = useData();

   const customer = data.customers;
   const docks = data.docks;
   const statuses = data.statuses;
   const jobs = data.jobs;

   console.log()


const [jobData, setJobData] = useState([]);
 useEffect(()=>{
  axios.get("https://localhost:7034/api/Home/getJobData")
  .then((res)=>{
    setJobData(res.data)
  })
 },[])

 var dataForJob = jobData.map(v => ({
  Id: v.Id,
  Subject: v.Subject ,
  StartTime: v.StartDate,
  EndTime: v.EndDate,
  CustomerId: v.CustomerId,
  NoPallets: v.NoPallets,
  LoadNo:v.LoadNo,
  LoadType: v.LoadType,
  SupportStatusesId:v.SupportStatusesId ,
  DockId: v.DockId,
  }));

   const fieldsDocks = { value: 'Id', text: 'DockName' };
   const fieldsCustomer = { value: 'Id', text: 'FirstName'};
   const fieldsStatuses = { value: 'Id', text: 'Name' };

function onActionBegin(args){
  if(args.requestType === 'eventCreate') {
    const job = {
      CustomerId: args.addedRecords[0].CustomerId[0],
      SupportStatusesId: args.addedRecords[0].SupportStatusesId[0],
      DockId: args.addedRecords[0].DockId,
      EndDate : args.addedRecords[0].EndTime,
      StartDate: args.addedRecords[0].StartTime,
      NoPallets: parseInt(args.addedRecords[0].NoPallets),
      LoadNo: args.addedRecords[0].LoadNo,
      LoadType: args.addedRecords[0].LoadType,
      Subject:args.addedRecords[0].Subject
    }
    insertJob(job);
  }else if(args.requestType === 'eventChange'){
    const job = {
      Id:args.changedRecords[0].Id,
      CustomerId: args.changedRecords[0].CustomerId[0],
      SupportStatusesId: args.changedRecords[0].SupportStatusesId[0],
      DockId: args.changedRecords[0].DockId,
      EndDate : args.changedRecords[0].EndTime,
      StartDate: args.changedRecords[0].StartTime,
      NoPallets: parseInt(args.changedRecords[0].NoPallets),
      LoadNo: args.changedRecords[0].LoadNo,
      LoadType: args.changedRecords[0].LoadType,
      Subject:args.changedRecords[0].Subject
    }
    console.log(job, 'changed')
     updateJob(job)
  }else if(args.requestType === 'eventRemove'){
    deleteJob(args.deletedRecords[0].Id);
  }
}


const fieldsValidation = {
  subject: { name: 'Subject', validation: { required: true } },
  startTime: { name: 'StartTime', validation: { required: true } },
  endTime: { name: 'EndTime', validation: { required: true } },
  location: { name: 'LoadType', validation: { required: true } },
  DockId: { name: 'DockId', validation: { required: true } },
  CustomerId: { name: 'CustomerId', validation: { required: true } },
  SupportStatusesId: { name: 'SupportStatusesId', validation: { required: true } },
  description: { name: 'LoadNo', validation: { required: true } },
  NoPallets: { name: 'NoPallets', validation: { number: true, max: 5000 } },

};

console.log(fieldsValidation);

 function editorTemplate(props) {

       return (props !== undefined && Object.keys(props).length > 0 ? 
       <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>

          <tr><td className="e-textlabel">Subject</td><td colSpan={4}>
            <input id="Subject" className="e-field e-input ltype" type="text" name="Subject" style={{ width: '100%' }}/>
          </td></tr>
              <tr><td className="e-textlabel">Start Date</td><td colSpan={4}>
                
            <DateTimePickerComponent format='dd/MM/yyyy hh:mm a' id="StartTime" data-name="StartTime" className="e-field" value={new Date(props.startTime || props.StartTime)}></DateTimePickerComponent>
          </td></tr>

          <tr><td className="e-textlabel">End Date</td><td colSpan={4}>
            <DateTimePickerComponent format='dd/MM/yyyy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
          </td></tr>

          <tr><td className="e-textlabel">Dock</td><td colSpan={4}>
            <MultiSelectComponent className="e-field dock" placeholder='Choose owner' data-name="DockId" dataSource={docks} fields={fieldsDocks} onChange={e => console.log(e)}/>
          </td></tr>

          <tr><td className="e-textlabel">Customer</td><td colSpan={4}>
            <MultiSelectComponent className="e-field" placeholder='Choose Customer' data-name="CustomerId" dataSource={customer} fields={fieldsCustomer}  />
          </td></tr>

          <tr><td className="e-textlabel">Status</td><td colSpan={4}>
            <MultiSelectComponent className="e-field" placeholder='Choose Status' data-name="SupportStatusesId" dataSource={statuses} fields={fieldsStatuses}/>
          </td></tr>

          <tr><td className="e-textlabel">Load Type</td><td colSpan={4}>
            <input id="LoadType" className="e-field e-input ltype" type="text" name="LoadType" style={{ width: '100%' }}/>
          </td></tr>

          <tr><td className="e-textlabel">Load No.</td><td colSpan={4}>
            <input id="LoadNo" className="e-field e-input" type="text" name="LoadNo" style={{ width: '100%' }}/>
          </td></tr>
       
          <tr><td className="e-textlabel">Number of Pallets</td><td colSpan={4}>
            <input id="NoPallets" className="e-field e-input" type="number" name="NoPallets" style={{ width: '100%' }}/>
          </td></tr>
      
          </tbody></table> : <div></div>);
          
        }



  return(
    <ScheduleComponent width='100%' height='90vh' currentView='Week' selectedDate={new Date(2022, 11, 12)} group={{ resources: ['DockName'] }}  showQuickInfo={false} editorTemplate={editorTemplate.bind(this)} actionBegin={onActionBegin.bind(this)} 
    eventSettings={{dataSource:dataForJob, fields : fieldsValidation }}>
      <ViewsDirective>
          <ViewDirective option='Day'/>
          <ViewDirective option='Week'/>
          <ViewDirective option='Agenda'/>
      </ViewsDirective>
      <ResourcesDirective>
          <ResourceDirective field='DockId' title='Dock' name='DockName' allowMultiple={true} dataSource={docks} textField='DockName' idField='Id'> </ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Day, Week, TimelineViews, TimelineMonth,Agenda]}/>
    </ScheduleComponent>
  );  
}
export default Home;
