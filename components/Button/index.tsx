interface ButtonProps {
  children: React.ReactNode
  as: string
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>
}

export default Button
