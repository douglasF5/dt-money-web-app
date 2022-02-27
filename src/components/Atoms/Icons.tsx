import { ReactComponent as Income } from "../../assets/income.svg";
import { ReactComponent as Expenses } from "../../assets/expenses.svg";
import { ReactComponent as Balance } from "../../assets/dollar-sign.svg";
import { ReactComponent as XClose } from "../../assets/x-outline.svg";

type IconProps = {
  fill?: string;
  iconName: string;
};

export function CardIcon(props: IconProps) {
  switch (props.iconName) {
    case "Income":
      return <Income fill={props.fill || "#098659"} />;
    case "Expenses":
      return <Expenses fill={props.fill || "#CB1835"} />;
    case "Balance":
      return <Balance fill={props.fill || "#363F5F"} />;
    default:
      return <span>Icon not found</span>;
  }
}
