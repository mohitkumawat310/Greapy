<?php
if ($_POST["selected_serach_type"] == "Files") { ?>
    <!-- -----Marketplace_area--- -->
    <div class="marketplace_item_area block">
        <div class="item_area_cate_area">
            <p class="item_cate item_cate3 selected_item_cate" data-cate_id="2">Images</p>
            <p class="item_cate item_cate3" data-cate_id="2">Apps</p>
            <p class="item_cate item_cate3" data-cate_id="2">Scripts</p>
            <p class="item_cate item_cate3" data-cate_id="2">Designs</p>
            <p class="item_cate item_cate3" data-cate_id="2">Others</p>
        </div>
        <div class="loading" id="marketplace_loading" style="display: none;">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="item_area_sec" id="marketplace_area">
            <input type="hidden" id="last_search_value" value="hi">
            <div class="item_box_area1">
                <div class="item_box0">
                    <img src="public_image/Img-1.png" alt="item_name" class="item_box0_img">
                    <div class="item_type_area">
                        <button class="item_type_btn">Images</button>
                    </div>
                    <a href="#">
                        <p class="item_title_p">Food photography contest entry</p>
                    </a>
                    <div class="item_owner_area">
                        <a href="#">
                            <div class="item_owner_box1">
                                <img src="public_image/2.jpg" alt="item_owner" class="item_owner_img">
                                <p class="item_owner_name_p">Mohit Kumawat</p>
                            </div>
                        </a>
                        <div class="item_rating_box">
                            <img src="public_image/star-s-fill.svg" alt="rating_icon" class="item_rating_icon">
                            <p class="item_rating_p">4 out of 5</p>
                        </div>
                    </div>
                    <div class="item_line_break"></div>
                    <div class="item_bottom_area">
                        <div class="item_price_area">
                            <p class="item_old_price">₹230</p>
                            <p class="item_new_price">₹130</p>
                        </div>
                        <a href="#"><img src="public_image/item_overview_btn.svg" alt="item_overview_btn" class="item_overview_btn"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php } else { ?>
    <div class="popular_marketplace_area block">
        <div class="reco_title_area">
            <div class="reco_title">
                <img src="public_image/fire-fill.svg" alt="fire-fill" class="reco_title_img">
                <div class="reco_title_div">
                    <p class="reco_title_p">Popular</p>
                    <p class="reco_title_desc">Based on file uploads</p>
                </div>
            </div>
        </div>
        <div class="item_area_sec" id="rec_marketplace_area">
            <div class="item_box_area2">
                <div class="item_box1">
                    <div class="user_info_area">
                        <img src="public_image/Img.png" alt="item_name" class="userinfo_img">
                        <div class="user_info_details">
                            <p class="user_name">Mohit Kumar Kumawat</p>
                            <p class="user_skills">web developer,C++ Developer</p>
                        </div>
                    </div>
                    <div class="user_work_detail_area">
                        <div class="user_work_single_detail">
                            <p class="user_work_details_title">Total files</p>
                            <p class="user_work_detail">156</p>
                        </div>
                        <!-- <div class="user_work_single_detail">
                                <p class="user_work_details_title">Completed Projects</p>
                                <p class="user_work_detail">5</p>
                            </div> -->
                    </div>
                    <div class="item_line_break"></div>
                    <div class="item_bottom_area">
                        <p class="input_title_sec">Visit Profile</p>
                        <a href="#"><img src="public_image/item_overview_btn.svg" alt="item_overview_btn" class="item_overview_btn"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php }
?>