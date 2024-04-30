<template>
    <div :class="$style.desktop5">
          <div :class="$style.desktop5Inner">
                <div :class="$style.meetingRequestParent">
                      <div :class="$style.meetingRequest">
                            <div :class="$style.meetingRequest1">
                                  <div :class="$style.header64">
                                        <div :class="$style.container">
                                              <b :class="$style.shortHeadingHere">Request a meeting</b>
                                              <div :class="$style.loremIpsumDolor">Welcome to our meeting request page. We look forward to discussing your construction needs.</div>
                                        </div>
                                  </div>
                                  <div :class="$style.contact2">
                                        <div :class="$style.container">
                                              <div :class="$style.inputs">
                                                    <div :class="$style.input">
                                                          <div :class="$style.firstName">First name</div>
                                                          
                                                          <div :class="$style.typedefault"><input :class="$style.textField"></div>
                                                    </div>
                                                    <div :class="$style.input">
                                                          <div :class="$style.firstName">Last name</div>
                                                          <div :class="$style.typedefault"><input :class="$style.textField"></div>
                                                    </div>
                                              </div>
                                              <div :class="$style.inputs">
                                                    <div :class="$style.input">
                                                          <div :class="$style.firstName">Email</div>
                                                          <div :class="$style.typedefault"><input :class="$style.textField"></div>
                                                    </div>
                                                    <div :class="$style.input">
                                                          <div :class="$style.firstName">Phone number</div>
                                                          <div :class="$style.typedefault"><input :class="$style.textField"></div>
                                                    </div>
                                              </div>
                                              <div :class="$style.input4">
                                                    <div :class="$style.firstName">Choose Date/Time</div>
                                                    <div :class="$style.iconfalse">
                                                          <div :class="$style.selectOne">Select one...</div>
                                                          <img :class="$style.iconChevronDown" alt="" src="" />
                                                    </div>
                                              </div>
                                              <div :class="$style.radios">
                                                    <div :class="$style.whichBestDescribes">How should we meet?</div>
                                                          <div :class="$style.content2">
                                                                <div :class="$style.column">
                                                                      <div :class="$style.selectedfalse">
                                                                            <input type="radio" id="radiobtn"/>
                                                                            <div :class="$style.whichBestDescribes">Online meeting</div>
                                                                      </div>
                                                                      <div :class="$style.selectedfalse1">
                                                                            <input type="radio" id="radiobtn"/>
                                                                            <div :class="$style.whichBestDescribes">Face-to-face meeting</div>
                                                                      </div>
                                                                      <div :class="$style.selectedfalse2">
                                                                            <input type="radio" id="radiobtn"/>
                                                                            <div :class="$style.whichBestDescribes">Other (Please specify)</div>
                                                                      </div>
                                                                </div>
                                                          </div>
                                                          </div>
                                                          <div :class="$style.input4">
                                                                <div :class="$style.firstName">Upload Proposed Plan</div>
                                                                <div :class="$style.textArea">
                                                                      <div :class="$style.typeYourMessage">Drop File/Files</div>
                                                                      <img :class="$style.textAreaChild" alt="" src="" />
                                                                      <img :class="$style.textAreaItem" alt="" src="" />
                                                                </div>
                                                          </div>
                                                          <div :class="$style.submit">
                                                                <div :class="$style.stylesecondarySmallfalse">
                                                                      <div :class="$style.whichBestDescribes">Submit</div>
                                                                </div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          
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
            onN3ImageClick() {
                  // Add your code here
            }}})</script><style module>.content1 {
      width: 477px;
      height: 27px;
      overflow: hidden;
      flex-shrink: 0;
}


      .content {
            align-self: stretch;
            border-bottom: 1px solid #fff;
            box-sizing: border-box;
            height: 72px;
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0px 64px;
      }

      
      .navbar7 {
            width: 100vw;
            background-color: #fff;
            height: 170px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
      }
      .shortHeadingHere {
            align-self: stretch;
            position: relative;
            line-height: 120%;
      }
      .loremIpsumDolor {
            align-self: stretch;
            position: relative;
            font-size: 18px;
            line-height: 150%;
            color: #000;
      }
      .container {
            width: 768px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            
      }
      .header64 {
            width: 100vw;
            background-color: #fff;
            height: 250px;
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 112px 64px;
            box-sizing: border-box;
            font-size: 56px;
      }
      .firstName {
            align-self: stretch;
            position: relative;
            line-height: 150%;
      }
      .typedefault, .textField {
            align-self: stretch;
            background-color: #fff;
            border: 1px solid #000;
            box-sizing: border-box;
            height: 50px;
      }

      .textField {
            background: transparent;
            width: 100%;
            border: none;
      }
      .input {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 8px;
      }
      .placeholder {
            width: 536px;
            position: relative;
            line-height: 150%;
            display: none;
            flex-shrink: 0;
      }
      .typedefault1 {
            align-self: stretch;
            background-color: #fff;
            border: 1px solid #000;
            box-sizing: border-box;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 12px;
            color: #666;
      }
      .inputs {
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 24px;
      }
      .selectOne {
            flex: 1;
            position: relative;
            line-height: 150%;
      }
      .iconChevronDown {
            width: 24px;
            position: relative;
            height: 24px;
            overflow: hidden;
            flex-shrink: 0;
      }
      .iconfalse {
            align-self: stretch;
            background-color: #fff;
            border: 1px solid #000;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 12px;
            gap: 16px;
            color: #666;
      }
      .input4 {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 8px;
      }
      .whichBestDescribes {
            position: relative;
            line-height: 150%;
      }
      .radio {
            width: 20px;
            position: relative;
            border-radius: 100px;
            background-color: #fff;
            border: 1px solid #000;
            box-sizing: border-box;
            height: 20px;
            overflow: hidden;
            flex-shrink: 0;
      }
      .selectedfalse {
            width: 113px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
      }
      .selectedfalse1 {
            width: 118px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
      }
      .selectedfalse2 {
            width: 114px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
      }
      .column {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 14px;
      }
      .content2 {
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
      }
      .radios {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 16px 0px;
            gap: 16px;
      }
      .typeYourMessage {
            flex: 1;
            position: relative;
            line-height: 150%;
            z-index: 0;
      }
      .textAreaChild {
            width: 2px;
            position: absolute;
            margin: 0 !important;
            right: 2px;
            bottom: 1.76px;
            height: 2px;
            object-fit: contain;
            z-index: 1;
      }
      .textAreaItem {
            width: 6px;
            position: absolute;
            margin: 0 !important;
            right: 2px;
            bottom: 2px;
            height: 6px;
            object-fit: contain;
            z-index: 2;
      }
      .textArea {
            align-self: stretch;
            background-color: #fff;
            border: 1px solid #000;
            box-sizing: border-box;
            height: 182px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 12px;
            position: relative;
            color: #666;
      }
      .stylesecondarySmallfalse {
            background-color: #b42318;
            border: 1px solid #b42318;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
      }
      .submit {
            width: 99px;
            background-color: #b42318;
            border: 1px solid #b42318;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            color: #fff;
      }
      .contact2 {
            width: 100vw;
            background-color: #fff;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 112px 64px;
            box-sizing: border-box;
            text-align: left;
            color: #000;
      }
      .subheading {
            position: relative;
            line-height: 150%;
            font-weight: 600;
      }
      .text {
            align-self: stretch;
            position: relative;
            font-size: 18px;
            line-height: 150%;
      }
      .content3 {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 24px;
            text-align: left;
            font-size: 48px;
            color: #fc7e7e;
      }
      .sectionTitle {
            width: 768px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 16px;
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
      .content5 {
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
      .content4 {
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
            text-align: left;
            font-size: 32px;
            

      }
      .contact24 {
            width: 100vw;
            background-color: #03032b;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 112px 64px;
            box-sizing: border-box;
            gap: 80px;
            color: #fff;
      }
      .meetingRequest1 {
            position: absolute;
            top: 0px;
            left: 0px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
      }
      
      
      .projects {
            width: 92px;
            position: relative;
            height: 32px;
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
            height: 32px;
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
      .meetingRequest {
            width: 100vw;
            position: relative;
            height: 2139px;
            z-index: 0;
      }
      
      .meetingRequestParent {
            background-color: #fff;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            position: relative;
            gap: 10px;
      }
      .desktop5Inner {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
      }
      .desktop5 {
            width: 100%;
            position: relative;
            background-color: #fff;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            text-align: center;
            font-size: 16px;
            color: #a60202;
            font-family: Roboto;
      }

</style>