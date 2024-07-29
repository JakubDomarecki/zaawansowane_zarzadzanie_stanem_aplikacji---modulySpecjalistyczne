import { useUserPreferencesContext } from "./PreferencesContext";

export const NotificationsToggler = () => {

  const {handleNotificationsOff, handleNotificationsOn, notifications} = useUserPreferencesContext();


  return (
    <div>
      <h2>Notifications</h2>
      <div>
        <label htmlFor="on">On</label>
        <input type="radio" id="on" name="notifications" value="on" onChange={handleNotificationsOn} checked={notifications}/>
      </div>
      <div>
        <label htmlFor="off">Off</label>
        <input type="radio" id="off" name="notifications" value="off" onChange={handleNotificationsOff} checked={!notifications}/>
      </div>
    </div>
  );
};
