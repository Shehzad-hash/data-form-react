import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function InstantProgramSchema() {
  const [details, setDetails] = useState({
    idProgramType: "",
    companyName: "",
    idProgram: "",
    programName: "",
    dailyLoss: "",
    dailyLossPercentage: "",
    maxLossType: "",
    maxLossPercentage: "",
    Leverage: "",
    refundPercentage: "",
    firstProfitSplit: "",
    firstWithdrawal: "",
    profitsFromChallenge: "",
    profitsFromChallengePercentage: "",
    minimumTimetoPayout: "",
    maxProfitSplit: "",
    maxFundedAllocation: "",
    scalingPlanFirstProfitTarget: "",
    scalingPlanOngoingProfitTargets: "",
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
    cryptoTradingonWeekendsExplained: "",
    consistencyRule: "",
    otherRestrictions: "",
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
                Instant Program <span>Schema</span>
              </h1>
              <form action="">
               <div class="row">
                 <div class="col-lg-6">
                    <h2 class="formSubheading">Program</h2>
                    <label class="formLabel" for="">
                     Id Program Type
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Id Program Type"
                      name="idProgramType"
                      
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
                    <label class="formLabel" for="">
                     Id Program
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Id Program"
                      name="idProgram"
                      
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
                  <div class="col-lg-6 mt-5 mt-lg-0">
                    <h2 class="formSubheading">General Info</h2>
                    <label class="formLabel" for="">
                      Daily Loss
                    </label>
                    <input
                      class="commonCheckbox"
                      type="checkbox"
                      name="dailyLoss"
                      
                    onChange={handleChange} />

                    <label class="formLabel" for="">
                      Daily Loss Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Daily Loss Percentage"
                      name="dailyLossPercentage"
                      
                    onChange={handleChange} />
                    <label class="formLabel" for="">
                      Max Loss Type
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Max Loss Type"
                      name="maxLossType"
                      
                    onChange={handleChange} />
                    <label class="formLabel" for="">
                      Max Loss Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Max Loss Percentage"
                      name="maxLossPercentage"
                      
                    onChange={handleChange} />
              
                    <label class="formLabel" for="">
                      Leverage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Leverage"
                      name="Leverage"
                      
                    onChange={handleChange} />
               
                  </div>
                </div>
                <h2 class="formSubheading mt-3">Profit Percentage</h2>
                <div class="row">
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Refund Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Refund"
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
                    <input class="commonCheckbox" type="checkbox" name="profitsFromChallenge" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Profits From Challenge Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Profits From Challenge Percentage"
                      name="profitsFromChallengePercentage"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Minimum Time To Payout
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Minimum Time To Payout"
                      name="minimumTimetoPayout"
                      
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
                      Scaling Plan First Profit Target
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Scaling Plan First Profit Target"
                      name="scalingPlanFirstProfitTarget"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Scaling Plan Ongoing Profit Targets
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Scaling Plan Ongoing Profit Targets"
                      name="scalingPlanOngoingProfitTargets"
                      
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
                      Max AllocationWith Scaling
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
                <h2 class="formSubheading">Restrictions</h2>
                <div class="row">
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      SL Required
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="sLRequired" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Lot Size Restriction
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="lotSizeRestriction" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Lot Size Restriction Explained
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="lotSizeRestrictionExplained" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      News Trading
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="newsTrading" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      EAs Allowed
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="eAsAllowed" onChange={handleChange} />
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
                    <input class="commonCheckbox" type="checkbox" name="cryptoTradingOnWeekends" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Crypto Tradingon Weekends Explained
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="cryptoTradingonWeekendsExplained" onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Consistency Rule
                    </label>
                    <input class="commonCheckbox" type="checkbox" name="consistencyRule" onChange={handleChange} />
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
