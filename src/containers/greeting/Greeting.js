import React,{useState} from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const [user,setUser] = useState(['kev']);
  const [name,setName] = useState()

  const addName=(e)=>{
    const newUser = JSON.parse(JSON.stringify(user));
    newUser.push(name);
    setUser(newUser);
    setName('');
  }
  const delName = (val) =>{
    const newUser = user.filter((us)=>us!=val)
    setUser(newUser)
  }
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Find Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
        <div>
          Hello {console.log(user)}
         
          
            <input
              inputMode="text"
              placeholder="Add name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <button style={{height:'50px',width:'50px'}} onClick={()=>addName(name)} title="Button" name="Button" placeholder="Button">Add Name</button>
          
          {user.map((temp)=>{
            return (
              <>
              <div>
                {temp}
                </div>
                <button onClick={()=>delName(temp)}>Delete me</button>
                </>
            )
          })}
        </div>
      </div>
    </Fade>
  );
}
