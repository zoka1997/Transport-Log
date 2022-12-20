import React, {useState} from 'react';
import "./Docks.css"
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Form,
  
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import useDocksData from './useDocksData';
import {insertDocks,updateDocks,deleteDocks} from './docksService';

const notesEditorOptions = { height: 100 };

const Docks = () => {

  
  const {docks} = useDocksData();
  

  function customizeItem(item){
    if (item.dataField === "DockName") {
      item.validationRules = [{
          type: "required",
          message: "The value is required"
      }]
    }
  }



function handleAddDocks(state)
{
  console.log('state')
  console.log(state)
  if(state.changes.length === 0){
    alert("You must change value of other field")
}else{
  
  if(state.changes[0].type === "insert")
  {
    insertDocks(state.changes[0].data);

  }else if(state.changes[0].type === "update"){
    updateDocks(state.changes[0].data)
  }else if(state.changes[0].type === "remove")
  {
   deleteDocks(state.changes[0].key)
  }
}
 
}

    return (
      <>
      <h2 className='text-center mt-5'>Customer List</h2>
      <div id="data-grid-demo" className='data-grid-demo'>
   

        <DataGrid
          dataSource={docks}
          keyExpr="Id"
          showBorders={true}
          onSaved={handleAddDocks}
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
                <Item dataField="DockName" />
              </Item>
            
            </Form>
          </Editing>
          
          <Column dataField="Id" caption="ID" width={270} />
          <Column dataField="DockName" />
 
        </DataGrid>
      </div>
      </>
    );
}

export default Docks;


