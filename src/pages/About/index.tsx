import AboutUsCard from "./AboutUsCard";
import { Container, Content } from "./styles";
import { Button } from "@mui/material";
import { TiArrowBack } from "react-icons/ti";
import { useHistory } from "react-router-dom";

const group = [
  {
    name: "Felipe Foster",
    duty: "Quality Assurance",
    image: "http://i.share.pho.to/93b597d4_o.gif",
    git: "https://github.com/felipefoster",
  },
  {
    name: "Rêgo Falcão",
    duty: "Scrum Master",
    image: "http://i.share.pho.to/9c3a7dad_o.gif",
    git: "https://github.com/regofalcao",
  },
  {
    name: "Bruno Faria",
    duty: "Product Owner",
    image: "http://i.share.pho.to/4769ca66_o.gif",
    git: "https://github.com/BrunoFaria93",
  },
  {
    name: "Luiz Paulo",
    duty: "Quality Assurance",
    image: "http://i.share.pho.to/cd08101a_o.gif",
    git: "https://github.com/luizpcardoso",
  },
  {
    name: "Vagner Fabricio",
    duty: "Tech Leader",
    image: "http://i.share.pho.to/e52eb5df_o.gif",
    git: "https://github.com/wagnerfabricio",
  },
];

const About = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          startIcon={<TiArrowBack />}
        >
          Voltar
        </Button>
      </Content>
      <Content>
        {group.map((member) => (
          <AboutUsCard
            key={member.image}
            name={member.name}
            duty={member.duty}
            image={member.image}
            git={member.git}
          />
        ))}
      </Content>
    </Container>
  );
};

export default About;
