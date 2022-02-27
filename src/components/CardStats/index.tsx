import { Container, Amount, CardTitle } from "./styles";
import { CardIcon } from "../Atoms/Icons";

type CardStatsProps = {
  title: string;
  amount: number;
  dynamicColor?: boolean;
};

//FORMAT CURRENCY
// function formatValue(value: string) {
//   let formattedValue = value
//     ? parseInt(parseFloat(String(value).replace(/-/g, "")) * 100)
//     : 0;
//   return formattedValue;
// }

function formatCurrency(value: number) {
  let amount = String(value).toLocaleString();

  return `R$ ${amount}`;
}

//DEFINE COLORS
function defineColors(flag: boolean) {
  if (flag) {
    return {
      bg: "#2EE8A5",
      content: "#064C37",
      icon: "#064C37",
    };
  } else {
    return {
      bg: "#FFFFFF",
      content: "#363F5F",
      icon: "",
    };
  }
}

export function CardStats(props: CardStatsProps) {
  const cardColors = defineColors(props.dynamicColor || false);

  return (
    <Container color={cardColors.bg}>
      <header>
        <CardTitle color={cardColors.content}>{props.title}</CardTitle>
        <CardIcon fill={cardColors.icon} iconName={props.title} />
      </header>
      <Amount color={cardColors.content}>{formatCurrency(props.amount)}</Amount>
    </Container>
  );
}
