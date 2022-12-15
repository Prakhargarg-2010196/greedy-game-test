import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { CalendarIcon, SettingsIcon } from './components/icons';
import { useCallback, useEffect, useState } from 'react'

import ColumnBox from './components/column-box';
import { DateRange } from 'react-date-range';
import TableComponent from './components/table'
import { dateUtil } from './utils/dateUtil';

function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const [isDateRange, setDateRange] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [arrayOfData, setArrayOfData] = useState([]);
  const [settings, setSettings] = useState([]);
  const handleDatePicker = () => {
    setDateRange(!isDateRange);
  }
  const handleSettings = () => {
    setIsSettings(!isSettings);
  }
  // To fetch the data in 
  const fetchData =  ()=> {
    const startDate = state[0].startDate && dateUtil(state[0].startDate);
    const endDate = state[0].endDate && dateUtil(state[0].endDate);
    if (endDate && startDate) {
      fetch(`https://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`)
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setArrayOfData([...value.data])
      });
     
    }
} 
  useEffect(() => {
    fetchData(); 
  },[])
  return (
    <>
      <div className="flex">
        <div className="bg-[#192f48] w-36 min-h-screen"></div>
        <div className='flex w-4/5 m-14'>
          <div className='flex flex-col w-full'>
            <h1 className='text-3xl font-bold m-2'>Analytics</h1>
            {/* Date Range Picker Container */}
            <div className='flex  w-full justify-between mb-20'>
              <div className='flex-col w-fit'>
                  <button className='flex h-fit  border rounded p-2 gap-2' onClick={() => { handleDatePicker() }}><CalendarIcon color={'blue'}></CalendarIcon> {state[0].startDate.toDateString()} - {state[0].endDate === null ? state[0].startDate.toDateString() : state[0].endDate.toDateString()}</button>

                  {isDateRange ? <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  /> : ""}
              </div>
            {/* Date Picker Close  */}
              
              
            <button onClick={()=>{handleSettings()} } className='border h-fit rounded flex gap-2 p-2'><SettingsIcon color={'blue'}></SettingsIcon>Settings</button>
              
            </div>
            
            {/* Container containing all the columns*/}
            {isSettings ? <ColumnBox showSettings={handleSettings} settings={settings} setSettings={setSettings} />:""}
            <TableComponent settings={settings} arrayOfData={arrayOfData}></TableComponent>
          </div>
        </div>

      </div>
    </>

  );
}

export default App;
