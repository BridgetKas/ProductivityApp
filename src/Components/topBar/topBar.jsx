import { IoSearch } from "react-icons/io5";
import styles from './topBar.module.css'
import { RiBearSmileFill } from "react-icons/ri";


function TopBar() {

   
  return (
    <header>
        <div className={styles.topBarContainer}>
            <div className={styles.mainsearchContainer}>
                <div className={styles.search}>
                    <IoSearch style={{ fontSize: '30px', }}/>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" className={styles.input} placeholder="Search"/>
                </div>
            </div>
            <div className={styles.authorContainer}>
                <div>
                    <p>Bizzy Bridget</p>
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