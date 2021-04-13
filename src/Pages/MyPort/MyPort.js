import { React, useState, useEffect } from 'react';
import './MyPort.scss';
import  {FaSearch}  from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from "./modals/SettingBackDrop.js"
import { MdInfoOutline } from "react-icons/md"
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Switch from "./components/Switch/Switch"
import Table from "./components/PortsTable/PortsTable"
import DataHolder from "./components/DataHolder/DataHolder"
export default function MyPort() {

  return (
    <div className="dashmain">
    <div className = "dash">
      <Switch/>
      <div className = "dashbody">
          <Table/>
          <DataHolder/>
      </div>
    </div>
    </div>
  )
}
