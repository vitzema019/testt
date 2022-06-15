import { useState, useEffect } from 'react';
const Select = ({data, result = val => null, ...rest}) => 
{
    const [value, setValue] = useState("")
    console.log(value)
    useEffect(() => {
        result(value)
    }, [value])
    let cnt =[]
    if(Array.isArray(data))
    {
        cnt = data.map((items) => (
            <option key={items.kod}  value={items.kod}>{items.kod}</option>
          ))
    }
    
    return(
        <select onChange={(e) => setValue(e.target.value)}>
            {cnt}
          </select>
    )
}

export default Select