import React from 'react'

export default function CheckBox( {calendars}) {

  return (

    calendars.map(calendar => (
      <div key={calendar.id}>
        
      <label>
      <input type='checkbox' checked={calendar.selected}></input>
      {calendar.name}
      </label>
      </div>
      )
      
     ) 
   )
}
