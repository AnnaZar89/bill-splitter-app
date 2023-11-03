import { FC, React } from "react";

interface IButton {
  text: string;
  onClick: any;
}
const Button: FC<IButton> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
