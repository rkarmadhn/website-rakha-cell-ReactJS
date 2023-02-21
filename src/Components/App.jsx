import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceAndroidSamsung from "./Pages/ServiceAndroidSamsung";
import ServiceIphone from './Pages/ServiceIphone'
import ServiceAndroidOppo from "./Pages/ServiceAndroidOppo";
import ServiceAndroidXiaomi from './Pages/ServiceAndroidXiaomi'
import ServiceAndroidVivo from './Pages/ServiceAndroidVivo'

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
        <Route path="/service/android/oppo" element={<ServiceAndroidOppo />} />
        <Route path="/service/android/oppo/sort/years/2022" element={<ServiceAndroidOppo years="2022" />} />
        <Route path="/service/android/oppo/sort/years/2021" element={<ServiceAndroidOppo years="2021" />} />
        <Route path="/service/android/oppo/sort/years/2020" element={<ServiceAndroidOppo years="2020" />} />
        <Route path="/service/android/oppo/sort/years/2019" element={<ServiceAndroidOppo years="2019" />} />
        <Route path="/service/android/oppo/sort/years/2018" element={<ServiceAndroidOppo years="2018" />} />
        <Route path="/service/android/oppo/sort/years/2017" element={<ServiceAndroidOppo years="2017" />} />
        <Route path="/service/android/oppo/sort/years/2016" element={<ServiceAndroidOppo years="2016" />} />
        <Route path="/service/android/xiaomi" element={<ServiceAndroidXiaomi />} />
        <Route path="/service/android/xiaomi/sort/years/2022" element={<ServiceAndroidXiaomi years="2022" />} />
        <Route path="/service/android/xiaomi/sort/years/2021" element={<ServiceAndroidXiaomi years="2021" />} />
        <Route path="/service/android/xiaomi/sort/years/2020" element={<ServiceAndroidXiaomi years="2020" />} />
        <Route path="/service/android/xiaomi/sort/years/2019" element={<ServiceAndroidXiaomi years="2019" />} />
        <Route path="/service/android/xiaomi/sort/years/2018" element={<ServiceAndroidXiaomi years="2018" />} />
        <Route path="/service/android/xiaomi/sort/years/2017" element={<ServiceAndroidXiaomi years="2017" />} />
        <Route path="/service/android/xiaomi/sort/years/2016" element={<ServiceAndroidXiaomi years="2016" />} />
        <Route path="/service/android/vivo" element={<ServiceAndroidVivo />} />
        <Route path="/service/android/vivo/sort/years/2022" element={<ServiceAndroidVivo years="2022" />} />
        <Route path="/service/android/vivo/sort/years/2021" element={<ServiceAndroidVivo years="2021" />} />
        <Route path="/service/android/vivo/sort/years/2020" element={<ServiceAndroidVivo years="2020" />} />
        <Route path="/service/android/vivo/sort/years/2019" element={<ServiceAndroidVivo years="2019" />} />
        <Route path="/service/android/vivo/sort/years/2018" element={<ServiceAndroidVivo years="2018" />} />
        <Route path="/service/android/vivo/sort/years/2017" element={<ServiceAndroidVivo years="2017" />} />
        <Route path="/service/android/vivo/sort/years/2016" element={<ServiceAndroidVivo years="2016" />} />
      </Routes>
    </BrowserRouter>
  );
}
