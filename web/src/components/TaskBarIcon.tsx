type IconProps = {
    image: string;
}

export const TaskBarIcon = (props: IconProps) => {
  return (
    <div className='taskbar-icon'>
        <img src={props.image} alt="" />
    </div>
  )
}
