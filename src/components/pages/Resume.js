import React from 'react';
import HeinsResume from '../../images/HeinsResume.pdf'

export default function Home() {
  return (
    <div>
        <div class="columns my-4">
            <div class="row justify-content-center">

                <div class="col-sm"></div>

                <div class="col-8">
                    <div style={{fontWeight:'800'}} className="h4 my-3">
                        Summary
                    </div>
                    <div className="">
                    I started out in the technology field in 2016 selling computers at a Microsoft store. 
                    Since then, I’ve continued my education through Cybersecurity and Digital Forensics while 
                    working in IT support in business environments. Having recently taken an accelerated Full 
                    Stack Web Development program through the University of Washington, I’ve been able to 
                    combine my passion for art/design and background in computers — I hope to continue to expand 
                    my knowledge and ideas through the field of web development. 
                    </div>  
                    <div style={{fontWeight:'800'}} className="h4 my-3">
                        Education
                    </div>  
                    <div className="">
                        <div className="my-2">
                        Full Stack Web Development 
                        | University of Washington 2021
                        </div>
                        <div className="my-2">
                        Information Security 
                        | Edmonds College 2020
                        </div>
                        <div className="my-2">
                        Cybersecurity Forensic Analyst 
                        | Cybersecurity Institute 2017
                        </div>
                    </div> 
                    <div style={{fontWeight:'800'}} className="h4 my-3">
                        Skills
                    </div>  
                    <div class="row">
                        <div class="col-sm">
                        <div style={{fontWeight:'700'}}>MERN Stack</div>
                            <div>MongoDB</div>
                            <div>Express.js</div>
                            <div>React.js</div>
                            <div>Node.js</div>
                        </div>
                        <div class="col-sm">
                        <div style={{fontWeight:'700'}}>Dev</div>
                            <div>APIs</div>
                            <div>CSS/Frameworks</div>
                            <div>Javascript</div>
                            <div>Handlebars.js</div>
                            <div>MySQL</div>
                            <div>Git</div>
                        </div>
                        <div class="col-sm">
                        <div style={{fontWeight:'700'}}>Tools</div>
                            <div>VS Code</div>
                            <div>MySQL Workbench</div>
                            <div>Insomnia</div>
                            <div>Robo3T</div>
                            <div>Heroku</div>
                        </div>
                    </div> 
                    <div style={{fontWeight:'800'}} className="h4 my-3">
                        Projects
                    </div>  
                    <div className="">
                        See Portfolio
                    </div> 
                    <div style={{fontWeight:'800'}} className="h4 my-3">
                        Experience
                    </div>  
                    <div className="my-2">
                    Digital Forensics Lab Manager
                    | Edmonds College 2017-Present
                    </div> 
                    <div className="my-2">
                    Technical Specialist 
                    | Apple Nov 2019 - Jan 2021
                    </div>  
                    <div className="my-2">
                    IT Support 
                    | Blueprint Technologies Dec 2017 - July 2019
                    </div>  
                </div>

                <div class="col-sm"></div>

            </div>
        </div>

        <div class="columns my-4">
            <div class="row justify-content-center my-4">
                <a
                    href={HeinsResume} 
                    class="btn btn-dark text-info"
                    style={{width:200}}
                    download
                    >Download PDF
                </a>
            </div>
        </div>
    </div>

    );
}
