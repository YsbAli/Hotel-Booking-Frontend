import "./FooterMail.css";

function FooterMail() {
  return (
    <div className="FooterMailSection">
      <div className="title">
        <h2>Save time, save money!</h2>
      </div>
      <p className="desc">Sign up and we'll send the best deals to you</p>
      <div className="input-container">
        <input type="text" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default FooterMail;
