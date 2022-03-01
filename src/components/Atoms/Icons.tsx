import { ReactComponent as Income } from "../../assets/income.svg";
import { ReactComponent as Expenses } from "../../assets/expenses.svg";
import { ReactComponent as Balance } from "../../assets/dollar-sign.svg";
import { ReactComponent as XClose } from "../../assets/close.svg";

type IconProps = {
  fill?: string;
  iconName: string;
  size?: string;
};

export function CardIcon(props: IconProps) {
  switch (props.iconName) {
    case "Income":
      return (
        <Income
          fill={props.fill || "#098659"}
          style={{ width: props.size || "2rem" }}
        />
      );
    case "Expenses":
      return (
        <Expenses
          fill={props.fill || "#CB1835"}
          style={{ width: props.size || "2rem" }}
        />
      );
    case "Balance":
      return (
        <Balance
          fill={props.fill || "#363F5F"}
          style={{ width: props.size || "2rem" }}
        />
      );
    default:
      return <span>Icon not found</span>;
  }
}

export function CloseIcon() {
  return <XClose fill="rgba(54, 63, 95, 0.6)" />;
}
