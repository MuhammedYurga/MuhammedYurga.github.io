(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sidebar Toggler
  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  // Progress Bar
  $(".pg-bar").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Calender
  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
    nav: false,
  });

  // Worldwide Sales Chart
  var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
  var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağıustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ],
      datasets: [
        {
          label: "Tıklanmalar",
          data: [217, 321, 623, 962, 741, 988, 1057, 1234, 1456, 1678, 2674],
          backgroundColor: "#1976d2",
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Salse & Revenue Chart
  var ctx2 = $("#salse-revenue").get(0).getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
      datasets: [
        {
          label: "Yol",
          data: [84, 96, 51, 14],
          backgroundColor: "#1976d2",
          fill: true,
        },
        {
          label: "Triathlon",
          data: [61, 67, 45, 12],
          backgroundColor: "#2196f3",
          fill: true,
        },
        {
          label: "MTB",
          data: [107, 81, 79, 65],
          backgroundColor: "#64b5f6",
          fill: true,
        },
        {
          label: "Şehir",
          data: [84, 91, 67, 10],
          backgroundColor: "#90caf9",
          fill: true,
        },
        {
          label: "BMX",
          data: [10, 12, 5, 2],
          backgroundColor: "#bbdefb",
          fill: true,
        },
        {
          label: "Elektrikli",
          data: [21, 32, 15, 7],
          backgroundColor: "#e3f2fd",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Single Line Chart
  var ctx3 = $("#line-chart").get(0).getContext("2d");
  var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağıustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ],
      datasets: [
        {
          label: "Satışlar",
          fill: false,
          backgroundColor: "#1976d2",
          data: [67, 78, 81, 98, 87, 105, 190, 114, 123, 88, 60, 51],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Single Bar Chart
  var ctx4 = $("#bar-chart").get(0).getContext("2d");
  var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["Mesaj", "Öneri", "Şikayet"],
      datasets: [
        {
          label: "İletişim",
          backgroundColor: ["#1976d2", "#64b5f6", "#e3f2fd"],
          data: [24, 17, 11],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
  // Pie Chart
  var ctx5 = $("#pie-chart").get(0).getContext("2d");
  var myChart5 = new Chart(ctx5, {
    type: "pie",
    data: {
      labels: ["Yol", "Triathlon", "MTB", "Şehir", "BMX", "Elektrikli"],
      datasets: [
        {
          backgroundColor: [
            "#1976d2",
            "#2196f3",
            "#64b5f6",
            "#90caf9",
            "#bbdefb",
            "#e3f2fd",
          ],
          data: [274, 104, 387, 314, 43, 55],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Doughnut Chart
  var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
  var myChart6 = new Chart(ctx6, {
    type: "doughnut",
    data: {
      labels: ["İlkbahar", "Yaz", "Sonbahar", "Kış"],
      datasets: [
        {
          backgroundColor: ["#1976d2", "#2196f3", "#90caf9", "#e3f2fd"],
          data: [541, 634, 387, 107],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
})(jQuery);
