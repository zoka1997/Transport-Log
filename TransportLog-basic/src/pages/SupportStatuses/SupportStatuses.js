import React from 'react';
import "./SupportStatuses.css"
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Form,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { insertSupportStatuses, updateSupportStatuses, deleteSupportStatuses } from "./SupportStatusesService";
import Usesupportstatusesdata from './useSupportStatusesData';

const notesEditorOptions = { height: 100 };

const Supportstatuses = () => {
  const {supportStatuses} = Usesupportstatusesdata();


  function customizeItem(item) {
    if (item.dataField === "Name") {
      item.validationRules = [{
        type: "required",
        message: "The value is required"
      }]
    } else if (item.dataField === "Name") {
      item.validationRules = [{
        type: "required",
        message: "Name is required!"
      }]
    }
  }


  function handleAddSupportStatuses(state) {
    console.log('state')
    console.log(state)
    if (state.changes.length === 0) {
      alert("You must change value of other field")
    } else {

      if (state.changes[0].type === "insert") {
        if(state.changes[0].data.Description === undefined){
          const tmp = {...state.changes[0].data,Description:""}
          insertSupportStatuses(tmp)
        }else{
          const tmp = {...state.changes[0].data}
          insertSupportStatuses(tmp)
        }
      } else if (state.changes[0].type === "update") {
        const obj = { ...state.changes[0].data }
        console.log('stateedit')
        console.log(obj)
        updateSupportStatuses(obj);
      } else if (state.changes[0].type === "remove") {
        deleteSupportStatuses(state.changes[0].key);
        console.log('stateDelete')
        console.log(state)
      }
    }

  }
  return (
    <>
      <h2 className='text-center mt-5'>Support Statuses List</h2>
      <div id="data-grid-demo" className='data-grid-demo'>
        <DataGrid
          dataSource={supportStatuses}
          keyExpr="Id"
          showBorders={true}
          onSaved={handleAddSupportStatuses}
        >
          <Paging enabled={false} />

          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup title="Create New Support Status" showTitle={true} width={700} height={525} />
            <Form customizeItem={customizeItem}>
              <Item itemType="group" colCount={1} colSpan={1}>
                <Item dataField="Name" />
                <Item dataField="Description" />
              </Item>
            </Form>
          </Editing>

          <Column dataField="Id" caption="Id" width={300} />
          <Column dataField="Name" width={500} />
          <Column dataField="Description" />
        </DataGrid>
      </div>
    </>
  );
}

export default Supportstatuses;