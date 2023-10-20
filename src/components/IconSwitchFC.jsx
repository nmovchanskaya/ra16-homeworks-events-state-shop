export const IconSwitchFC = ({icon, onSwitch}) => {
  return (
    <div className="switch">
        <span class="material-symbols-outlined" onClick={onSwitch}>
            {icon}
        </span>
    </div>
  )
}
