import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {
    render() {

       let heading = "Soaring to new heights";
       let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae accumsan odio, vel maximus lorem. Proin auctor, mi vel ultrices ultrices, nulla risus maximus leo, vitae pellentesque elit nisi quis mauris.";
   
        return (
            <div>
                    <section className="hero is-medium is-link">
                    <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{ heading}</h1>
                        <div className="is-two-thirds column is-paddingless"></div>
                        <h2 className="subtitle is-4"> {subheading} </h2>
                    </div>
                    <a className="button is-large is-primary" id="learn">Learn more</a>
                </div>
                </section> 

                <section class="section">
                <div class="container">
                <div class="columns pd is-desktop">
                    <div class="column is-1 has-text-centered">
                        <i class="fas fa-cog is-primary"></i>
                    </div>
                    <div class="column is-one-third-desktop">
                    <p class="title"><strong>We provide superior logistics so that your business can flourish in a world that is loved by Jesus</strong></p>
                    </div>
                    <div class="column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae accumsan odio, vel maximus lorem. Proin auctor, mi vel ultrices ultrices, nulla risus maximus leo, vitae pellentesque elit nisi quis mauris.</p>
                    </div>
                </div> 


            <div class="columns pd">
            <div class="column">
                <div class="card">
                        <div class="card-content">
                        <p class="title">
                            It think it's an absolutely excellent tool for our business. I can't survive without this
                        </p>
                        <p class="subtitle">
                            - Gary Simon
                        </p>
                        </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                        <div class="card-content">
                        <p class="title">
                            It think it's an absolutely excellent tool for our business. I can't survive without this
                        </p>
                        <p class="subtitle">
                            - Gary Simon
                        </p>
                        </div>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                        <div class="card-content">
                        <p class="title">
                            It think it's an absolutely excellent tool for our business. I can't survive without this
                        </p>
                        <p class="subtitle">
                            - Gary Simon
                        </p>
                        </div>
                </div>
            </div>
            </div>

     </div>
  </section>



            </div>
        );
    }
}

export default Home;
