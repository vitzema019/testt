
import Select from './Select'
import { useState} from 'react';
let Table = ({ tabledata, ...rest }) => {
    let dateval = tabledata === {} ? "Žádná data" : tabledata.date
    let [value, setValue] = useState("EUR")
    let rows =[]

    let cal = (val1) => {   
        if(typeof val1 === 'string')
        {
            setValue(val1)
        }
    }
    
    if(Array.isArray(tabledata.items))
    {
        let myElement = (tabledata.items).find((element) => element.kod === value);
        rows =  (
            <tr key={myElement.kod}>
                <td>{tabledata.date}</td>
                <td><Select data={tabledata} result={cal} selected={value}/></td>
                <td>{myElement.kurz}</td>
            </tr>
        )
    }
    
       
       return (<table id="shoe__table" className='shoe__table'>
        
        <thead>
            <tr>
                <th>Datum</th>
                <th>Měna</th>
                <th>Kurz</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>);
    
}

export default Table