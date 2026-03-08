import './_title.scss';

interface Props {
  text: string;
  subTitle?: string;
}

export const Title = ({ text, subTitle }: Props) => {
  return (
    <>
      <div className='intro'>{text}</div>
      {subTitle && <h2 className='subtitle'>{subTitle}</h2>}
    </>
  )
}
