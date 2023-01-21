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
                  <Link to={"/instantProgramSchema"} style={{ color: "blue" }}>
                    Next
                  </Link>
                  <div class="row">
                    <div class="col-lg-6">
                      <h2 class="formSubheading">About Company</h2>
                      <label class="formLabel" for="">
                        Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Logo
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="logo"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Website
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Website"
                        name="website"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Affliate Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Affliate Link"
                        name="affliateLink"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Broker Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Broker Name"
                        name="brokerName"
                        onChange={handleChange}
                      />
                      <label class="formLabel" for="">
                        Other Platform
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Other Platform"
                        name="other"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0">
                      <h2 class="formSubheading">Company Details</h2>
                      <label class="formLabel" for="">
                        Comissions FX perlot
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Comissions FX perlot"
                        name="comissionsFXperlot"
                        onChange={handleChange}
                      />
                      <div class="row mt-2">
                        <div class="col-6">
                          <label class="formLabel" for="">
                            MT4
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
                            MT5
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
                            CTrader
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
                            Trading View
                          </label>
                          <input
                            class="commonCheckbox"
                            type="checkbox"
                            name="tradingView"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Social Links</h2>
                  <div class="row">
                    <div class="col-lg-3">
                      <label class="formLabel" for=""></label>
                      <a class="formLinkBtn" href="#">
                        Instagram
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
                        Instagram Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Instagram Link"
                        name="instaLink"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for=""></label>
                      <a class="formLinkBtn" href="#">
                        Facebook
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
                        Facebook Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Facebook Link"
                        name="fbLink"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Twitter
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
                        Twitter Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="twitterLink"
                        onChange={handleChange}
                        placeholder="Twitter Link"
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Youtube
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
                        Youtube Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="youtubeLink"
                        onChange={handleChange}
                        placeholder="Youtube Link"
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Tiktok
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
                        Tiktok Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="tikTokLink"
                        onChange={handleChange}
                        placeholder="Tiktok Link"
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Discord Server
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
                        Discord Server Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="discordServerLink"
                        onChange={handleChange}
                        placeholder="  Discord Server Link"
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Telegram Channel
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Telegram Channel"
                        name="telegramChannel"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Telegram Channel Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Telegram Channel Link"
                        name="telegramChannelLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">More Details</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Own Mobile App
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
                        Mobile App Image
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
                        Acc Inother currencies
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
                        Other Currencies Symbol
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Other Currencies Symbol"
                        name="otherCurrenciesSymbol"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Website Screenshot
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
                        Websitein Other languages
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
                        Dashboard Image
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="dashboardImage"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Languages
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Languages"
                        name="languages"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">User Details</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Customer Support Live Chat
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
                        Customer Support Days
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Customer Support Days"
                        name="customerSupportDays"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Customer Support Hours
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Customer Support Hours"
                        name="customerSupportHours"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Avg Customer Support Response Time
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Avg Customer Support Response Time"
                        name="avgCustomerSupportResponseTime"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Trust Pilot Stars
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Trust Pilot Stars"
                        name="trustPilotStars"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Trust Pilot Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Trust Pilot Link"
                        name="trustPilotLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">CEO Details</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        CEO Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="CEO Name"
                        name="CEOName"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        CEO Image
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
                        CEO Country
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="CEO Country"
                        name="CEOCountry"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        CEO Instagram
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
                        CEO Instagram Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="CEO Instagram Link"
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
