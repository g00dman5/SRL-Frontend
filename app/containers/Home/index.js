/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import {Jumbotron } from 'react-bootstrap';

export default class Home extends React.PureComponent {
  render() {

    return(

      <header id="home">
          <nav class="navbar navbar-default" id="main-nav">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-12">
                          <div class="navbar-header">
                              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-morki">
                                  <span class="sr-only">Toggle navigation</span>
                                  <span class="icon-bar"></span>
                                  <span class="icon-bar"></span>
                                  <span class="icon-bar"></span>
                              </button>
                              <a class="navbar-brand" href="#">Morki</a>
                          </div>
                          <div class="collapse navbar-collapse navbar-morki">
                              <ul class="nav navbar-nav navbar-right">
                                  <li class="active"><a href="#home" data-scroll>Home</a></li>
                                  <li><a href="#services" data-scroll>Services</a></li>
                                  <li><a href="#features" data-scroll>Features</a></li>
                                  <li><a href="#screenshots" data-scroll>Screenshots</a></li>
                                  <li><a href="#price-table" data-scroll>Price</a></li>
                                  <li><a href="#testimonial" data-scroll>Testimonial</a></li>
                                  <li><a href="#blog" data-scroll>Blog</a></li>
                                  <li><a href="#contact" data-scroll>Contact</a></li>
                                  <li class="nav-download-btn"><a href="#download-app" data-scroll>Download</a></li>
                              </ul>

                      </div>
                  </div>
              </div>
          </nav>
      </header>



<body>

    <div class="preloader">
        ...
    </div>

    <header id="home">
        <nav class="navbar" id="">
            ...
        </nav>
    </header>


    <section class="intro">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="services" id="">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="about-app">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="app-features" id="">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="video-featured">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="screenshots" id="screenshots">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="counters">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="price-table" id="">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="testimonial" id="">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="team">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="download-app" id="download-app">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="change-log">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="faqs">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="blog" id="">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="clients-logo">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <section class="contact" id="">
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                ...
            </div>
        </div>
    </footer>

</body>


    )
  }
}
