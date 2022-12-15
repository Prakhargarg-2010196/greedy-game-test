import CustomButton from './custom-button';
import React from 'react'
const listOfColumns = ['Date', 'App', 'Clicks', 'Ad Response', 'Ad Requests', 'Impression', 'Revenue', 'Fill Rate', 'CTR'];
const ColumnBox = ({ showSettings,setSettings }) => {
  const [activeColumnList, setActiveColumns] = React.useState([]);
  
  return (
    
    <div className='border mb-20'>
      <h1 className='text-xl font-bold m-2'>Dimensions And Matrices</h1>
      <div className='flex flex-wrap  w-full p-2 mt-2'>
        {listOfColumns.map((item, index) => {
          return (
            <CustomButton activeColumnList={activeColumnList} handleActiveList={setActiveColumns} key={index} value={item} />)
        })} 
      </div>
      <div className='flex justify-end mr-2 my-2 gap-2'>
        <button onClick={()=>{showSettings()}} className='border p-2 rounded bg-white text-blue-400'>Close</button>
        <button className='border p-2 rounded bg-blue-400 text-white' onClick={()=>{setSettings([...activeColumnList])}} >Apply Changes</button>
      </div>
    </div>
    
  )
}

export default ColumnBox