import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function CompanySchema() {
  const [details, setDetails] = useState({
    name: "",
    logo: "",
    instagram: "",
    facebook: "",
    instaLink: "",
    fbLink: "",
    website: "",
    affliateLink: "",
    brokerName: "",
    other: "",
    comissionsFXperlot: "",
    MT4: "",
    MT5: "",
    CTrader: "",
    tradingView: "",
    twitter: "",
    twitterLink: "",
    youtube: "",
    youtubeLink: "",
    tikTok: "",
    tikTokLink: "",
    discordServer: "",
    discordServerLink: "",
    telegramChannelLink: "",
    telegramChannel: "",
    ownMobileApp: "",
    mobileAppImage: "",
    accInotherCurrencies: "",
    websiteScreenshot: "",
    websiteinOtherLanguages: "",
    dashboardImage: "",
    languages: "",
    customerSupportLiveChat: "",
    customerSupportDays: "",
    avgCustomerSupportResponseTime: "",
    customerSupportHours: "",
    trustPilotStars: "",
    trustPilotLink: "",
    CEOName: "",
    CEOImage: "",
    CEOCountry: "",
    CEOInsta: "",
    CEOInstaLink: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const showChange = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <>
      <div class="formBodyWrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="formContents">
                <h1 class="formHeading">
                  <span>Company</span> Step Form
                </h1>
                <form action="">
                  <div class="row">
                    <div class="col-lg-6">
                      <h2 class="formSubheading">General Info</h2>
                      <label class="formLabel" for="">
                        Company Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Name"
                        name="name"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                       Company Logo
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="logo"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Company Website
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Website"
                        name="website"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Company Affliate Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Affliate Link"
                        name="affliateLink"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0">
                      <h2 class="formSubheading">Platform</h2>
                      <label class="formLabel" for="">
                        Company Broker Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Broker Name"
                        name="brokerName"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Company Comissions FX perlot
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Comissions FX perlot"
                        name="comissionsFXperlot"
                        onChange={handleChange}
                      />
                      <div class="row mt-2">
                        <div class="col-6">
                          <label class="formLabel" for="">
                            Company MT4
                          </label>
                          <input
                            class="commonCheckbox"
                            type="checkbox"
                            checked=""
                            name="MT4"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-6">
                          <label class="formLabel" for="">
                            Company MT5
                          </label>
                          <input
                            class="commonCheckbox"
                            type="checkbox"
                            name="MT5"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-6">
                          <label class="formLabel" for="">
                            Company CTrader
                          </label>
                          <input
                            class="commonCheckbox"
                            type="checkbox"
                            checked=""
                            name="CTrader"
                            onChange={handleChange}
                          />
                        </div>
                        <div class="col-6">
                          <label class="formLabel" for="">
                            Company Trading View
                          </label>
                          <input
                            class="commonCheckbox"
                            type="checkbox"
                            name="tradingView"
                            onChange={handleChange}
                          />
                        </div>
                        <label class="formLabel" for="">
                          Company Other Platform
                        </label>
                        <input
                          class="formInput"
                          type="text"
                          placeholder="Company Other Platform"
                          name="other"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Social Media</h2>
                  <div class="row">
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        
                      </label>
                      <a class="formLinkBtn" href="#">
                      Company Instagram
                      </a>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="instagram"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Instagram Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Instagram Link"
                        name="instaLink"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                      </label>
                      <a class="formLinkBtn" href="#">
                      Company Facebook
                      </a>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="facebook"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Facebook Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Facebook Link"
                        name="fbLink"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Twitter
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="twitter"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Twitter Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="twitterLink"
                        placeholder="Company Twitter Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Youtube
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="youtube"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Youtube Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="youtubeLink"
                        placeholder="Company Youtube Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Tiktok
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="tikTok"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Tiktok Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="tikTokLink"
                        placeholder="Company Tiktok Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Discord Server
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="discordServer"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Discord Server Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="discordServerLink"
                        placeholder="Company   Discord Server Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Telegram Channel
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Company Telegram Channel"
                        name="telegramChannel"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Company Telegram Channel Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Telegram Channel Link"
                        name="telegramChannelLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Website</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Own Mobile App
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="ownMobileApp"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Mobile App Image
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="mobileAppImage"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Acc Inother currencies
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="accInotherCurrencies"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Other Currencies Symbol
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Other Currencies Symbol"
                        name="otherCurrenciesSymbol"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Website Screenshot
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="websiteScreenshot"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Website in Other languages
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="websiteinOtherLanguages"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Languages
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Languages"
                        name="languages"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Dashboard Image
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="dashboardImage"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Support</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Customer Support Live Chat
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="customerSupportLiveChat"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Customer Support Days
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Customer Support Days"
                        name="customerSupportDays"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Customer Support Hours
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Customer Support Hours"
                        name="customerSupportHours"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Avg Customer Support Response Time
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Avg Customer Support Response Time"
                        name="avgCustomerSupportResponseTime"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Trust Pilot Stars
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Trust Pilot Stars"
                        name="trustPilotStars"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company Trust Pilot Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Trust Pilot Link"
                        name="trustPilotLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">CEO</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company CEO Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company CEO Name"
                        name="CEOName"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company CEO Image
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="CEOImage"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company CEO Country
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company CEO Country"
                        name="CEOCountry"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company CEO Instagram
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="CEOInsta"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Company CEO Instagram Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company CEO Instagram Link"
                        name="CEOInstaLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="formButton">
                    <button class="formBtn" type="submit" onClick={showChange}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
