
/* eslint-disable react/prop-types */
function HomeComponent({title, number,color}) {
  return (
    <div className="w-full p-2.5 mb-2.5 rounded-[10px] border border-solid border-black min-[600px]:w-[48%] min-[768px]:w-[33%] min-[992px]:w-[24%]" style = {{backgroundColor:color}}>
        <div  className="flex items-center justify-between">
          <p className="text-xl font-bold my-[5px] mx-0 text-black" style = {{color:(color ==='black') ? 'white': 'black'}}>{number} </p>
          <div className="w-[25px] h-[25px] bg-white text-black 
            flex items-center justify-center rounded-[50%] text-xl">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
        </div>
        <div>
          <p className="text-black text-left"style = {{color:(color === 'black') ? 'white':'black'}} >{title}</p>
        </div>
    </div>
  )
}

export default HomeComponent