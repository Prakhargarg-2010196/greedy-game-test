import React from 'react'

const CustomButton = ({value,activeColumnList,handleActiveList}, ...rest) => {
  const [isClick, setIsClick] = React.useState(false);
  React.useEffect(() => {
   if(isClick===true)
      handleActiveList([...activeColumnList, value]) 
   else
     handleActiveList(activeColumnList.filter(item=>item!==value))
  }, [isClick])
  const handleClick = () => {
    setIsClick(!isClick);
  }
    return (
    <button onClick={() => { handleClick() }} className={`m-2 border rounded pr-10 pl-1 ${isClick ? "pl-0 :before:rounded :before:content-[''] before:p-1 before:py-1 before:mr-1 before:bg-blue-400" : ""}`}>{value }</button>
  )
}

export default CustomButton