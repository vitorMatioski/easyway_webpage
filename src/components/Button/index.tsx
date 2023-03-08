import { ContentButton } from './style'

interface ButtonProps {
  link: string
  text: string
}

export function Button({ link, text }: ButtonProps) {
  return (
    <ContentButton>
      <a className="btn" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </ContentButton>
  )
}
