import eucalyptus from "../data/Eucalyptus.json";
import "../App.css";
export default function Ukelipotas() {
  return (
    <div>
      {eucalyptus.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="heading_eucalyptus">{item.title}</h3>
            <div className="eucalyptus_style">
              <p>{item.description}</p>
              <img
                src={item.image}
                alt="eucalyptus pic"
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
