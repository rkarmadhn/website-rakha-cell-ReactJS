import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceAndroidSamsung from "./Pages/ServiceAndroidSamsung";
import ServiceAndroidSamsungFilter2016 from "./Pages/Filter Page/Samsung Page/ServiceAndroidSamsungFilter2016";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/android/samsung" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2022" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2021" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2020" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2019" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2018" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2017" element={<ServiceAndroidSamsung />} />
        <Route path="/service/android/samsung/filter/2016" element={<ServiceAndroidSamsungFilter2016 />} />
      </Routes>
    </BrowserRouter>
  );
}
