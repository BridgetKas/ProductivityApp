import { IoSearch } from "react-icons/io5";
import { RiBearSmileFill } from "react-icons/ri";


function TopBar() {

   
  return (
    <header>

        <div className="flex items-center justify-between p-[15px] h-[70px] bg-[#4a4e72] ">
            <div className="hidden min-[992px]:flex items-center py-2.5 px-[40px] bg-[#3b3e52]">
                <div>
                    <IoSearch style={{ fontSize: '30px', }}/>
                </div>
                <div>
                    <input type="text" className="h-[50px] w-[280px] bg-[#3b3e52] border-0" placeholder="Search"/>
                </div>
            </div>
            <div className="flex items-center ml-auto">
                <div>
                    <p className="text-[18px] p-0 m-0">Bizzy Bridget</p>
                </div>
                <div>
                    <RiBearSmileFill style={{fontSize:"40px"}} />
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default TopBar