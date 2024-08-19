import img1 from "../assets/images/aboutpc1.jpg";
export default function About() {
  return (
    <div>
      <div className="about_header">
        <div className="about_div_1">
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            Objectives and mission of the Organization
          </span>
          <p>
            We want to plant fruit trees all over the country and make people
            aware of implanting fruit plants because we are, in multidimensional
            ways, related to fruit plants and the fruit itself. By increasing
            the supply of local fruits, we can easily face the following issues:
          </p>
          <ol style={{ listStyleType: "circle" }}>
            <li>Minimize malnutrition problem of the country.</li>
            <li>
              Decrease the fruit import dependency and accelerate economic
              advancement.
            </li>
            <li>
              Eradicate the use of chemical on fruits by supplying local fruit
              demands.
            </li>
            <li>
              Provide a good source of food and safety for birds and insects
              that will eventually secure natural equilibrium.
            </li>
            <li>
              Sustain the fertility of local land by implanting locally fit
              plants.
            </li>
            <li>
              Decrease the sense and mentality of seeing plants as a mere source
              of money and wood.
            </li>
            <li>
              Fruit trees contribute to maintain mutual mate ship and it’s a
              tradition of our Bengali culture to felicitate friends and family
              and provide them with fruits, we want to revive that very culture
              of our own.
            </li>
            <li>Nurture the habit of welfare without interest.</li>
            <li>
              Make priority of our layer-loam soil suited trees over the foreign
              harmful plants.
            </li>
            <li>
              Perform our duties to face the threat of global warming and carbon
              emitting and contribute to raise awareness.
            </li>
          </ol>
        </div>
        <div className="About_image_div">
          <img src={img1} alt="About picture" />
        </div>
        x
      </div>
    </div>
  );
}
