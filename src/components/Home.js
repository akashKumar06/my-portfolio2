import classes from "./Home.module.css";
import back from "../Coding-bro.png";
function Home() {
  const SKILLS = [
    { title: "CSS", qty: 10 },
    { title: "HTML", qty: 50 },
    { title: "React", qty: 60 },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <div className={classes.name}>Akash Kumar</div>
          <div className={classes.srtDesc}>Aspiring Software Engineer</div>
        </div>
        <img src={back} alt="" className={classes.img} />
      </div>
      <div className={classes.description}>
        <h1>About Me</h1>
        <div>
          Hello, myself Akash Kumar, I am currently pursuing{" "}
          <strong>MCA(Master in Computer Application)</strong> from National
          Institute of Technology, Jamsedhpur. I have done my Bachelor's degree
          on Computer Application(BCA) and i have a decent knowledge of
          programming languages such as C, C++, JavaScript, and also have a hand
          on experience on Web Development working with MERN Stack.
        </div>
      </div>
      <div className={classes.skills}>
        {SKILLS.map((skill) => (
          <div className={classes.skill} key={skill.title}>
            <span>{skill.title}</span>
            <div className={classes.level} style={{width: skill.qty + "%",backgroundColor:'#d4a434'}}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
