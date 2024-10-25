import "../fotterComponent/Footer.css";
import  { memo } from "react";
import { branches, contacts, socialLinks } from "./FooterData"; // Import the arrays

// eslint-disable-next-line react-refresh/only-export-components
const Footer = () =>{
  return (
    <div>
      <div className="footer">
        <div className="sb_footer ">
          <div>
            <h4>Our Branches</h4>
            <div>
              {branches.map((branch, index) => (
                <a key={index} href={branch.link}>
                  <p>{branch.name}</p>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Contact Us</h4>
            <div className="contact">
              {contacts.map((contact, index) => (
                <p key={index}>
                  <img src={contact.icon} width="16" height="16" className="me-2" alt="icon" />
                  {contact.label}
                </p>
              ))}
              <p>
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href}>
                    <img src={social.icon} width="32" height="32" className="me-4" alt="social icon" />
                  </a>
                ))}
              </p>
            </div>
          </div>

          <div>
            <h4>Our Location</h4>
            <div>
              <p>ফলদ বাংলাদেশ ফাউন্ডেশন</p>
              <p>৯-ক, খ [২য় তলা] তেজগাঁও শিল্প এলাকা, ঢাকা</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29212.338972503778!2d90.34923130432252!3d23.763693212623867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f68e3e199%3A0x1091c4aa2634b568!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1708811133915!5m2!1sen!2sbd"
                width="400"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer_copyright">
          <p>@{new Date().getFullYear()} CodeInn. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Footer);
