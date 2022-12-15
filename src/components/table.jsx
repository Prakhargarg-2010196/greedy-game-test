import React from 'react'
import { dateUtil } from '../utils/dateUtil';

const TableComponent = ({settings,arrayOfData}) => {
  const [apps, setApps] = React.useState([]);
  
  React.useEffect(() => {
    
    fetch(`http://go-dev.greedygame.com/v3/dummy/apps`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        return value.data;
      })
      .then((data) => {
        return data;
      })
      .then((app)=>{setApps(app)});
      
    
  }, [])
  
  
  const temp = arrayOfData.map((item) => {

    const app = apps.filter((value) => {
      return value.app_id === item.app_id

    })
    const app_name = app[0].app_name;
    console.log(app_name)
    return { ...item, app_name }
  })
  
  return (
      <div className=''>
      <table className='w-full'>
        <thead>
          <tr>
            {settings.map((item) => {
              return (<th className='border p-5'>
                {item}
              </th>)
            })}
            
          </tr>
            {temp.map((item,index) => {
              return (
                <tr key={index} className='border'>
                  <td className='text-center border p-5'>{dateUtil(new Date(item.date))}</td>
                  <td className='text-center border p-5'>{item.app_name}</td>
                  <td className='text-center border p-5'>{item.clicks}</td>
                  <td className='text-center border p-5'>{item.responses}</td>
                  <td className='text-center border p-5'>{item.requests}</td>
                  <td className='text-center border p-5'>{item.impressions}</td>
                  <td className='text-center border p-5'>{item.revenue}</td>
                  <td className='text-center border p-5'>{item.requests/item.responses*100}%</td>
                  <td className='text-center border p-5'>{item.clicks / item.impressions * 100}%</td>

                </tr>
             )
            })}  
          

          
        </thead>
        
        </table>
      </div>
  )
}

export default TableComponent