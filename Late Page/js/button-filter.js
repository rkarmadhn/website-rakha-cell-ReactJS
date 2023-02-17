const date = new Date();

document.querySelector(".btn-filter").innerHTML = `<div class="label">
<h5>Filter</h5>
<i class="fa-solid fa-filter"></i>
  </div>`;

document.querySelector(".filter").innerHTML = `<div class="side-menu">
<div class="label">
<h4>Filter</h4>
<i class="fa-solid fa-xmark close-filter"></i>
</div>
<div class="wrapper-side-menu">
  <div class="wrap year-filter">
    <h5 class="w-100">Tahun</h5>
    <i class="fa-solid fa-arrow-down" style="font-size: 20px"></i>
    <i class="fa-solid fa-arrow-up hide" style="font-size: 20px"></i>
  </div>
  <ul class="side-menu-filter show-years hide">
    <li class="button-year year2022">2022</li>
    <li class="button-year year2021">2021</li>
    <li class="button-year year2020">2020</li>
    <li class="button-year year2019">2019</li>
    <li class="button-year year2018">2018</li>
    <li class="button-year year2017">2017</li>
    <li class="button-year year2016">2016</li>
  </ul>
  <div class="wrap button-reset">
    <h5>Reset</h5>
    </div>
</div>
<div class="wrap my-2">
  <p class="text-secondary">*) Untuk harga sudah termasuk jasa pasang , Sewaktu waktu harga akan berubah, Untuk stock bisa ditanyakan melalui Whatsapp kami atau tekan Contact pada Navigasi kami</p>
</div>
<div class="wrap my-2">
  <p class="text-secondary">*) Data update : ${date}</p>
</div>
</div>`;

$(document).ready(function () {
  $(".year-filter").click(function () {
    $(".fa-arrow-down").toggleClass("hide");
    $(".fa-arrow-up").toggleClass("hide");
    $(".show-years").toggleClass("hide");
  });

  $(".button-year").click(function () {
    $(".button-reset").show();
    $(".fa-arrow-down").toggleClass("hide");
    $(".fa-arrow-up").toggleClass("hide");
    $(".show-years").toggleClass("hide");
  });

  $(".button-reset").click(function () {
    $(".fa-arrow-down").removeClass("hide");
    $(".fa-arrow-up").addClass("hide");
    $(".show-years").addClass("hide");
  });

  $(".close-filter").click(function () {
    $(".fa-arrow-down").removeClass("hide");
    $(".fa-arrow-up").addClass("hide");
    $(".show-years").addClass("hide");
    $(".filter").css("bottom", "-500px");
    $(".btn-filter").css("bottom", "0");
  });

  $(".btn-filter").click(function () {
    $(".filter").css("bottom", " 0");
    $(this).css("bottom", "-100px");
  });
});
