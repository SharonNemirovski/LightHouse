import { React, useState, useEffect } from 'react';
import './MyPort.scss';
import { PortsData } from '../../components/Switch/SwitchData';
import RJgreen from '../../assests/Ports/RJgreen.png';
import RJred from '../../assests/Ports/RJred.png';
import RJgreen180 from '../../assests/Ports/RJgreen180.png';
import RJred180 from '../../assests/Ports/RJred180.png';
import RJGrey from '../../assests/Ports/RJGrey.png';
import RJGrey180 from '../../assests/Ports/RJGrey180.png';
import Swords from '../../assests/Ports/Swords.png';
import Swords180 from '../../assests/Ports/Swords180.png';
import {MdRefresh , MdInfoOutline} from "react-icons/md"
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import  {FaSearch}  from "react-icons/fa";

export default function MyPort() {
  const [PortData, SetPortData] = useState({
    vlan: '',
    status: '',
    portName: '',
    MAC: '',
    vlanSEG: '',
  });
  const [SwitchData, SetSwitchData] = useState({
    SwitchName: PortsData[0].switchName,
    Version: PortsData[0].version,
    POEsupport: PortsData[0].PoeSupport,
  });
  const [VlanSegment , setVlanSegment] = useState("Vlan לא נבחר")
  const [Vlanname , setVlanname] = useState("Vlan לא נבחר")
  const [PortsRange , setPortRange ] = useState([1,2]);
  const [viewPort, SetView] = useState(false);
  const OpenMyPort = (port) => {
    SetPortData({
      vlan: port.vlan,
      status: port.status,
      portName: port.name,
      MAC: port.MAC,
      vlanSEG: port.vlanSEG,
    });
    SetView(true);
  };
  const ViewPortWhenSlide = (Value) => {
    //remember to change the Fa0/? in match to the switch ports names
    return `Fa0/${Value}` 
  }
  const HandlePortRange = (event , Range) =>{
    setPortRange(Range)
  }
  const handleVlanSelect = (event) =>{
    const ChosenVlan = PortsData[2].filter((vlanOption)=>{return vlanOption.vlan === event.target.value});
    setVlanname(ChosenVlan[0].vlan);
    setVlanSegment(ChosenVlan[0].segment);
  }
  function getPortStatus(i, q) {
    if ((q + 1) % 2 !== 0) {
      switch (i.status) {
        case 'good':
          return RJgreen180;
        case 'bad':
          return RJred180;
        case 'swords':
          return Swords180;
        default:
          return RJGrey180;
      }
    } else {
      switch (i.status) {
        case 'good':
          return RJgreen;
        case 'bad':
          return RJred;
        case 'swords':
          return Swords;
        default:
          return RJGrey;
      }
    }
  }

  return (
    <div>
      <div className="Main">
        <div className="header">
          <div className="search">
          <div className="box">
              <div className="click" for="check"><FaSearch/></div>
              <input maxLength = {15} className = "IPinput" type="text" placeholder="..של המתג IP הכנס כתובת"></input>
          </div>
          </div>
        </div>
        <div className = "fullDashContainer">
        <div className="Switch">
          <div className="wrapper">
            <ul>
              {PortsData[1].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      (index + 1) % 8 === 0 || (index + 2) % 8 === 0
                        ? 'pic'
                        : ''
                    }
                  >
                    <div className="portsName">
                      <div
                        id={
                          (index + 1) % 2 !== 0
                            ? 'descriptionTRUE'
                            : 'descriptionFALSE'
                        }
                      >
                        {index + 1}
                      </div>
                      <div className="PortStatus">
                        <img
                          src={getPortStatus(item, index)}
                          alt=""
                          onClick={() => OpenMyPort(item)}
                        ></img>
                      </div>
                      <div
                        id={
                          (index + 1) % 2 !== 0
                            ? 'descriptionFALSE'
                            : 'descriptionTRUE'
                        }
                      >
                        {index + 1}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {viewPort && (
          <div className="dataHolder">
              <div className="portTable">
                <div className="portArt">           
                    <h3>Port Name</h3>            
                  <hr></hr>            
                    <h3>Port Status</h3>             
                  <hr></hr>               
                    <h3>Vlan</h3>                 
                  <hr></hr>                 
                    <h3>Vlan Prefix</h3>                
                  <hr></hr>
                    <h3>MAC Address</h3>
                  <hr></hr>
                  <div className = "IconHolder">
                   <MdInfoOutline className = "Icon" onClick = {()=>{console.log("info");}}/>
                  </div>
                </div>
                <div className="portData">
                    <h3>{PortData.portName ? PortData.portName : '-'}</h3>
                  <hr></hr>
                    <h3>{PortData.status ? PortData.status : '-'}</h3>
                  <hr></hr>
                    <h3>{PortData.vlan ? PortData.vlan : '-'}</h3>
                  <hr></hr>
                    <h3>{PortData.vlanSEG ? PortData.vlanSEG : '-'}</h3>
                  <hr></hr>
                    <h3>{PortData.MAC ? PortData.MAC : '-'}</h3>
                    <hr></hr>
                    <div className = "IconHolder">
                   <MdRefresh className = "Icon" onClick = {()=>{console.log("refresh");}}/>
                  </div>
                </div>
              </div>
            <div className="mySwitch">
              <div className = "SwitchDataContainer">
              <div className = "SwitchDataTable"> 
                    <span>Name</span>
              <hr></hr>
                    <span>Version</span>
              <hr></hr>
                    <span>POE Support</span>
              </div>             
                <div className = "SwitchData"> 
                   <span>{SwitchData.SwitchName}</span>
              <hr></hr>
                    <span>{SwitchData.Version}</span>
              <hr></hr>
                    <span>{SwitchData.POEsupport}</span>
              </div>
              </div>
              <div className = "SwitchOtherData">
                <div className = "VlanConfigureContainer">
                    <div className = "ConfInputs">
                      <Slider
                        className = "PortRangeSlider"
                        value={PortsRange}
                        onChange={HandlePortRange}
                        min={0}
                        max={48}//change this match to the swtich port number
                      />
                      <Select className = "VlanSelector" onChange ={handleVlanSelect}>
                         { 
                         PortsData[2].map((VlanOption)=>{
                             return <MenuItem key={VlanOption.index} value={VlanOption.vlan}>{VlanOption.vlan}</MenuItem>})
                          }
                      </Select>
                    </div>
                    <div className ="ChoiceViewer">
                      <h3>Vlan - {Vlanname}</h3>            
                      <hr></hr>            
                      <h3>Vlan Prefix - {VlanSegment}</h3>             
                      <hr></hr>               
                      <h3>Port Range - {PortsRange[0]===PortsRange[1]?`Fa0/${PortsRange[0]}`: `Fa0/${PortsRange[0]} to Fa0/${PortsRange[1]}`}</h3> 
                    </div>
                </div>
                <div className="ButtonHolder">
                    <div className = "ConfButton">
                      הגדר פורטים
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
