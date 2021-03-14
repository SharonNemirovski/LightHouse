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
    vlan: '-',
    status: '-',
    portName: '-',
    MAC: '-',
    vlanSEG: '-',
  });
  const [SwitchData, SetSwitchData] = useState({
    SwitchName: PortsData[0].switchName,
    Model: PortsData[0].version,
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
  const ConfigPorts = () =>{
    //make post req to backend here
    console.log("posst req to backend");
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
      <div className="Main">
        <div className = "fullDashContainer">
            <div className = "search">
              <div className="box">
                  <div className="click" for="check"><FaSearch/></div>
                  <input maxLength = {15} className = "IPinput" type="text" placeholder="..של המתג IP הכנס כתובת"></input>
              </div>
            </div>
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
            <div className="SwitchData">
                  <div className="PortData">
                    <div className = "PortTableHeader">
                      <h3>Port Name</h3>
                      <h3>Link Status</h3>
                      <h3>Mac Address</h3>
                      <h3>Vlan</h3>
                      <h3>Vlan Prefix</h3>
                    </div>
                    <div className ="PortsTableData">
                      <h2>{PortData.portName}</h2>
                      <h2>{PortData.status=== ''?'not connected':PortData.status}</h2>
                      <h2>{PortData.MAC === ''?'-':PortData.MAC}</h2>
                      <h2>{PortData.vlan}</h2>
                      <h2>{PortData.vlanSEG}</h2>
                    </div>
                  </div>
                  <div className="OtherData">
                    <div className="OtherDataHeader">
                        <h3>Switch Name</h3>
                        <h3>Switch Model</h3>
                        <h3>POE Support</h3>
                    </div>
                    <div className = "OtherDataTableData">
                        <h2>{SwitchData.SwitchName}</h2>
                        <h2>{SwitchData.Model}</h2>
                        <h2>{SwitchData.POEsupport}</h2>
                    </div>
                  </div>
            </div>
            <div className="ConfOptions">
                      <select className="VlanSelector" onChange ={handleVlanSelect}>
                        {PortsData[2].map((VlanOption)=>{
                             return  <option  key={VlanOption.index} value={VlanOption.vlan}>{VlanOption.vlan}</option>
                          })}
                      </select>
                      <h3>Vlan Segment: {VlanSegment}</h3>
                      <div className = "RestartPortButton">Shut no shut</div>
                      <Slider
                        className = "PortRangeSlider"
                        value={PortsRange}
                        onChange={HandlePortRange}
                        min={0}
                        max={48}//change this match to the swtich port number
                      />
                      <h3>Chosen Ports: {PortsRange[0]===PortsRange[1]?`Fa0/${PortsRange[0]}`: `Fa0/${PortsRange[0]} to Fa0/${PortsRange[1]}`}</h3>
                      <div className = "ConfigButton">Configure ports</div>
            </div>
        </div>
      </div>
  );
}
