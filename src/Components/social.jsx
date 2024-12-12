// eslint-disable-next-line react/prop-types
function Social({icon,title}) {
  return (
    <div className="flex items-center gap-2 justify-center mt-2 border border-gray-400 w-full mx-auto
  }">
        <div className='text-xl'>
         {icon}
        </div>
        <div>
            {title}
        </div>
    </div>
  )
}

export default Social