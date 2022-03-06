import { Container, Amount, CardTitle } from "./styles";
import { CardIcon } from "../Atoms/Icons";

type CardStatsProps = {
  title: string;
  amount: number;
  dynamicColor?: boolean;
};

//DEFINE COLORS
function defineColors(flag: boolean, amount: number) {
  if (flag) {
    const PositiveColorSet = {
      bg: "#2EE8A5",
      content: "#064C37",
      icon: "#064C37",
    };
    const NegativeColorSet = {
      bg: "#FF8A91",
      content: "#680822",
      icon: "#680822",
    };

    return amount > 0 ? PositiveColorSet : NegativeColorSet;
  } else {
    return {
      bg: "#FFFFFF",
      content: "#363F5F",
      icon: "",
    };
  }
}

export function CardStats(props: CardStatsProps) {
  const cardColors = defineColors(props.dynamicColor || false, props.amount);

  return (
    <Container color={cardColors.bg}>
      <header>
        <CardTitle color={cardColors.content}>{props.title}</CardTitle>
        <CardIcon fill={cardColors.icon} iconName={props.title} />
      </header>
      <Amount color={cardColors.content}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.amount)}
      </Amount>
    </Container>
  );
}
