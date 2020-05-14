import React, {Component} from "react";
import "./app.scss";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class Header extends Component {
    //constructor(props) {super(props);}
    render() {
        return (
    <div id="welcome-section">
         <h2>Welcome to my Web</h2>
     </div>
        );
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
        <a href="#contact-section">Contact Me</a>
        <a href="#project-section">My Project</a>
        <a href="#welcome-section">Home</a>  
      </nav>
        )
    }
}

class Body extends Component {
    render() {
        return (
            <div id="project-section">
                <h2 className="project-section-header">There are my several Project</h2>
                <div className="grid">
                    <a href="#" target="_blank" className="project project-title">
                        <img className="project-image" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg" alt="dog" />
                        <p className="project-title">
                            Dog Picture
                        </p>
                    </a>
                    <a href="#" target="_blank" className="project project-title">
                        <img className="project-image" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg" alt="dog" />
                        <p className="project-title">
                            Dog Picture
                        </p>
                    </a>
                    <a href="#" target="_blank" className="project project-title">
                        <img className="project-image" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg" alt="dog" />
                        <p className="project-title">
                            Dog Picture
                        </p>
                    </a>
                    <a href="#" target="_blank" className="project project-title">
                        <img className="project-image" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg" alt="dog" />
                        <p className="project-title">
                            Dog Picture
                        </p>
                    </a>
                    <a href="#" target="_blank" className="project project-title">
                        <img className="project-image" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg" alt="dog" />
                        <p className="project-title">
                            Dog Picture
                        </p>
                    </a>
                    <a href="#" target="_blank" className="project project-title">
                        <img className="project-image" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg" alt="dog" />
                        <p className="project-title">
                            Dog Picture
                        </p>
                    </a>
                    </div>
                    <a href="" target="_blank" className="btn btn-show-all">Show all</a>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
        <div>
        <section id="contact-section" className="contact">
            <h1>If you want to work together, Contact me!</h1>
            <div className="contact-link">
                <a href="#" target="_blank" className="btn contact-details"><i className="fa fa-facebook"></i>Facebook</a>
                <a href="#" target="_blank" className="btn contact-details"><i className="fa fa-github"></i>Github</a>
                <a href="#" target="_blank" className="btn contact-details"><i className="fa fa-at"></i>Email</a>
            </div>
        </section>
            <footer>
            <p>@Copyright of nobody</p>
            <p>Nothing is real</p>
        </footer>
        </div>
        )
    }
}
class Application extends Component {
    /*constructor(props) {
        super(props);
    }*/
    
    render() {
        return (
            <div>
                <Header />
                <Navbar />  
                <Body /> 
                <Footer />  
            </div>
        )
    }
}
export default Application;