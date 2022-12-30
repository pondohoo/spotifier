import React from 'react';

const Dropdown = props => {    
    const dropdownChanged = e => {
        props.changed(e.target.value)
        
    }

    return (
        <div>
            <select className="bg-green-500 p-2 px-0 mr-1 rounded-full font-gotham text-center" value={props.selectedValue} onChange={dropdownChanged}>
                {props.options.map((item,index)=> <option key={index} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    )
}
export default Dropdown