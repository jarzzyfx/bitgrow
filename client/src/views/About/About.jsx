import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
         <section id="/about" class="about">
        <div class="company_img">
            <img src="./images/company_img.jpg" alt="img"/>
        </div>
        <div class="content">
            <div class="company_desc">
                <h2>Crypto finance company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ratione ipsa dolorum aspernatur quod nihil neque enim aperiam rem laboriosam possimus distinctio minus, beatae voluptatem deserunt similique dicta nisi fugit a aut velit. Ea aspernatur veritatis error sunt mollitia nostrum aut iure, provident rerum, dolorem corrupti, eaque neque asperiores enim! Expedita quis recusandae quae tempora illum excepturi? Distinctio culpa omnis ducimus nulla, voluptate earum. Ipsam enim fugit praesentium eius ex nisi? Praesentium optio, saepe, possimus consequatur quas nesciunt in placeat dolor labore dolore ab illum! Maxime voluptas illo repellat soluta magnam commodi est error cum voluptate nostrum quas, magni aut!</p>
            </div>
            <div class="about_services">
                <h2>what we provide</h2>
                <div class="abt_service_content">
                    <article class="service_content">
                        <div class="service_img">
                            <img src="./images/cash-register-svgrepo-com.svg" alt="img"/>
                        </div>
                        <h3>Easy Purchase of crypto currencies</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dolores. Nam sint rerum, voluptate recusandae alias debitis quas sapiente ducimus.</p>
                    </article>
                    <article class="service_content">
                        <div class="service_img">
                            <img src="./images/cash-register-svgrepo-com.svg" alt="img"/>
                        </div>
                        <h3>Easy Purchase of crypto currencies</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dolores. Nam sint rerum, voluptate recusandae alias debitis quas sapiente ducimus.</p>
                    </article>
                    <article class="service_content">
                        <div class="service_img">
                            <img src="./images/cash-register-svgrepo-com.svg" alt="img"/>
                        </div>
                        <h3>Easy Purchase of crypto currencies</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dolores. Nam sint rerum, voluptate recusandae alias debitis quas sapiente ducimus.</p>
                    </article>
                </div>
            </div>
            <div class="about_third_section">
                <h2>our core currency technologies</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eveniet reiciendis, odio consequatur aspernatur sed. Maiores quis architecto consequatur aspernatur.</p>
                <div class="third_container">
                    <div class="third_content">
                        <span>24/7/365</span>
                        <h4>support</h4>
                        <h5>Our dedicated team are always on the job for you</h5>
                    </div>
                    <div class="third_content">
                        <span>3 years</span>
                        <h4>Experience</h4>
                        <h5>How long we have been in this business</h5>
                    </div>
                    <div class="third_content">
                        <span>technicality</span>
                        <h4>technologies</h4>
                        <h5>our technologies help to ensure that your information is safe</h5>
                    </div>
                </div>
            </div>
            <section class="about_contact">
                <form action="" class="about_form">
                    <h2>GET IN TOUCH WITH US</h2>
                    <label for="usfirstname">
                        First Name
                        <input type="text" id="usfirstname" class="usfirstname"/>
                    </label>
                    <label for="uslastname">
                        Last Name
                        <input type="text" id="uslastname" class="uslastname"/>
                    </label>
                    <label for="usnumber">
                        Phone Number
                        <input type="text" id="usnumber" class="usnumber"/>
                    </label>
                    <label for="usemail">
                        Email
                        <input type="email" id="usemail" class="usemail"/>
                    </label>
                    <label for="usmesg">
                        Message
                        <textarea name="usmesg" id="usmesg" class="usmesg" cols="30" rows="10"></textarea>
                    </label>
                    <button class="btn contact_submit">Submit</button>
                </form>
            </section>
        </div>
    </section>
    </div>
  )
}

export default About