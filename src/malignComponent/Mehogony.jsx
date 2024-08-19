import mahogony from "../data/mahogony.json";
import "../App.css";
export default function Mehogony() {
  return (
    <div>
      {mahogony.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="heading_mahogony">{item.title}</h3>
            <div className="mahogony_style">
              <p>{item.description}</p>
              <img
                src={item.image}
                alt="mahogony pic"
                width="100%"
                height="300px"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
