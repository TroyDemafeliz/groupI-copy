<template>
  <div :class="$style.AdminHome">
        <div :class="$style.homeParent">
              <div :class="$style.home">
                    
                    
                    <div :class="$style.header30">
                          <div :class="$style.column">
                                <div :class="$style.content">
                                      <b :class="$style.mediumLengthHero">GEG Builders and Construction Supplies</b>
                                      <div :class="$style.loremIpsumDolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
                                </div>
                                <div :class="$style.actions">
                                      <router-link style="text-decoration: none; color: inherit;" to="/request">
                                          <div :class="$style.styleprimarySmallfalseDa" @click="onStylePrimarySmallFalseDaClick">
                                            <b :class="$style.button">Book Now</b>
                                      </div>  
                                      </router-link>
                                </div>
                          </div>
                    </div>
                    <div :class="$style.layout239">
                          <div :class="$style.sectionTitle">
                                <div :class="$style.content">
                                      <b :class="$style.heading">What we Offer</b>
                                      <div :class="$style.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
                                </div>
                          </div>
                          <div :class="$style.content2">
                                <div :class="$style.row">
                                      <div :class="$style.column1">
                                            <img :class="$style.placeholderImageIcon" alt="" src="../components/icons/Placeholder.png" />
                                            <div :class="$style.content">
                                                  <b :class="$style.heading1">Service 1</b>
                                                  <div :class="$style.text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</div>
                                            </div>
                                      </div>
                                      <div :class="$style.column1">
                                            <img :class="$style.placeholderImageIcon" alt="" src="../components/icons/Placeholder.png" />
                                            <div :class="$style.content">
                                                  <b :class="$style.heading1">Service 2</b>
                                                  <div :class="$style.text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</div>
                                            </div>
                                      </div>
                                      <div :class="$style.column1">
                                            <img :class="$style.placeholderImageIcon" alt="" src="../components/icons/Placeholder.png" />
                                            <div :class="$style.content">
                                                  <b :class="$style.heading1">Service 3</b>
                                                  <div :class="$style.text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</div>
                                            </div>
                                      </div>
                                </div>
                                <div :class="$style.viewServices">
                                 <router-link style="text-decoration: none; color: inherit;" to="/services">
                                      <div :class="$style.stylesecondarySmallfalse">
                                <button :class="$style.button">View Services</button>
                                      </div>
                                </router-link>
                                </div>
                                <div :class="$style.actions1" />
                          </div>
                    </div>
                    <div :class="$style.layout3" />
                    <div :class="$style.layout22">
                          <div :class="$style.container">
                                <div :class="$style.content6">
                                      <div :class="$style.sectionTitle1">
                                            <div :class="$style.contactInfo">
                                                  <b :class="$style.heading">Latest Project</b>
                                                  <div :class="$style.text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
                                            </div>
                                      </div>
                                      <div :class="$style.actions2">
                                            <div :class="$style.projectGallery">
                                            <RouterLink style="text-decoration: none; color: inherit;" to="/projects">
                                                  <div :class="$style.stylesecondarySmallfalse">
                                                        <div :class="$style.button">View Project Gallery</div>
                                                  </div>
                                            </RouterLink>
                                            </div>
                                      </div>
                                </div>
                                <img :class="$style.placeholderImageIcon3" alt="" src="../components/icons/Placeholder.png" />
                          </div>
                    </div>
                    
                          </div>
                          
                    </div>
              </div>
              </template>
              <script lang="ts">
                    import { defineComponent } from 'vue'
                    
                    
                    export default defineComponent({
                          name: "Desktop",
                          methods: {
                                onStylePrimarySmallFalseDaClick() {
                                      // Add your code here
                                }}})</script><style module>.header46 {
                          width: 100vw;
                          background-color: #fff;
                          height: 369px;
                          overflow: hidden;
                          flex-shrink: 0;
                          display: none;
                    }
                          .n2Icon {
                                width: 608px;
                                position: relative;
                                height: 140.1px;
                                object-fit: cover;
                          }

                          router-link {
                                text-decoration: none;
                                color: #fff;
                          }
                          .mediumLengthHero {
                                position: relative;
                                line-height: 120%;
                                text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
                          }
                          .loremIpsumDolor {
                                align-self: stretch;
                                position: relative;
                                font-size: 18px;
                                line-height: 150%;
                                text-align: justify;
                          }
                          .content {
                                align-self: stretch;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 24px;
                          }
                          .button {
                                position: relative;
                                line-height: 150%;
                                background-color: transparent;
                                border: none;
                          }
                          .styleprimarySmallfalseDa {
                                background-color: #c12020;
                                border: 1px solid #000;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                                padding: 12px 24px;
                                cursor: pointer;
                          }
                          .actions {
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: flex-start;
                                padding: 16px 0px 0px;
                                text-align: left;
                                font-size: 16px;
                                color: #e8e9fe;
                          }
                          .column {

                                width: 768px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 24px;
                          }
                          .header30 {
                                width: 100vw;
                                height: 900px;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: flex;
                                background-image:url("../components/icons/GEGpic.png");
                                background-size: cover;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                                background-repeat: no-repeat;
                                background-position: top;
                                font-size: 56px;
                                color: #fff;
                          }
                          .heading {
                                align-self: stretch;
                                position: relative;
                                line-height: 120%;
                          }
                          .text {
                                align-self: stretch;
                                position: relative;
                                font-size: 18px;
                                line-height: 150%;
                                color: #000;
                          }
                          .sectionTitle {
                                width: 768px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: flex-start;
                          }
                          .placeholderImageIcon {
                                align-self: stretch;
                                position: relative;
                                max-width: 100%;
                                overflow: hidden;
                                height: 240px;
                                flex-shrink: 0;
                                object-fit: cover;
                          }
                          .heading1 {
                                align-self: stretch;
                                position: relative;
                                line-height: 130%;
                          }
                          .text1 {
                                align-self: stretch;
                                position: relative;
                                font-size: 16px;
                                line-height: 150%;
                          }
                          .column1 {
                                flex: 1;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                                gap: 32px;
                          }
                          .row {
                                width: 1312px;
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: center;
                                gap: 48px;
                          }
                          .actions1 {
                                width: 200px;
                                height: 64px;
                          }
                          .content2 {
                                align-self: stretch;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 48px;
                                font-size: 32px;
                                color: #000;
                          }
                          .layout239 {
                                width: 100vw;
                                background-color: #fff;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: flex-start;
                                padding: 112px 64px;
                                box-sizing: border-box;
                                gap: 80px;
                          }
                          .layout3 {
                                width: 100vw;
                                background-color: #fff;
                                height: 864px;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: none;
                          }
                          .sectionTitle1 {
                                align-self: stretch;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                          }
                          .stylesecondarySmallfalse {
                                border: 1px solid #000;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                                padding: 12px 24px;
                          }
                          .projectGallery {
                                
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: flex-start;
                          }
                          .actions2 {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-start;
                                padding: 16px 0px 0px;
                                font-size: 16px;
                                color: #000;
                          }
                          .content6 {
                                flex: 1;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                                gap: 24px;
                          }
                          .placeholderImageIcon3 {
                                flex: 1;
                                position: relative;
                                max-width: 100%;
                                overflow: hidden;
                                height: 640px;
                                object-fit: cover;
                          }
                          .container {
                                align-self: stretch;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 80px;
                          }
                          .layout22 {
                                width: 100vw;
                                background-color: #fff;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                                padding: 112px 64px;
                                box-sizing: border-box;
                                text-align: left;
                          }
                          .cta7 {
                                width: 100vw;
                                background-color: #fff;
                                height: 100vh;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: none;
                          }
                          .layout233 {
                                width: 100vw;
                                background-color: #fff;
                                height: 588px;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: none;
                          }
                          .text5 {
                                align-self: stretch;
                                position: relative;
                                font-size: 18px;
                                line-height: 150%;
                          }
                          .sectionTitle2 {
                                width: 768px;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                          }
                          .iconEnvelope {
                                width: 48px;
                                position: relative;
                                height: 48px;
                                overflow: hidden;
                                flex-shrink: 0;
                          }
                          .content10 {
                                align-self: stretch;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                                gap: 16px;
                          }
                          .link {
                                align-self: stretch;
                                position: relative;
                                font-size: 16px;
                                text-decoration: underline;
                                line-height: 150%;
                          }
                          .contactInfo {
                                align-self: stretch;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                                gap: 24px;
                          }
                          .row1 {
                                align-self: stretch;
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: flex-start;
                                gap: 32px;
                                font-size: 32px;
                                color: #fff;
                          }
                          .contact24 {
                                width: 100vw;
                                height: 100vh;
                                background-color: #03032b;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                                padding: 112px 64px;
                                box-sizing: border-box;
                                gap: 80px;
                                text-align: left;
                                color: #fc7e7e;
                          }
                          .footer7 {
                                width: 100vw;
                                background-color: #03032b;
                                height: 100vh;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: none;
                          }
                          .home {
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                justify-content: flex-start;
                          }
                          .tablereditIcon {
                                position: absolute;
                                top: 150px;
                                left: 1375px;
                                width: 50px;
                                height: 50px;
                                display: none;
                          }
                          .aboutUs1 {
                                position: absolute;
                                height: 100%;
                                width: 100%;
                                top: 0%;
                                left: 0%;
                                line-height: 150%;
                                display: inline-block;
                          }
                          .aboutUs {
                                width: 122px;
                                position: relative;
                                height: 35px;
                          }
                          .aboutUs2 {
                                width: 106px;
                                position: relative;
                                height: 35px;
                          }
                          .projects {
                                width: 92px;
                                position: relative;
                                height: 34px;
                          }
                          .services1 {
                                position: absolute;
                                height: 100%;
                                width: 105.43%;
                                top: 0%;
                                left: 0%;
                                line-height: 150%;
                                display: inline-block;
                          }
                          .requestMeeting1 {
                                position: absolute;
                                height: 100%;
                                width: 205.43%;
                                top: 0%;
                                left: 0%;
                                line-height: 150%;
                                display: inline-block;
                          }
                          .requestMeeting {
                                width: 92px;
                                position: relative;
                                height: 34px;
                                color: #bf2121;
                          }
                          .frame {
                                position: absolute;
                                top: 40px;
                                left: 624px;
                                width: 688px;
                                height: 100px;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                                gap: 30px;
                                text-align: left;
                                font-size: 25px;
                                color: #000;
                                }
                          .homeParent {
                                width: 100vw;
                                position: relative;
                                height: 3580.1px;
                                z-index: 0;
                          }
                          .viewServices {
                                margin: 0 !important;
                                position: absolute;
                                top: 1914px;
                                left: 700px;
                                display: flex;
                                flex-direction: row;
                                align-items: flex-start;
                                justify-content: flex-start;
                                z-index: 1;
                                text-align: center;
                                font-size: 16px;
                                color: #000;
                          }
                          .AdminHome {
                                width: 100%;
                                position: relative;
                                background-color: #fff;
                                overflow: hidden;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                align-items: flex-start;
                                justify-content: flex-start;
                                text-align: center;
                                font-size: 48px;
                                color: #a60202;
                                font-family: Roboto;
                          }
                    
                    </style>