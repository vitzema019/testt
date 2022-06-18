import { useState, useEffect } from 'react';
let Select = ({data, result = val => null,selected, ...rest}) => 
{
    let [value, setValue] = useState(null)
   
    useEffect(() => {
        result(value)
    }, [value])
    console.log(value);
    let cnt =[]
    if(Array.isArray(data.items))
    {

        cnt = data.items.map((items) => (
            <option key={items.kod}  value={items.kod}>{items.kod}</option>
          ))
    }
    
    return(
        <select  value={selected} onChange={(e) => setValue(e.target.value)} >
            {cnt}
          </select>
    )
}

export default Select