
import Select from './Select'
import { useState} from 'react';
const Table = ({ tabledata, ...rest }) => {
    const dateval = tabledata === {} ? "Žádná data" : tabledata.date
    const [value, setValue] = useState("EUR")
    let rows =[]

    
    
    if(Array.isArray(tabledata.items))
    {
        let cal = (val1) => {
        
            if(typeof val1 === 'string')
            {
                setValue(val1)
            }
            
        }

        let myElement = (tabledata.items).find((element) => element.kod === value);
        console.log(myElement);
        
        rows =  (
            <tr key={myElement.kod}>
                <td>{tabledata.date}</td>
                <td><Select data={tabledata.items} result={cal}/></td>
                <td>{myElement.kurz}</td>
            </tr>
        )
    }
    
       
       return (<table id="shoe__table" className='shoe__table'>
        <caption>{dateval}</caption>
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