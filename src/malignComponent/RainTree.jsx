import raintree from "../data/raintree.json";
export default function RainTree() {
  return (
    <div>
      {raintree.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="heading_raintree">{item.title}</h3>
            <div className="raintree_style">
              <p>{item.description}</p>
              <img
                src={item.image}
                alt="raintree pic"
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
