import img1 from "../assets/images/activities_pic_1.jpg";
export default function Activities() {
  return (
    <div>
      <div className="activities_main_div">
        <div className="activities_content_div">
          <p>
            The formal operations of the organization started on 12 June 2013.
            From 2013 to 2023, the volunteers of Folodo Bangladesh have already
            planted 3,75,000 (Three lacs and seventy five thousand) fruit plants
            covering 63 districts in the country with many more Upozilas and
            villages. As the specified methods applied while planting as well as
            not being planted in obsolete, vulnerable or inappropriate places,
            about 95 percent of the planted trees sustained. It has been a major
            part of the responsibilities of the volunteers to select the places,
            implant trees and supervise initial maintenance. Most of the plants
            planted during initial stages are now providing fruits. Local
            assistants perform the duties of ministering and maintenance of the
            plants.
          </p>
        </div>
        <div className="activities_image_div"></div>
        <img src={img1} alt="Activities pic" width="400px" height="300" />
      </div>
    </div>
  );
}
