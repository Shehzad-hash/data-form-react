import React,{useState} from "react";
import { Link } from "react-router-dom";
export default function OneStepProgram() {
  const [details, setDetails] = useState({
   PT:"",
   PN:"",
   company:"",
   minDays:"",
   CN:"",
   POD:"",
   program:"",
   POT:"",
   DL:"",
   DLP:"",
   MLT:"",
   MLP:"",
   leverage:"",
   RP:"",
   FPS:"",
   FW:"",
   PFC:"",
   PFCP:"",
   MTTP:"",
   MPS:"",
   MFA:"",
   SPPT:"",
   SPB:"",
   MAWS:"",
   minTo1m:"",
   SLRequired:"",
   LSR:"",
   LSRE:"",
   newsTrading:"",
   EAsAllowed:"",
   WH:"",
   CTOW:"",
   CTOWE:"",
   consistencyRule:"",
   otherRestrictions:""


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
                One Step <span>Program</span>
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
                      name="PT"
                      
                    onChange={handleChange} />

                    <label class="formLabel" for="">
                      Company Name
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Company Name"
                      name="CN"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-6">
                    <label class="formLabel" for="">
                     Id Program
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Id Program"
                      name="program"
                      
                    onChange={handleChange} />
                    <label class="formLabel" for="">
                      Program Name
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Program Name"
                      name="PN"
                      
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
                      name="minDays"
                      
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
                      name="POD"
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Phase One Targets
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Phase One Targets"
                      name="POT"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Daily Loss
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Daily Loss"
                      name="DL"
                      
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
                      name="DLP"
                      
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
                      name="MLT"
                      
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
                      name="MLP"
                      
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
                      Refund Percentag
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Refund Percentag"
                      name="RP"
                      
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
                      name="FPS"
                      
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
                      name="FW"
                      
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
                      name="PFC"
                      
                    onChange={handleChange} />
                  </div>
                  <div class="col-lg-4">
                    <label class="formLabel" for="">
                      Profit From Challenge Percentage
                    </label>
                    <input
                      class="formInput"
                      type="text"
                      placeholder="Profits From Challenge Percentage"
                      name="PFCP"
                      
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
                      name="MTTP"
                      
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
                      name="MPS"
                      
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
                      name="MFA"
                      
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
                      name="SPPT"
                      
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
                      name="SPB"
                      
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
                      name="MAWS"
                      
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
                      name="minTo1m"
                      
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
                      name="SLRequired"
                      
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
                      name="LSR"
                      
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
                      name="LSRE"
                      
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
                      name="EAsAllowed"
                      
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
                      name="WH"
                      
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
                      name="CTOW"
                      
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
                      name="CTOWE"
                      
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
