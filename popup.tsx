import { useState } from "react"
import CalendarComponent from "./components/calendar"
import 'react-calendar/dist/Calendar.css';

function IndexPopup() {

  return (
    <div
      style={{
        padding: 20,
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <CalendarComponent />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
