import shishamtree from "../data/shishamtree.json";
import "../App.css";
export default function Shishu() {
  return (
    <div>
      {shishamtree.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="heading_shishamtree">{item.title}</h3>
            <div className="shishamtree_style">
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
