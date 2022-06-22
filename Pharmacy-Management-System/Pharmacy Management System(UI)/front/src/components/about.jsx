import { BiFontFamily } from "react-icons/bi";
import { Link } from "react-router-dom";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Login/signup</h2>
              <div style={{display: "flex", justifyContent: "space-evenly", margin:"70px 0"}}>
                <h1 style={{textDecoration:"unset",background:"#0b1a47",padding:"12px,60px",padding:"18px 60px",borderRadius:"14px",color:"white",fontWeight:"bold"}}><Link style={{fontSize:"24px", fontWeight:"400px",textDecoration:"unset",color:'#ffa842', fontFamily:"Poppins"}} to={"/admin"}>Admin</Link></h1>

                <h1 style={{textDecoration:"unset",background:"#0b1a47",padding:"18px,60px",padding:"18px 60px",borderRadius:"14px",color:"#0b1a47",fontWeight:"bold"}}><Link style={{fontWeight:"bold",textDecoration:"unset",color:'#ffa842',fontFamily:"Poppins"}} to={"/doctor"}>Doctor</Link></h1>
              </div>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
