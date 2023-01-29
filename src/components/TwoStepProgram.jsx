import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function TwoStepProgram() {
  const [details, setDetails] = useState({
    iDProgramType: "",
    companyName: "",
    iDProgram: "",
    programName: "",
    minimumDays: "",
    phaseOneDays: "",
    phaseOneTarget: "",
    phaseTwoDays: "",
    phaseTwoTarget: "",
    dailyLossPercentage: "",
    maxLossType: "",
    maxLossPercentage: "",
    leverage: "",
    refundPercentage: "",
    firstProfitSplit: "",
    firstWithdrawal: "",
    profitsfromChallenge: "",
    profitfromChallengePercentage: "",
    minimumTimeToPayout: "",
    maxProfitSplit: "",
    maxFundedAllocation: "",
    scalingPlanProfitTarget: "",
    scalingPlanBenefits: "",
    maxAllocationWithScaling: "",
    minimumTimetoGet1MfromMaxAllocation: "",
    sLRequired: "",
    lotSizeRestriction: "",
    lotSizeRestrictionExplained: "",
    newsTrading: "",
    eAsAllowed: "",
    weekendHolding: "",
    cryptoTradingOnWeekends: "",
    cryptoTradingOnWeekendsExplained: "",
    consistencyRule: "",
    otherRestrictions: "",
    dailyLossType:""
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
                Two Step <span>Program</span>
              </h1>
              <form action="">
                <h2 class="formSubheading">Program</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <label class="formLabel" for="">
                     Id Program Type
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Id Program Type"
                      name="iDProgramType"
                      
                    onChange={handleChange} />
                    <label class="formLabel" for="">
                      Company Name
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Company Name"
                      name="companyName"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-6 mt-5 mt-lg-0">
                    <label class="formLabel" for="">
                     Id Program
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Id Program"
                      name="iDProgram"
                      
                    onChange={handleChange} />

                    <label class="formLabel" for="">
                      Program Name
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Program Name"
                      name="programName"
                      
                    onChange={handleChange} />

                  </div>
                </div>
                <h2 class="formSubheading mt-3">General Info</h2>
                <div class="row">
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Minimum Days
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Minimum Days"
                      name="minimumDays"
                      
                    onChange={handleChange} />
              
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Phase One Days
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Phase One Days"
                      name="phaseOneDays"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Phase One Target
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Phase One Target"
                      name="phaseOneTarget"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Phase Two Days
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Phase Two Days"
                      name="phaseTwoDays"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Phase Two Target
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Phase Two Target"
                      name="phaseTwoTarget"
                      
                    onChange={handleChange} />
                  </div>

                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Daily Loss Type
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Daily Loss Type"
                      name="dailyLossType"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Daily Loss Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Daily Loss Percentage"
                      name="dailyLossPercentage"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Max Loss Type
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Max Loss Type"
                      name="maxLossType"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Max Loss Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Max Loss Percentage"
                      name="maxLossPercentage"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Leverage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Leverage"
                      name="leverage"
                      
                    onChange={handleChange} />
                  </div>
                  </div>
       
                  <h2 class="formSubheading mt-3">Profit</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Refund Percentage
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Refund Percentage"
                        name="refundPercentage"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        First Profit Split
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="First Profit Split"
                        name="firstProfitSplit"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        First Withdrawal
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="First Withdrawal"
                        name="firstWithdrawal"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Profits From Challenge
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Profits From Challenge"
                        name="profitsfromChallenge"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Profit From Challenge Percentage
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Profit From Challenge Percentage"
                        name="profitfromChallengePercentage"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Minimum Time To Payout
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Minimum Timr To Payout"
                        name="minimumTimeToPayout"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Max Profit Split
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Max Profit Split"
                        name="maxProfitSplit"
                        
                      onChange={handleChange} />
                  </div>
              
                  <h2 class="formSubheading mt-3">Scaling</h2>
                  <div class="row">
                    
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Max Funded Allocation
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Max Funded Allocation"
                      name="maxFundedAllocation"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Scaling Plan Profit Target
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Scaling Plan Profit Target"
                      name="scalingPlanProfitTarget"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Scaling Plan Benefits
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Scaling Plan Benefits"
                      name="scalingPlanBenefits"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Max Allocation With Scaling
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Max Allocation With Scaling"
                      name="maxAllocationWithScaling"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Minimum Time To Get1M From Max Allocation
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Minimum Time To Get1M From Max Allocation"
                      name="minimumTimetoGet1MfromMaxAllocation"
                      
                    onChange={handleChange} />
                  </div>
                  </div>
             
                  <h2 class="formSubheading mt-3">Restrictions</h2>
                  <div class="row">
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        SL Required
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="SL Required"
                        name="sLRequired"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Lot Size Restriction
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Lot Size Restriction"
                        name="lotSizeRestriction"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Lot Size Restriction Explained
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Lot Size Restriction Explained"
                        name="lotSizeRestrictionExplained"
                        
                      onChange={handleChange} />
                    </div>
                  
          
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        News Trading
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="News Trading"
                        name="newsTrading"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        EAs Allowed
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="EAs Allowed"
                        name="eAsAllowed"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Weekend Holding
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Weekend Holding"
                        name="weekendHolding"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Crypto Trading On Weekends
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Crypto Trading On Weekends"
                        name="cryptoTradingOnWeekends"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Crypto Trading On Weekends Explained
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Crypto Trading On Weekends Explained"
                        name="cryptoTradingOnWeekendsExplained"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Consistency Rule
                      </label>
                      <input
                        class="commonCheckbox"
                        type="checkbox"
                        placeholder="Consistency Rule"
                        name="consistencyRule"
                        
                      onChange={handleChange} />
                    </div>
                    <div class="col-lg-4">
                      <label class="formLabel" for="">
                        Other Restrictions
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Other Restrictions"
                        name="otherRestrictions"
                        
                      onChange={handleChange} />
                    </div>               
                  </div>
                </div>
                <div class="formButton">
                  <button class="formBtn" type="submit" onClick={showChange}>Submit</button>
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
