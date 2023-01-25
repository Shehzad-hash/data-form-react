import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div>
       <div className="routes">
       <Link className="btn-danger routingBtn" to={"/"}>Company Schema</Link>
        <Link className="btn-danger routingBtn" to={"/instantProgramSchema"}>Instant Program</Link>
        <Link className="btn-danger routingBtn" to={"/oneStepProgram"}>One step Program</Link>
        <Link className="btn-danger routingBtn" to={"/priceSchema"}>Price Schema</Link>
        <Link className="btn-danger routingBtn" to={"/threeStepProgram"}>Three Step Program</Link>
        <Link className="btn-danger routingBtn" to={"/twoStepProgram"}>Two Step Program</Link>
       </div>
    </div>
  )
}
