
import classes from "./Home.module.css";


function Home() {
  return (
    <>
      <div className={classes.name}>Akash Kumar</div>
      <div className={classes.srtDesc}>Aspiring Software Engineer</div>
      <div className={classes.description}>
        Hello, myself Akash Kumar, I am currently pursuing <strong>MCA(Master in
        Computer Application)</strong> from National Institute of Technology, Jamsedhpur.
        I have done my Bachelor's degree on Computer Application(BCA) and i have
        a decent knowledge of programming languages such as C, C++, JavaScript,
        and also have a hand on experience on Web Development working with MERN
        Stack.
      </div>
    </>
  );
}

export default Home;
