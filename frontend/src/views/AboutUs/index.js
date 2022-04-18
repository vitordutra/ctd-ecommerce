import PersonCard from "../../components/PersonCard/PersonCard";
import { MainLayout } from "../../layouts/MainLayout";
import { data } from "../../assets/data/data";

function AboutUs() {
  return (
    <MainLayout>
    <h1 
    style={{ 
     display: "block",
     textAlign: "center",
     position:"relative",
     margin: "100px auto 10px",
     width: "100%",
     color: "#45b77d"
     }}
     >Nossa equipe</h1>
      <div
        className="person-container"
        style={{ minHeight: "calc(100vh - 186px)" }}
      >
        

        {data.map((person) => {
          return <PersonCard person={person} />;
        })}
      </div>
    </MainLayout>
  );
}

export default AboutUs;
