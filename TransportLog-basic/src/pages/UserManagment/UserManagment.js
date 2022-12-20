import React, {useState} from 'react';
import "./UserManagment.css"
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { states } from '../dataStates';
import { insertUserManagement, updateUserManagement, deleteUserManagement } from './UserManagementService'
import Useusermanagementdata from './useUserManagementData';

const notesEditorOptions = { height: 100 };

const Usermanagment = () => {

  const [checkBoxValue, setCheckBoxValue] = useState(false);
  
  const {userManagement} = Useusermanagementdata();
  
  console.log(userManagement ,"userManagement")

function customizeItem(item){
  if (item.dataField === "FirstName" || item.dataField === "LastName" || item.dataField === "Country" || item.dataField === "City" ) {
    item.validationRules = [{
        type: "required",
        message: "The value is required"
    }]
}else if(item.dataField === "Phone"){
  item.validationRules = [{
    type: "required",
    message: "Phone number is required!"
}]
}else if(item.dataField === "Address"){
  item.validationRules = [{
    type: "required",
    message: "City is required!"
}]
}
}

function handleAddUserManagement(state)
{
  console.log('state')
  console.log(state)
  if(state.changes.length === 0){
    alert("You must change value of other field")
}else{
  
  if(state.changes[0].type === "insert")
  {
    const tmp = {...state.changes[0].data, IsActive:checkBoxValue}
    insertUserManagement(tmp)
  }else if(state.changes[0].type === "update"){
    const obj = {...state.changes[0].data, IsActive : checkBoxValue}
    console.log('stateedit')
    console.log(obj)
    updateUserManagement(obj);
  }else if(state.changes[0].type === "remove")
  {
    deleteUserManagement(state.changes[0].key);
    console.log('stateDelete')
    console.log(state)
  }
}
 
 
}
  return (
    <>
      <h2 className='text-center mt-5'>UserManagment List</h2>
      <div id="data-grid-demo" className='data-grid-demo'>
   

        <DataGrid
          dataSource={userManagement}
          keyExpr="Id"
          showBorders={true}
          onSaved={handleAddUserManagement}
        >
          <Paging enabled={false} />

          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            >
            <Popup title="Create New Customer" showTitle={true} width={700} height={525}  />
            
            <Form customizeItem={customizeItem}>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Phone" /> 
                <Item dataField="Role" /> 
                <Item itemType="group" colCount={2} colSpan={2}>
                <CheckBox
                text="IsActive"
                value={checkBoxValue}
                onValueChange={()=>setCheckBoxValue(prev=>!prev)}
            />
            </Item>
              </Item>
              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="Country" />
                <Item dataField="City" />
                <Item dataField="Address" />
              </Item>
            </Form>
          </Editing>
          
          <Column dataField="Id" caption="ID" width={270} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="Address" />
          <Column dataField="Country" width={125}>
          <Lookup
             dataSource={states} 
             valueExpr="Name" displayExpr="Name" />
          </Column>
          <Column dataField="City" />
          <Column dataField="Phone" />
          <Column dataField="Role" />
          <Column dataField="IsActive" />
         
        </DataGrid>
      </div>
      </>
  );
}

export default Usermanagment;