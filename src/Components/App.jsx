import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceAndroidSamsung from "./Pages/ServiceAndroidSamsung";
import ServiceIphone from './Pages/ServiceIphone'
// import ServiceAndroidSamsungFilter2017 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2017";
// import ServiceAndroidSamsungFilter2018 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2018";
// import ServiceAndroidSamsungFilter2019 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2019";
// import ServiceAndroidSamsungFilter2020 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2020";
// import ServiceAndroidSamsungFilter2021 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2021";
// import ServiceAndroidSamsungFilter2022 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2022";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/android/samsung" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/sort/years/2022" element={<ServiceAndroidSamsung years='2022' />} />
        <Route path="/service/android/samsung/sort/years/2021" element={<ServiceAndroidSamsung years='2021' />} />
        <Route path="/service/android/samsung/sort/years/2020" element={<ServiceAndroidSamsung years='2020' />} />
        <Route path="/service/android/samsung/sort/years/2019" element={<ServiceAndroidSamsung years="2019" />} />
        <Route path="/service/android/samsung/sort/years/2018" element={<ServiceAndroidSamsung years="2018" />} />
        <Route path="/service/android/samsung/sort/years/2017" element={<ServiceAndroidSamsung years="2017" />} />
        <Route path="/service/android/samsung/sort/years/2016" element={<ServiceAndroidSamsung years="2016" />} />
        <Route path="/service/iphone" element={<ServiceIphone />} />
        <Route path="/service/iphone/sort/years/2022" element={<ServiceIphone years="2022" />} />
        <Route path="/service/iphone/sort/years/2021" element={<ServiceIphone years="2021" />} />
        <Route path="/service/iphone/sort/years/2020" element={<ServiceIphone years="2020" />} />
        <Route path="/service/iphone/sort/years/2019" element={<ServiceIphone years="2019" />} />
        <Route path="/service/iphone/sort/years/2018" element={<ServiceIphone years="2018" />} />
        <Route path="/service/iphone/sort/years/2017" element={<ServiceIphone years="2017" />} />
        <Route path="/service/iphone/sort/years/2016" element={<ServiceIphone years="2016" />} />
      </Routes>
    </BrowserRouter>
  );
}
