import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function PriceSchema() {
  const [details, setDetails] = useState({
    // programType: "",
    // accountSize: "",
    // program: "",
    // accountPrice: "",
    // programSize: "",
    monthlyFee: "",
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
                  Price <span>Schema</span>
                </h1>
                <form action="">
                  <h2 class="formSubheading">Price Schema</h2>
                  <div class="row">
                    <div class="col-lg-6">
                      {/* <label class="formLabel" for="">
                        Program Type
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        name="programType"
                        placeholder="Program Type"
                        onChange={handleChange}
                      /> */}
                      {/* <label class="formLabel" for="">
                        Program
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Program"
                        name="program"
                        onChange={handleChange}
                      /> */}
                      {/* <label class="formLabel" for="">
                        Program Size
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Program Size"
                        name="programSize"
                        onChange={handleChange}
                      /> */}
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0">
                      {/* <label class="formLabel" for="">
                        Account Size
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Program"
                        name="accountSize"
                        onChange={handleChange}
                      /> */}
                      {/* <label class="formLabel" for="">
                        Account Price
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Account Price"
                        name="accountPrice"
                        onChange={handleChange}
                      /> */}
                      <label class="formLabel" for="">
                        Monthly Fee
                      </label>
                      <input
                        class="formInput"
                        type="text"
                        placeholder="Monthly Fee"
                        name="monthlyFee"
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
