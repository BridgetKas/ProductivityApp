import styles from './settings.module.css'

function SettingsComponent() {
  return (
    <div className={styles.mainSettingsContainer}>
        <h1 className={styles.settings}>Settings</h1>
        <div className={styles.settingsContainer}>
            <p className={styles.setting}>Email address - </p>
            <p className={styles.setting}>username@gmail.com</p>
        </div>
        <div className={styles.settingsContainer}>
            <p className={styles.setting}>Username - </p>
            <p className={styles.setting}>user</p>
        </div>
        <div>
            <p className={styles.removeSetting}>Deactivate account</p>
            <p className={styles.erase}>Deactivating will suspend your account</p>
        </div>
        <div>
            <p className={styles.removeSetting}>Delete account</p>
            <p className={styles.erase}>Permanently delete your account and its content</p>
        </div>

    </div>
  )
}

export default SettingsComponent