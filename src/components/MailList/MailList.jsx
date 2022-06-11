import "./MailList.css"

export default function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time and Money!!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals for you.</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Suscribe</button>
        </div>
    </div>
  )
}
