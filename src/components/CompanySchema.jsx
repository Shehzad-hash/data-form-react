import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function CompanySchema() {
  const [details, setDetails] = useState({
    // companyName: "",
    // companyLogo: "",
    // companyWebsite: "",
    // companyAffliateLink: "",
    // companyBrokerName: "",
    companyComissionsFXPerLot: "",
    companyMT4: "",
    companyMT5: "",
    companycTrader: "",
    companyTradingView: "",
    companyOtherPlatform: "",
    companyInstagram: "",
    companyInstagramLink: "",
    companyFacebook: "",
    companyFacebookLink: "",
    companyTwitter: "",
    companyTwitterLink: "",
    companyYoutube: "",
    companyYoutubeLink: "",
    companyTiktok: "",
    companyTiktokLink: "",
    companyDiscordServer: "",
    companyDiscordServerLink: "",
    companyTelegramChannel: "",
    companyTelegramChannelLink: "",
    companyOwnMobileApp: "",
    companyMobileAppImage: "",
    companyAccInothercurrencies: "",
    companyOtherCurrenciesSymbol: "",
    companyWebsiteScreenshot: "",
    companyWebsiteinOtherlanguages: "",
    companyDashboardImage: "",
    companyCustomerSupportLiveChat: "",
    companyCustomerSupportDays: "",
    companyCustomerSupportHours: "",
    companyAvgCustomerSupportResponseTime: "",
    companyTrustPilotStars: "",
    companyTrustPilotLink: "",
    companyCEOName: "",
    companyCEOImage: "",
    companyCEOCountry: "",
    companyCeoInstagram: "",
    companyCEOInstagramLink: "",
    companyLanguages: "",
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
                      {/* <label class="formLabel" for="">
                        Company Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Company Name"
                        name="companyName"
                        onChange={handleChange}
                      /> */}
                      {/* <label class="formLabel" for="">
                        Logo
                      </label>
                      <input
                        class="formFile"
                        type="file"
                        name="companyLogo"
                        onChange={handleChange}
                      /> */}
                      {/* <label class="formLabel" for="">
                        Website
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder=" Website"
                        name="companyWebsite"
                        onChange={handleChange}
                      /> */}
                      <label class="formLabel" for="">
                        Affliate Link
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder=" Affliate Link"
                        name="companyAffliateLink"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0">
                      <h2 class="formSubheading">Platform</h2>
                      {/* <label class="formLabel" for="">
                        Broker Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder=" Broker Name"
                        name="companyBrokerName"
                        onChange={handleChange}
                      /> */}
                      <label class="formLabel" for="">
                        Comissions FX perlot
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder=" Comissions FX perlot"
                        name="companyComissionsFXPerLot"
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
                            name="companyMT4"
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
                            name="companyMT5"
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
                            name="companycTrader"
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
                            name="companyTradingView"
                            onChange={handleChange}
                          />
                        </div>
                        <label class="formLabel" for="">
                          Other Platform
                        </label>
                        <input
                          class="formInput"
                          type="text"
                          placeholder=" Other Platform"
                          name="companyOtherPlatform"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Social Media</h2>
                  <div class="row">
                    <div class="col-lg-3">
                      <label class="formLabel" for=""></label>
                      <a class="formLinkBtn" href="#">
                        Instagram
                      </a>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyInstagram"
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
                        placeholder=" Instagram Link"
                        name="companyInstagramLink"
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
                        name="companyFacebook"
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
                        placeholder=" Facebook Link"
                        name="companyFacebookLink"
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
                        name="companyTwitter"
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
                        name="companyTwitterLink"
                        placeholder=" Twitter Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Youtube
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyYoutube"
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
                        name="companyYoutubeLink"
                        placeholder=" Youtube Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Tiktok
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyTiktok"
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
                        name="companyTiktokLink"
                        placeholder=" Tiktok Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Discord Server
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyDiscordServer"
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
                        name="companyDiscordServerLink"
                        placeholder="   Discord Server Link"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-3">
                      <label class="formLabel" for="">
                        Telegram Channel
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder=" Telegram Channel"
                        name="companyTelegramChannel"
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
                        placeholder=" Telegram Channel Link"
                        name="companyTelegramChannelLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Website</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Own Mobile App
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyOwnMobileApp"
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
                        name="companyMobileAppImage"
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
                        name="companyAccInothercurrencies"
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
                        placeholder=" Other Currencies Symbol"
                        name="companyOtherCurrenciesSymbol"
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
                        name="companyWebsiteScreenshot"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Website in Other languages
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyWebsiteinOtherlanguages"
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
                        placeholder=" Languages"
                        name="companyLanguages"
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
                        name="companyDashboardImage"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">Support</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Customer Support Live Chat
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        name="companyCustomerSupportLiveChat"
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
                        placeholder=" Customer Support Days"
                        name="companyCustomerSupportDays"
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
                        placeholder=" Customer Support Hours"
                        name="companyCustomerSupportHours"
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
                        placeholder=" Avg Customer Support Response Time"
                        name="companyAvgCustomerSupportResponseTime"
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
                        placeholder=" Trust Pilot Stars"
                        name="companyTrustPilotStars"
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
                        placeholder=" Trust Pilot Link"
                        name="companyTrustPilotLink"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <h2 class="formSubheading mt-3">CEO</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        CEO Name
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder=" CEO Name"
                        name="companyCEOName"
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
                        name="companyCEOImage"
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
                        placeholder=" CEO Country"
                        name="companyCEOCountry"
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
                        name="companyCeoInstagram"
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
                        placeholder=" CEO Instagram Link"
                        name="companyCEOInstagramLink"
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
