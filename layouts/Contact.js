import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  let [captchasolved, setCaptchasolved] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }
 const submitForm = (e) => {
    e.preventDefault();
 if (!captchasolved){
   toast.error("Please solve the captcha");
  return;
 }

 else{
  // check if all fields are filled
  if (
    message.name === "" ||
    message.email === "" ||
    message.subject === "" ||
    message.message === ""
  ) {
   toast.error("Please fill all the fields");
    return;
  }
  // check if email is valid
  if (!message.email.includes("@")) {
   toast.error("Please enter a valid email");
    return;
  }
  // check if subject is valid
  if (message.subject.length < 3) {
    toast.error("Please enter a valid subject");
      return;
  }
  // check if message is valid
  if (message.message.length < 10) {
    toast.error("Please enter a valid message");
      return;
  }
  // send message
  toast.success("Message sent successfully");
  // reset form
  setMessage({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // reset captcha
  setCaptchasolved(false);
  // reset recaptcha
  window.grecaptcha.reset();
  // reset form
  document.querySelector(".contact-form").reset();
  // reset form
  document.querySelector(".contact-form").reset();
 }
 }
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                onChange={handleChange}
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                 onChange={handleChange}
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                 onChange={handleChange}
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="mb-3">
                <textarea
                name="message"
                 onChange={handleChange}
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <div className="mb-3">
              <ReCAPTCHA
              onChange={(e)=>{
                setCaptchasolved(true);
              }}
              onExpired={()=>{
                setCaptchasolved(false);
              }}
               sitekey="6LeNmJkmAAAAAA3PZ5pryapWHY5dY9iop2PA8EFw" />

              </div>
              <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={true}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss={false}
              
             />
              <button
              onClick={submitForm}
               type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
           
          </div>
          
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
