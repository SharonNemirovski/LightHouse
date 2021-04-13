import React , {useState} from 'react'
import "./Port/Port"
import Port from './Port/Port'
import "./PortsTable.scss"
function PortsTable() {
    const [Ports , setPorts] =  useState([
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
        {name:"Fa0/1",status:"connected",mac:"sxsx:sxs:sxsx:sx",vlan:"2001"},
    ])
    return (
        <div className="FullTable">
          <div className = "Table">
            <div className="TableHeader">
                <span>Select Port</span>
                <span>Port Name</span>
                <span>Port Status</span>
                <span>Mac</span>
                <span>Vlan</span>
            </div>
            <div className="TableBody">
                {Ports.map((port)=>{
                   return( <ul>
                        <Port name = {port.name} status = {port.status} mac = {port.mac} vlan = {port.vlan}/>
                    </ul>)
                })}
            </div>
            <div className="TableBottom"/>
          </div>
        </div>

    )
}

export default PortsTable
