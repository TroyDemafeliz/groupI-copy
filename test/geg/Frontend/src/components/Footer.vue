<template>
    <div :class="$style.contact24">
          <div :class="$style.sectionTitle">
                <div :class="$style.content">
                      <b :class="$style.heading">Contact Us</b>
                      <div :class="$style.text">We're here to answer any questions you may have.</div>
                      </div>
                </div>
                <div :class="$style.row">
                      <div :class="$style.content1">
                            <img :class="$style.iconEnvelope" alt="" src="./icons/envelope.png" />
                            <div :class="$style.contactInfo">
                                  <div :class="$style.content2">
                                        <b :class="$style.heading1">Email</b>
                                        <div :class="$style.text1">Send us an email and we'll get back to you.</div>
                                        </div>
                                        <div :class="$style.link">gegbcs@gmail.com</div>
                                  </div>
                            </div>
                            <div :class="$style.content1">
                                  <img :class="$style.iconEnvelope" alt="" src="./icons/message-detail.png" />
                                  <div :class="$style.contactInfo">
                                        <div :class="$style.content2">
                                              <b :class="$style.heading1">Facebook</b>
                                              <div :class="$style.text1">Chat with our team in real-time for immediate assistance.</div>
                                        </div>
                                        <div :class="$style.link">Facebook Link</div>
                                  </div>
                            </div>
                            <div :class="$style.content1">
                                  <img :class="$style.iconEnvelope" alt="" src="./icons/phone.png" />
                                  <div :class="$style.contactInfo">
                                        <div :class="$style.content2">
                                              <b :class="$style.heading1">Phone</b>
                                              <div :class="$style.text1">Give us a call and speak with our friendly team.</div>
                                        </div>
                                        <div :class="$style.link">0966 320 6811</div>
                                  </div>
                            </div>
                            <div :class="$style.content1">
                                  <img :class="$style.iconEnvelope" alt="" src="./icons/map.png" />
                                  <div :class="$style.contactInfo">
                                        <div :class="$style.content2">
                                              <b :class="$style.heading1">Office</b>
                                              <div :class="$style.text1">Visit our office for a face-to-face consultation.</div>
                                        </div>
                                        <div :class="$style.link">Zone 2 Canitoan, Cagayan de Oro, Philippines</div>
                                  </div>
                            </div>
                      </div>
                </div>
                </template>
                <script lang="ts">
                      import { defineComponent } from 'vue'
                      
                      
                      export default defineComponent({
                            name: "Contact"})</script><style module>.heading {
                            align-self: stretch;
                            position: relative;
                            line-height: 120%;
                      }
                            .text {
                                  align-self: stretch;
                                  position: relative;
                                  font-size: 18px;
                                  line-height: 150%;
                            }
                            .content {
                                  align-self: stretch;
                                  display: flex;
                                  flex-direction: column;
                                  align-items: center;
                                  justify-content: flex-start;
                                  gap: 24px;
                            }
                            .sectionTitle {
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
                            .content2 {
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
                            .content1 {
                                  flex: 1;
                                  display: flex;
                                  flex-direction: column;
                                  align-items: flex-start;
                                  justify-content: flex-start;
                                  gap: 24px;
                            }
                            .row {
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
                                  width: 100%;
                                  position: relative;
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
                                  font-size: 48px;
                                  color: #fc7e7e;
                                  font-family: Roboto;
                            }
                      
                      </style>