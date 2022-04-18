import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Button } from "../../components/Button";
import "./style.css";

function PersonCard({ person }) {
  return (
    <div className="person-customization">
      <div className="person-info">
        {console.log(person)}
        <img
          style={{ width: 400 }}
          src="https://1.bp.blogspot.com/-P5nkRmpamnM/UV2hSupl0iI/AAAAAAAAMcQ/J9jXS3tazcA/s1600/happy2.jpg"
          alt={person.nome}
        />
        <h2 style={{color: "#45b77d"}}>{person.nome}</h2>
        <div className="social-container">
          <Button>
            {/* ! Mudar referencia de ancora*/}
            <a href="https://linkedin.com" target="_blank">
              <div className="person-button-control">
                <span>Linkedin</span>
                <span>
                  <BsLinkedin className="social-icon" />
                </span>
              </div>
            </a>
          </Button>
          <Button color="secondary">
            <a href="https://github.com" target="_blank">
              <div className="person-button-control">
                <span>Github</span>
                <span>
                  <BsGithub className="social-icon" />
                </span>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
