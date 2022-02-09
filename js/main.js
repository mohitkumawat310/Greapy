// -------------------------------------------
// FUNTIONS I MADE
// ------------------------------------------
// ----to-find next--element--
jQuery.fn.findNext = function (selector) {
  return this.eq(0).nextAll(selector).eq(0);
}
// -------------------------------------------------------------------------------------
// Global
// -------------------------------------------------------------------------------------
// ----to-toggle--dsubmenu--
$("#dsubmenu_open").click(function () {
  $("#dsubmenu_area").toggleClass("active");
  $("#daflogin_down_img").toggleClass("rotate");
});
// ----to-toggle--mobile menu--
$(".mmenu_toggle").click(function () {
  $(".mnavbar_item").toggleClass("active2grid");
  $("#mmenu_toggle").toggleClass("off");
  $("#mmenu_close").toggleClass("active");
});
// --------Error hide-----------
function hide_error() {
  setTimeout(function () {
    $(".succ_notification").fadeOut("300");
    // $(".succ_notification").empty();
  }, 5000);
  setTimeout(function () {
    $(".fail_notification").fadeOut("300");
  }, 5000);
}
// --------Serach--prevent---refresh----
$(".form").submit(function (e) {
  e.preventDefault();
});
// ------------------Auto height text area-
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}
// ---------Lazy load var-----
var start = 0;
var limit = 8;
// ------------------------------------------------------------------------------------
// Sign up page
// -------------------------------------------------------------------------------------
// -----------Show password----------
$("#show_pass_area").click(function () {
  var input = $('input[name="password"]');
  if (input.attr("type") == "password") {
    input.attr("type", "text");
    $("#show_pass").toggleClass("off")
    $("#hide_pass").toggleClass("active")
  } else if (input.attr("type") == "text") {
    input.attr("type", "password");
    $("#show_pass").toggleClass("off")
    $("#hide_pass").toggleClass("active")
  }
});
// ------------------------------------------------------------------------------------
// Sign up next page
// -------------------------------------------------------------------------------------
// --------------Sign up Send email---------
$(document).on('click', '#sign_up_resend_otp', function () {
  $("#sign_up_resend_otp").html("Sending OTP...");
  $.ajax({
    url: "include/sign_up_next_otp.php",
    type: "post",
    error: function () {
      alert("Failed!");
    },
    success: function (data) {
      $(".alerts").html(data);
      $("#sign_up_resend_otp").html("Resend OTP");
    },
    timeout: 10000,
  });
});
// ------------------------------------------------------------------------------------
// Homepage
// -------------------------------------------------------------------------------------
// ----to-toggle--Cate on Marketplace box--
$('.item_cate1').click(function () {
  $(".item_cate1").removeClass("selected_item_cate");
  $(this).toggleClass("selected_item_cate");
  $("#hmarketplace_loading").show();
  $("#hmarketplace_area").hide();
  var cate_id = $(this).data("cate_id");
  $.ajax({
    url: "include/hload_marketplace.php",
    type: "post",
    data: { cate_id: cate_id },
    error: function () {

    },
    success: function (data) {
      setTimeout(function () {
        $("#hmarketplace_loading").hide();
        $("#hmarketplace_area").show();
        $("#hmarketplace_area").html(data);
      }, 1000);
    },
    timeout: 10000,
  });
});
// ----to-toggle--Cate on project box--
$('.item_cate2').click(function () {
  $(".item_cate2").removeClass("selected_item_cate");
  $(this).toggleClass("selected_item_cate");
  $("#hproject_loading").show();
  $("#hproject_area").hide();
  var cate_id = $(this).data("cate_id");
  $.ajax({
    url: "include/hload_project.php",
    type: "post",
    data: { cate_id: cate_id },
    error: function () {
    },
    success: function (data) {
      setTimeout(function () {
        $("#hproject_loading").hide();
        $("#hproject_area").show();
        $("#hproject_area").html(data);
      }, 1000);
    },
    timeout: 10000,
  });
});
// ----to-toggle--requiremnets on project box--
$(document).on("click", ".project_item_box_see_p", function (event) {
  $(this).findNext(".project_box_req_details_area").toggleClass("active");
  if ($(this).html() == "Hide posts") {
    $(this).html("See posts");
  } else {
    $(this).html("Hide posts");
  }
});
// ------------------------------------------------------------------------------------
// Marketplace
// -------------------------------------------------------------------------------------
// ----to-toggle--searchmenu--
$("#selected_search_type_sec").click(function () {
  $("#more_search_type_sec").toggleClass("active");
  $("#search_type_down_img1").toggleClass("rotate");
});
// ----to-Make dyanamic--searchmenu--
$(".search_type_p1").click(function () {
  $(".search_type_p1").removeClass("search_type_p_sel");
  $(this).toggleClass("search_type_p_sel");
  $("#selected_serach_type").html($(this).html());
  $("#more_search_type_sec").toggleClass("active");
  $("#search_type_down_img1").toggleClass("rotate");
});
// ----to-toggle--recom--
$("#reco_hide_area").click(function () {
  $("#rec_marketplace_area").toggleClass("off");
  $("#search_type_down_img2").toggleClass("rotate");
  if ($("#reco_hide_area_hide_text").html() == "Hide") {
    $("#reco_hide_area_hide_text").html("Show");
  } else {
    $("#reco_hide_area_hide_text").html("Hide");
  }
});
// ----to-toggle--Cate on Marketplace box--
$(document).on("click", ".item_cate3", function (event) {
  $(".item_cate3").removeClass("selected_item_cate");
  $(this).toggleClass("selected_item_cate");
  $("#marketplace_loading").show();
  $("#marketplace_area").hide();
  var cate_id = $(this).data("cate_id");
  if ($("#last_search_value").length) {
    var last_search_value = $("#last_search_value").val();
    $.ajax({
      url: "include/hload_marketplace.php",
      type: "post",
      data: { cate_id: cate_id,last_search_value: last_search_value },
      error: function () {
  
      },
      success: function (data) {
        setTimeout(function () {
          $("#marketplace_loading").hide();
          $("#marketplace_area").show();
          $("#marketplace_area").html(data);
        }, 1000);
      },
      timeout: 10000,
    });
  }else{
    $.ajax({
      url: "include/hload_project.php",
      type: "post",
      data: { cate_id: cate_id },
      error: function () {
  
      },
      success: function (data) {
        setTimeout(function () {
          $("#marketplace_loading").hide();
          $("#marketplace_area").show();
          $("#marketplace_area").html(data);
        }, 1000);
      },
      timeout: 10000,
    });
  }
});
// ----to-search in Marketplace--
$("#marketplace_search_btn").click(function () {
  var selected_serach_type =   $("#selected_serach_type").html();
  var search_value = $("#search_value").val();
  if(search_value != ""){
    $("#search_loading").show();
    $("#marketplace_sec").hide();
    // alert(selected_serach_type)
    // alert(search_value)
    $.ajax({
      url: "include/marketplace_search.php",
      type: "post",
      data: { selected_serach_type: selected_serach_type,search_value: search_value },
      error: function () {
  
      },
      success: function (data) {
        setTimeout(function () {
          $("#search_loading").hide();
          $("#marketplace_sec").show();
          $("#marketplace_sec").html(data);
        }, 1000);
      },
      timeout: 10000,
    });
  }
})
// ------------------------------------------------------------------------------------
// Project
// -------------------------------------------------------------------------------------
// ----to-toggle--recom--
$("#reco_hide_area2").click(function () {
  $("#rec_project_area").toggleClass("off");
  $("#search_type_down_img3").toggleClass("rotate");
  if ($("#reco_hide_area_hide_text2").html() == "Hide") {
    $("#reco_hide_area_hide_text2").html("Show");
  } else {
    $("#reco_hide_area_hide_text2").html("Hide");
  }
});
// ----to-toggle--Cate on project box--
$(document).on("click", ".item_cate4", function (event) {
  $(".item_cate4").removeClass("selected_item_cate");
  $(this).toggleClass("selected_item_cate");
  $("#project_loading").show();
  $("#project_area").hide();
  var cate_id = $(this).data("cate_id");
  if ($("#last_search_value").length) {
    var last_search_value = $("#last_search_value").val();
    $.ajax({
      url: "include/hload_project.php",
      type: "post",
      data: { cate_id: cate_id,last_search_value: last_search_value },
      error: function () {
  
      },
      success: function (data) {
        setTimeout(function () {
          $("#project_loading").hide();
          $("#project_area").show();
          $("#project_area").html(data);
        }, 1000);
      },
      timeout: 10000,
    });
  }else{
    $.ajax({
      url: "include/hload_project.php",
      type: "post",
      data: { cate_id: cate_id },
      error: function () {
  
      },
      success: function (data) {
        setTimeout(function () {
          $("#project_loading").hide();
          $("#project_area").show();
          $("#project_area").html(data);
        }, 1000);
      },
      timeout: 10000,
    });
  }
});
// ----to-search in project--
$("#project_search_btn").click(function () {
  var selected_serach_type =   $("#selected_serach_type").html();
  var search_value = $("#search_value").val();
  if(search_value != ""){
    $("#search_loading").show();
    $("#project_sec").hide();
    alert(selected_serach_type)
    alert(search_value)
    $.ajax({
      url: "include/project_search.php",
      type: "post",
      data: { selected_serach_type: selected_serach_type,search_value: search_value },
      error: function () {
  
      },
      success: function (data) {
        setTimeout(function () {
          $("#search_loading").hide();
          $("#project_sec").show();
          $("#project_sec").html(data);
        }, 1000);
      },
      timeout: 10000,
    });
  }
})