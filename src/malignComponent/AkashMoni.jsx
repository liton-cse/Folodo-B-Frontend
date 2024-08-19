import akashmonitree from "../data/akashmoni.json";
import "../App.css";
export default function AkashMoni() {
  return (
    <div>
      {akashmonitree.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="heading_akashmonitree">{item.title}</h3>
            <div className="akashmonitree_style">
              <p>{item.description}</p>
              <img
                src={item.image}
                alt="akashmonitree pic"
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
