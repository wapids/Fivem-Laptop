import { TaskBarIcon } from './TaskBarIcon'
import { ScreenIcon } from './ScreenIcon'

export const Laptop = () => {
  return (
    <div className='laptop'>
        <div className='laptop-screen'>
            <ScreenIcon image="images/trash.png" text="Recycle Bin" />
            <ScreenIcon image="images/bank.png" text="Banking" />
            <ScreenIcon image="images/octa.png" text="Black Market" />
            <ScreenIcon image="images/helmet.png" text="Boost Network" />
        </div>
        <div className='laptop-taskbar'>
            <TaskBarIcon image="images/home.png" />
            <TaskBarIcon image="images/folder.png" />
            <TaskBarIcon image="images/chrome.png" />
            <TaskBarIcon image="images/email.png" />
        </div>
    </div>
  )
}