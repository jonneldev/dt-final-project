import './Styles/footer.css';

export default function Footer() {
    return (
      <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-logo">Red Curtain Addict</h1>
        
        <div className="footer-links">
          <div className="links-column">
            <h3>Events</h3>
            <h3>News</h3>
            <h3>Episodes</h3>
          </div>
          <div className="links-column">
            <h3>For professionals</h3>
            <h3>About us</h3>
            <h3>Contact us</h3>
            <h3>Terms & conditions</h3>
          </div>
        </div>
        
        <div className="footer-social">
          <p>Follow us on social media and join our growing community of performing arts enthusiasts.</p>
          <div className="social-icons">
            
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>

          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Red Curtain Addict 2021</p>
      </div>
    </footer>
    )
}