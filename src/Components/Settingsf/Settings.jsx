// import styles from './settings.module.css'

function SettingsComponent() {
  return (
    <div className="p-5 text-left mx-auto mt-[100px]">

        <h1 className="text-left text-2xl">Settings</h1>
        <div className="flex gap-[30px] flex-row ">
            <p className="text-[18px] my-[10px]">Email address - </p>
            <p className="text-[18px] my-[10px]">username@gmail.com</p>
        </div>
        <div className="flex gap-[30px] flex-row ">
            <p className="text-[18px]  my-[10px]">Username - </p>
            <p className="text-[18px]  my-[10px]">user</p>
        </div>
        <div>
            <p className="text-red-700 font-bold m-0 text-[18px]">Deactivate account</p>
            <p className="my-[3px] mx-0 text-[18px] ">Deactivating will suspend your account</p>
        </div>
        <div>
            <p className="text-red-700 font-bold m-0 text-[18px]">Delete account</p>
            <p className=" mx-0 text-[18px] my-[3px]">Permanently delete your account and its content</p>
        </div>

    </div>
  )
}

export default SettingsComponent