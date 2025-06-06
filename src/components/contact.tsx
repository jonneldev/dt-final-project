import './Styles/contact.css';

export default function GetInTouchForm() {
  return(
    <section>
    <div className="showcase-form">
      <h1 className="title">Showcase your digital <br />performances with us!</h1>
      <p>Get in touch with us below.</p>

    <div className="field-form">
      <div className="row">
        <input type="text" placeholder="Name (first & last)"  /> 
        <input type="text" placeholder="Company" /> 
      </div>

      <div className="row">
        <input type="email" placeholder="Contact email"  /> 
        <input type="text" placeholder="Phone number" /> 
      </div>
      <button type="submit" className="submit-button">Get in touch</button>
    </div>
    </div>
    </section>
  )
}