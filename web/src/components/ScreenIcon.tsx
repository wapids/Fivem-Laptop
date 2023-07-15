type IconProps = {
    image: string;
    text: string;
}

export const ScreenIcon = (props: IconProps) => {
  return (
    <div className='screen-icon'>
        <img src={props.image} alt="" />
        <div>{props.text}</div>
    </div>
  )
}
