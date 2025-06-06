import './Styles/footer.css';

export default function Footer() {
    return (
      <footer className="footer">
      <div className="footer-content">
        <img src="/images/logo.png" className="footer-logo" />
        <div className="footer-links">
          <div className="links-column">
            <a href="#events" className="footer-link">Events</a>
            <a href="#news" className="footer-link">News</a>
            <a href="#episodes" className="footer-link">Episodes</a>
          </div>
          <div className="links-column">
            <a href="#professionals" className="footer-link">For professionals</a>
            <a href="#about" className="footer-link">About us</a>
            <a href="#contact" className="footer-link">Contact us</a>
            <a href="#terms" className="footer-link">Terms & conditions</a>
          </div>
        </div>
        
        <div className="footer-social">
          <p className="Tag">Follow us on social media and join our growing<br /> community of performing arts enthusiasts.</p>
          <div className="social-icons">
            
            <a href="#" className="footer-instagram">
              <img src='/images/instagram.svg' />
            </a>
            <a href="#" className="footer-facebook">
              <img src='/images/FB.svg' />
            </a>
            <a href="#" className="footer-twitter">
              <img src='/images/Twitter.svg' />
            </a>
            <a href="#" className="footer-youtube">
              <img src='/images/YT.svg' />
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