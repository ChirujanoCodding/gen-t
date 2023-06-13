import "./App.css";
import { Gif } from "./components/Gif";
import { Team } from "./components/Team";
import { TeamGrid } from "./components/TeamGrid";

function App() {
  const teams = [
    { name: "Gimnasia", points: 18, big: false, id: 1 },
    { name: "River", points: 40, big: true, id: 2 },
    { name: "Talleres", points: 17, big: true, id: 3 },
    { name: "Patronato", points: 21, big: true, id: 4 },
    { name: "Boca", points: 39, big: false, id: 5 },
    { name: "Racing", points: 15, big: false, id: 6 },
  ];

  return (
    <>
      <div>
        <Gif />
        <h1>All teams: </h1>
        <TeamGrid>
          {teams.map((team) => (
            <Team key={team.id} {...team} />
          ))}
        </TeamGrid>
      </div>
      {/* <div>
        <h1>Best teams: </h1>
        <TeamGrid>
          {teams
            .sort((a, b) => b.points - a.points)
            .map((team) => (
              <Team {...team} />
            ))}
        </TeamGrid>
      </div> */}
    </>
  );
}

export default App;
