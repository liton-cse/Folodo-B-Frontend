import "../fotterComponent/Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="sb_footer ">
          <div>
            <h4>Our Branches</h4>
            <div>
              <a href="/mymensingh">
                <p>Dhaka</p>
              </a>
              <a href="/dhaka">
                <p>Mymensingh</p>
              </a>
              <a href="/borishal">
                <p>Borishal</p>
              </a>
              <a href="/sylhet">
                <p>Sylhet</p>
              </a>
              <a href="/chittagong">
                <p>Chittagong</p>
              </a>
              <a href="/khulna">
                <p>Khulna</p>
              </a>
              <a href="/dinajpur">
                <p>Dinajpur</p>
              </a>
              <a href="/rangpur">
                <p>Rangpur</p>
              </a>
            </div>
          </div>
          <div>
            <h4>Contact Us</h4>
            <div className="contact">
              <p>
                <img
                  src="https://icons.iconarchive.com/icons/iynque/ios7-style/16/Phone-icon.png"
                  width="16"
                  height="16"
                  className="me-2"
                />
                Mobile No: 01720258924
              </p>
              <p>
                <img
                  src="https://icons.iconarchive.com/icons/iynque/ios7-style/16/Phone-icon.png"
                  width="16"
                  height="16"
                  className="me-2"
                />
                Mobile No: 01751540829
              </p>
              <p>
                <img
                  src="https://icons.iconarchive.com/icons/zerode/plump/16/Mail-icon.png"
                  width="16"
                  height="16"
                  className="me-2"
                />
                Email : litonakash856@gmail.com
              </p>
              <p>
                <a href="https://www.facebook.com/groups/1605346953032179">
                  <img
                    src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/32/facebook-icon.png"
                    width="32"
                    height="32"
                    className="me-4"
                  />
                </a>

                <a href="https://www.facebook.com/groups/1605346953032179">
                  <img
                    src="https://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/32/linkedin-icon.png"
                    width="32"
                    height="32"
                    className="me-4"
                  />
                </a>

                <a href="https://www.youtube.com/">
                  <img
                    src="https://icons.iconarchive.com/icons/dakirby309/simply-styled/32/YouTube-icon.png"
                    width="32"
                    height="32"
                    className="me-4"
                  />
                </a>
                <a href="">
                  <img
                    src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/32/twitter-icon.png"
                    width="32"
                    height="32"
                    className="me-4"
                  />
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4>Our Loaction</h4>
            <div>
              <p>ফলদ বাংলাদেশ ফাউন্ডেশন</p>
              <p>৯-ক, খ [২য় তলা] তেজগাঁও শিল্প এলাকা, ঢাকা</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29212.338972503778!2d90.34923130432252!3d23.763693212623867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f68e3e199%3A0x1091c4aa2634b568!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1708811133915!5m2!1sen!2sbd"
                width="400"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer_copyright">
          <p>@{new Date().getFullYear()} CodeInn. All reserved</p>
        </div>
      </div>
    </div>
  );
}
