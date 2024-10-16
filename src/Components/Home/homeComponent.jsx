import styles from './homeComponent.module.css'


/* eslint-disable react/prop-types */
function HomeComponent({title, number,color}) {
  return (
    <div className={styles.mainHomeContainer} style = {{backgroundColor:color}}>
        <div  className = {styles.numberContainer}>
            <p className={styles.number}>{number}</p>
            <div className = {styles.icon}><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
        </div>
        <div>
            <p className = {styles.title}>{title}</p>
        </div>
    </div>
  )
}

export default HomeComponent