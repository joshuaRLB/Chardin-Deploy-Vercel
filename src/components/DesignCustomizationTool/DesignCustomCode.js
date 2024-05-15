
import $ from 'jquery';

$(document).ready(function() {

    /*--------------------------------------------------------------
    # Show Default Images
    --------------------------------------------------------------*/

        /**DEFAULT PAIR  */
        var currentBodice = "straight_1";
        var currentSleeve = "sleeves_1"; 
        var currentSkirt = "skirt_1";

    /*--------------------------------------------------------------
    # Show Bodice Images
    --------------------------------------------------------------*/

        /**
         * Default Active Trigger for Bodice 
         * */
        function setDefaultActiveStateForBodice() {
            /**
             * Default Trigger Bodice */
            $('#straight_1_btn').addClass('active-option-img');
            $("#straight_1_btn_c1").on("click",function() {
                showBodice("straight_1");
            });
            $("#straight_1_btn_c2").on("click",function() {
                showBodice("straight_1_c2");
            });
            $("#straight_1_btn_c3").on("click",function() {
                showBodice("straight_1_c3");
            });
            $("#straight_1_btn_c4").on("click",function() {
                showBodice("straight_1_c4");
            });
            $("#straight_1_btn_c5").on("click",function() {
                showBodice("straight_1_c5");
            });
            $("#straight_1_btn_c6").on("click",function() {
                showBodice("straight_1_c6");
            });
            $("#straight_1_btn_c7").on("click",function() {
                showBodice("straight_1_c7");
            });
            $("#straight_1_btn_c8").on("click", function() {
                showBodice("straight_1_c8");
            });

            //Responsive
            $('.responsive-bodice-container #straight_1_btn').addClass('active-option-img');
            $('.responsive-bodice-container #bodice_colors_straight_1').show();
            $('.responsive-bodice-container .dress-colorgroup > div').not('#bodice_colors_straight_1').hide();
            $('.responsive-bodice-container .dress-colorgroup .dress-bodice-colors-straight_1 > div').click(function() {
                var colorId = $(this).attr('id').replace('straight_1_btn_c', '');
                var selectedBodice = (colorId === '1') ? 'straight_1' : 'straight_1' + '_c' + colorId;
                showBodice(selectedBodice);
            });
        }

        // Show Bodice when Clicked (now w/ Colors)
        $("#straight_1_btn").on("click",function() {
            bodiceActive("straight_1_btn");
            showBodice("straight_1");
            $('#straight_1_btn').addClass('active-option-img');
            $('#straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_straight_1").show();
            $("#bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#straight_1_btn_c1").on("click",function() {
                    showBodice("straight_1");
                });
                $("#straight_1_btn_c2").on("click",function() {
                    showBodice("straight_1_c2");
                });
                $("#straight_1_btn_c3").on("click",function() {
                    showBodice("straight_1_c3");
                });
                $("#straight_1_btn_c4").on("click",function() {
                    showBodice("straight_1_c4");
                });
                $("#straight_1_btn_c5").on("click",function() {
                    showBodice("straight_1_c5");
                });
                $("#straight_1_btn_c6").on("click",function() {
                    showBodice("straight_1_c6");
                });
                $("#straight_1_btn_c7").on("click",function() {
                    showBodice("straight_1_c7");
                });
                $("#straight_1_btn_c8").on("click",function() {
                    showBodice("straight_1_c8");
                });
        });
        $("#straight_2_btn").on("click",function() {
            bodiceActive("straight_2_btn");
            showBodice("straight_2");
            $('#straight_2_btn').addClass('active-option-img');
            $('#straight_1_btn, #sweetheart_1_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_straight_2").show();
            $("#bodice_colors_straight_1, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#straight_2_btn_c1").on("click",function() {
                    showBodice("straight_2");
                });
                $("#straight_2_btn_c2").on("click",function() {
                    showBodice("straight_2_c2");
                });
                $("#straight_2_btn_c3").on("click",function() {
                    showBodice("straight_2_c3");
                });
                $("#straight_2_btn_c4").on("click",function() {
                    showBodice("straight_2_c4");
                });
                $("#straight_2_btn_c5").on("click",function() {
                    showBodice("straight_2_c5");
                });
                $("#straight_2_btn_c6").on("click",function() {
                    showBodice("straight_2_c6");
                });
                $("#straight_2_btn_c7").on("click",function() {
                    showBodice("straight_2_c7");
                });
                $("#straight_2_btn_c8").on("click",function() {
                    showBodice("straight_2_c8");
                });
        });
        $("#sweetheart_1_btn").on("click",function() {
            bodiceActive("sweetheart_1_btn");
            showBodice("sweetheart_1");
            $('#sweetheart_1_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_sweetheart_1").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#sweetheart_1_btn_c1").on("click",function() {
                    showBodice("sweetheart_1");
                });
                $("#sweetheart_1_btn_c2").on("click",function() {
                    showBodice("sweetheart_1_c2");
                });
                $("#sweetheart_1_btn_c3").on("click",function() {
                    showBodice("sweetheart_1_c3");
                });
                $("#sweetheart_1_btn_c4").on("click",function() {
                    showBodice("sweetheart_1_c4");
                });
                $("#sweetheart_1_btn_c5").on("click",function() {
                    showBodice("sweetheart_1_c5");
                });
                $("#sweetheart_1_btn_c6").on("click",function() {
                    showBodice("sweetheart_1_c6");
                });
                $("#sweetheart_1_btn_c7").on("click",function() {
                    showBodice("sweetheart_1_c7");
                });
                $("#sweetheart_1_btn_c8").on("click",function() {
                    showBodice("sweetheart_1_c8");
                });
        });
        $("#sweetheart_2_btn").on("click",function() {
            bodiceActive("sweetheart_2_btn");
            showBodice("sweetheart_2");
            $('#sweetheart_2_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_sweetheart_2").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#sweetheart_2_btn_c1").on("click",function() {
                    showBodice("sweetheart_2");
                });
                $("#sweetheart_2_btn_c2").on("click",function() {
                    showBodice("sweetheart_2_c2");
                });
                $("#sweetheart_2_btn_c3").on("click",function() {
                    showBodice("sweetheart_2_c3");
                });
                $("#sweetheart_2_btn_c4").on("click",function() {
                    showBodice("sweetheart_2_c4");
                });
                $("#sweetheart_2_btn_c5").on("click",function() {
                    showBodice("sweetheart_2_c5");
                });
                $("#sweetheart_2_btn_c6").on("click",function() {
                    showBodice("sweetheart_2_c6");
                });
                $("#sweetheart_2_btn_c7").on("click",function() {
                    showBodice("sweetheart_2_c7");
                });
                $("#sweetheart_2_btn_c8").on("click",function() {
                    showBodice("sweetheart_2_c8");
                });
        });
        $("#sweetheart_3_btn").on("click",function() {
            bodiceActive("sweetheart_3_btn");
            showBodice("sweetheart_3");
            $('#sweetheart_3_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_sweetheart_3").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_vneck_1, #bodice_colors_vneck_2, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#sweetheart_3_btn_c1").on("click",function() {
                    showBodice("sweetheart_3");
                });
                $("#sweetheart_3_btn_c2").on("click",function() {
                    showBodice("sweetheart_3_c2");
                });
                $("#sweetheart_3_btn_c3").on("click",function() {
                    showBodice("sweetheart_3_c3");
                });
                $("#sweetheart_3_btn_c4").on("click",function() {
                    showBodice("sweetheart_3_c4");
                });
                $("#sweetheart_3_btn_c5").on("click",function() {
                    showBodice("sweetheart_3_c5");
                });
                $("#sweetheart_3_btn_c6").on("click",function() {
                    showBodice("sweetheart_3_c6");
                });
                $("#sweetheart_3_btn_c7").on("click",function() {
                    showBodice("sweetheart_3_c7");
                });
                $("#sweetheart_3_btn_c8").on("click",function() {
                    showBodice("sweetheart_3_c8");
                });
        });
        $("#vneck_1_btn").on("click",function() {
            bodiceActive("vneck_1_btn");
            showBodice("vneck_1");
            $('#vneck_1_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_vneck_1").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_2, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#vneck_1_btn_c1").on("click",function() {
                    showBodice("vneck_1");
                });
                $("#vneck_1_btn_c2").on("click",function() {
                    showBodice("vneck_1_c2");
                });
                $("#vneck_1_btn_c3").on("click",function() {
                    showBodice("vneck_1_c3");
                });
                $("#vneck_1_btn_c4").on("click",function() {
                    showBodice("vneck_1_c4");
                });
                $("#vneck_1_btn_c5").on("click",function() {
                    showBodice("vneck_1_c5");
                });
                $("#vneck_1_btn_c6").on("click",function() {
                    showBodice("vneck_1_c6");
                });
                $("#vneck_1_btn_c7").on("click",function() {
                    showBodice("vneck_1_c7");
                });
                $("#vneck_1_btn_c8").on("click",function() {
                    showBodice("vneck_1_c8");
                });
        });
        $("#vneck_2_btn").on("click",function() {
            bodiceActive("vneck_2_btn");
            showBodice("vneck_2");
            $('#vneck_2_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_vneck_2").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_3").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#vneck_2_btn_c1").on("click",function() {
                    showBodice("vneck_2");
                });
                $("#vneck_2_btn_c2").on("click",function() {
                    showBodice("vneck_2_c2");
                });
                $("#vneck_2_btn_c3").on("click",function() {
                    showBodice("vneck_2_c3");
                });
                $("#vneck_2_btn_c4").on("click",function() {
                    showBodice("vneck_2_c4");
                });
                $("#vneck_2_btn_c5").on("click",function() {
                    showBodice("vneck_2_c5");
                });
                $("#vneck_2_btn_c6").on("click",function() {
                    showBodice("vneck_2_c6");
                });
                $("#vneck_2_btn_c7").on("click",function() {
                    showBodice("vneck_2_c7");
                });
                $("#vneck_2_btn_c8").on("click",function() {
                    showBodice("vneck_2_c8");
                });
        });
        $("#vneck_3_btn").on("click",function() {
            bodiceActive("vneck_3_btn");
            showBodice("vneck_3");
            $('#vneck_3_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_2_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_vneck_3").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#vneck_3_btn_c1").on("click",function() {
                    showBodice("vneck_3");
                });
                $("#vneck_3_btn_c2").on("click",function() {
                    showBodice("vneck_3_c2");
                });
                $("#vneck_3_btn_c3").on("click",function() {
                    showBodice("vneck_3_c3");
                });
                $("#vneck_3_btn_c4").on("click",function() {
                    showBodice("vneck_3_c4");
                });
                $("#vneck_3_btn_c5").on("click",function() {
                    showBodice("vneck_3_c5");
                });
                $("#vneck_3_btn_c6").on("click",function() {
                    showBodice("vneck_3_c6");
                });
                $("#vneck_3_btn_c7").on("click",function() {
                    showBodice("vneck_3_c7");
                });
                $("#vneck_3_btn_c8").on("click",function() {
                    showBodice("vneck_3_c8");
                });
        });
        $("#vneck_4_btn").on("click",function() {
            bodiceActive("vneck_4_btn");
            showBodice("vneck_4");
            $('#vneck_4_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #sweetheart_3_btn, #vneck_1_btn, #vneck_2_btn').removeClass('active-option-img');
            $('#vneck_3_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_vneck_4").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#vneck_4_btn_c1").on("click",function() {
                    showBodice("vneck_4");
                });
                $("#vneck_4_btn_c2").on("click",function() {
                    showBodice("vneck_4_c2");
                });
                $("#vneck_4_btn_c3").on("click",function() {
                    showBodice("vneck_4_c3");
                });
                $("#vneck_4_btn_c4").on("click",function() {
                    showBodice("vneck_4_c4");
                });
                $("#vneck_4_btn_c5").on("click",function() {
                    showBodice("vneck_4_c5");
                });
                $("#vneck_4_btn_c6").on("click",function() {
                    showBodice("vneck_4_c6");
                });
                $("#vneck_4_btn_c7").on("click",function() {
                    showBodice("vneck_4_c7");
                });
                $("#vneck_4_btn_c8").on("click",function() {
                    showBodice("vneck_4_c8");
                });
        });
        $("#sweetheart_4_btn").on("click",function() {
            bodiceActive("sweetheart_4_btn");
            showBodice("sweetheart_4");
            $('#sweetheart_4_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_sweetheart_4").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_vneck_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#sweetheart_4_btn_c1").on("click",function() {
                    showBodice("sweetheart_4");
                });
                $("#sweetheart_4_btn_c2").on("click",function() {
                    showBodice("sweetheart_4_c2");
                });
                $("#sweetheart_4_btn_c3").on("click",function() {
                    showBodice("sweetheart_4_c3");
                });
                $("#sweetheart_4_btn_c4").on("click",function() {
                    showBodice("sweetheart_4_c4");
                });
                $("#sweetheart_4_btn_c5").on("click",function() {
                    showBodice("sweetheart_4_c5");
                });
                $("#sweetheart_4_btn_c6").on("click",function() {
                    showBodice("sweetheart_4_c6");
                });
                $("#sweetheart_4_btn_c7").on("click",function() {
                    showBodice("sweetheart_4_c7");
                });
                $("#sweetheart_4_btn_c8").on("click",function() {
                    showBodice("sweetheart_4_c8");
                });
        });
        $("#sweetheart_5_btn").on("click",function() {
            bodiceActive("sweetheart_5_btn");
            showBodice("sweetheart_5");
            $('#sweetheart_5_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_sweetheart_5").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#sweetheart_5_btn_c1").on("click",function() {
                    showBodice("sweetheart_5");
                });
                $("#sweetheart_5_btn_c2").on("click",function() {
                    showBodice("sweetheart_5_c2");
                });
                $("#sweetheart_5_btn_c3").on("click",function() {
                    showBodice("sweetheart_5_c3");
                });
                $("#sweetheart_5_btn_c4").on("click",function() {
                    showBodice("sweetheart_5_c4");
                });
                $("#sweetheart_5_btn_c5").on("click",function() {
                    showBodice("sweetheart_5_c5");
                });
                $("#sweetheart_5_btn_c6").on("click",function() {
                    showBodice("sweetheart_5_c6");
                });
                $("#sweetheart_5_btn_c7").on("click",function() {
                    showBodice("sweetheart_5_c7");
                });
                $("#sweetheart_5_btn_c8").on("click",function() {
                    showBodice("sweetheart_5_c8");
                });
        });
        $("#off-shoulder_1_btn").on("click",function() {
            bodiceActive("off-shoulder_1_btn");
            showBodice("off-shoulder_1");
            $('#off-shoulder_1_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #scoop_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_off-shoulder_1").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_scoop_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#off-shoulder_1_btn_c1").on("click",function() {
                    showBodice("off-shoulder_1");
                });
                $("#off-shoulder_1_btn_c2").on("click",function() {
                    showBodice("off-shoulder_1_c2");
                });
                $("#off-shoulder_1_btn_c3").on("click",function() {
                    showBodice("off-shoulder_1_c3");
                });
                $("#off-shoulder_1_btn_c4").on("click",function() {
                    showBodice("off-shoulder_1_c4");
                });
                $("#off-shoulder_1_btn_c5").on("click",function() {
                    showBodice("off-shoulder_1_c5");
                });
                $("#off-shoulder_1_btn_c6").on("click",function() {
                    showBodice("off-shoulder_1_c6");
                });
                $("#off-shoulder_1_btn_c7").on("click",function() {
                    showBodice("off-shoulder_1_c7");
                });
                $("#off-shoulder_1_btn_c8").on("click",function() {
                    showBodice("off-shoulder_1_c8");
                });
        });
        $("#scoop_1_btn").on("click",function() {
            bodiceActive("scoop_1_btn");
            showBodice("scoop_1");
            $('#scoop_1_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #half_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_scoop_1").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_half_1, #bodice_colors_boat_1").hide();
                $("#scoop_1_btn_c1").on("click",function() {
                    showBodice("scoop_1");
                });
                $("#scoop_1_btn_c2").on("click",function() {
                    showBodice("scoop_1_c2");
                });
                $("#scoop_1_btn_c3").on("click",function() {
                    showBodice("scoop_1_c3");
                });
                $("#scoop_1_btn_c4").on("click",function() {
                    showBodice("scoop_1_c4");
                });
                $("#scoop_1_btn_c5").on("click",function() {
                    showBodice("scoop_1_c5");
                });
                $("#scoop_1_btn_c6").on("click",function() {
                    showBodice("scoop_1_c6");
                });
                $("#scoop_1_btn_c7").on("click",function() {
                    showBodice("scoop_1_c7");
                });
                $("#scoop_1_btn_c8").on("click",function() {
                    showBodice("scoop_1_c8");
                });
        });
        $("#half_1_btn").on("click",function() {
            bodiceActive("half_1_btn");
            showBodice("half_1");
            $('#half_1_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #boat_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_half_1").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_boat_1").hide();
                $("#half_1_btn_c1").on("click",function() {
                    showBodice("half_1");
                });
                $("#half_1_c2").on("click",function() {
                    showBodice("half_1_c2");
                });
                $("#half_1_btn_c3").on("click",function() {
                    showBodice("half_1_c3");
                });
                $("#half_1_btn_c4").on("click",function() {
                    showBodice("half_1_c4");
                });
                $("#half_1_btn_c5").on("click",function() {
                    showBodice("half_1_c5");
                });
                $("#half_1_btn_c6").on("click",function() {
                    showBodice("half_1_c6");
                });
                $("#half_1_btn_c7").on("click",function() {
                    showBodice("half_1_c7");
                });
                $("#half_1_btn_c8").on("click",function() {
                    showBodice("half_1_c8");
                });
        });
        $("#boat_1_btn").on("click",function() {
            bodiceActive("boat_1_btn");
            showBodice("boat_1");
            $('#boat_1_btn').addClass('active-option-img');
            $('#straight_1_btn, #straight_2_btn, #sweetheart_1_btn, #sweetheart_2_btn, #vneck_1_btn, #vneck_2_btn, #vneck_3_btn').removeClass('active-option-img');
            $('#vneck_4_btn, #sweetheart_4_btn, #sweetheart_5_btn, #off-shoulder_1_btn, #scoop_1_btn, #half_1_btn').removeClass('active-option-img');
            //Colors
            $("#bodice_colors_boat_1").show();
            $("#bodice_colors_straight_1, #bodice_colors_straight_2, #bodice_colors_sweetheart_1, #bodice_colors_sweetheart_2, #bodice_colors_sweetheart_3, #bodice_colors_vneck_1, #bodice_colors_vneck_2").hide();
            $("#bodice_colors_vneck_3, #bodice_colors_vneck_4, #bodice_colors_sweetheart_4, #bodice_colors_sweetheart_5, #bodice_colors_off-shoulder_1, #bodice_colors_scoop_1, #bodice_colors_half_1").hide();
                $("#boat_1_btn_c1").on("click",function() {
                    showBodice("boat_1");
                });
                $("#boat_1_c2").on("click",function() {
                    showBodice("boat_1_c2");
                });
                $("#boat_1_btn_c3").on("click",function() {
                    showBodice("boat_1_c3");
                });
                $("#boat_1_btn_c4").on("click",function() {
                    showBodice("boat_1_c4");
                });
                $("#boat_1_btn_c5").on("click",function() {
                    showBodice("boat_1_c5");
                });
                $("#boat_1_btn_c6").on("click",function() {
                    showBodice("boat_1_c6");
                });
                $("#boat_1_btn_c7").on("click",function() {
                    showBodice("boat_1_c7");
                });
                $("#boat_1_btn_c8").on("click",function() {
                    showBodice("boat_1_c8");
                });
        });
        

        // Show Bodice function
        function showBodice(elementId) {
            var element = $("#" + elementId);
            if (element.hasClass("bodice")) {
                if (currentBodice !== "") {
                    $("#" + currentBodice).css("visibility", "hidden");
                }
                currentBodice = elementId;
            }
            element.css("visibility", "visible");
        }
        /**Active Triggers */
            function bodiceActive(elementId) {
                var bodiceContent = $("#" + elementId);
                    $("#straight_1_btn").removeClass('active-option-img');
                    $("#straight_2_btn").removeClass('active-option-img');
                    $("#sweetheart_1_btn").removeClass('active-option-img');
                    $("#sweetheart_2_btn").removeClass('active-option-img');
                    $("#sweetheart_3_btn").removeClass('active-option-img');
                    bodiceContent.addClass('active-option-img');
            }
        
        /** 
         * BODICE CLICK EVENT */

            // Last clicked bodice ID
            var lastClickedBodiceId = null;

            // Function to handle bodice click event
            function handleBodiceClick(bodiceId) {
                bodiceActive(bodiceId + "_btn");
                showBodice(bodiceId);
                $('.responsive-bodice-container #' + bodiceId + '_btn').addClass('active-option-img');
                $('.responsive-bodice-container .dress-bodice-item .option-img').not('#' + bodiceId + '_btn').removeClass('active-option-img');
                $('.dress-bodice-container .dress-bodice-item .option-img').not('#' + bodiceId + '_btn').removeClass('active-option-img');
                lastClickedBodiceId = bodiceId;
                
                // Colors
                $('.dress-bodice-container, .responsive-bodice-container').each(function() {
                    var container = $(this);
                    container.find('.dress-bodice-colors').hide();
                    container.find('#bodice_colors_' + bodiceId).show();
                    container.find('.dress-colorgroup > div').not('#bodice_colors_' + bodiceId).hide();
                });
                    // Color button click 
                    $('.responsive-bodice-container .dress-colorgroup .dress-bodice-colors-' + bodiceId 
                    + '> div, .dress-bodice-container .dress-colorgroup .dress-bodice-colors-' + bodiceId + ' > div').on("click", function() {
                        var colorId = $(this).attr('id').replace(bodiceId + '_btn_c', '');
                        var selectedBodice = (colorId === '1') ? bodiceId : bodiceId + '_c' + colorId;
                        showBodice(selectedBodice);
                    });
            }

                // Bodice item click
                $('.responsive-bodice-container .dress-bodice-item, .dress-bodice-container .dress-bodice-item').on("click", function() {
                    var bodiceId = $(this).find('.option-img').attr('id').replace('_btn', '');
                    lastClickedBodiceId = bodiceId;
                    $('.dress-bodice-container #' + bodiceId + '_btn').addClass('active-option-img');
                    handleBodiceClick(bodiceId);
                });

            if (lastClickedBodiceId !== null) {
                $('.responsive-bodice-container #' + lastClickedBodiceId + '_btn').addClass('active-option-img');
                $('.dress-bodice-container #' + lastClickedBodiceId + '_btn').addClass('active-option-img');
            }



    /*--------------------------------------------------------------
    # Show Sleeve Content
    --------------------------------------------------------------*/
        $(".responsive-sleeves-container #sleeves_header, #sleeves_header").on("click", function() {
            $(".responsive-sleeves-container #sleeves_group_show, #sleeves_group_show").slideToggle(250);
            $(".responsive-sleeves-container #sleeves_header, #sleeves_header").toggleClass("toggled");
            $(".responsive-sleeves-container #dress_colorgroup, #dress_colorgroup").hide();
        });

        /**
         * Default Active Trigger for Skirt 
         * */
        function setDefaultActiveStateForSleeves() {
            /**
             * Default Trigger Skirt */
            $('.responsive-sleeves-container #remove_sleeve_btn, #remove_sleeve_btn').addClass('active-option-img-remove');
        }

        function toggleSleeve(sleeveId) {
            if ($("#" + sleeveId).is(":hidden")) {
                $("#" + sleeveId).show();
            } else {
                showSleeve(sleeveId);
            }
        }
        
        function updateSleeve(activeBtnId, hideBtnId) {
            $('#' + activeBtnId).addClass('active-option-img');
            $('#' + hideBtnId).removeClass('active-option-img');
            $('.responsive-sleeves-container #remove_sleeve_btn, #remove_sleeve_btn').removeClass('active-option-img-remove');
            $(".responsive-sleeves-container #dress_colorgroup, #dress_colorgroup").show();
        }

        $(".responsive-sleeves-container #longsleeves_1_btn, .sleeves-container #longsleeves_1_btn").on("click", function() {
            sleevesActive("longsleeves_1_btn");
            toggleSleeve("sleeves_1");
            updateSleeve("longsleeves_1_btn", "longsleeves_2_btn");
            $(".responsive-sleeves-container #sleeves_colors_longsleeves_1, #sleeves_colors_longsleeves_1").show();
                $("#longsleeves_1_btn_c1, .responsive-sleeves-container #longsleeves_1_btn_c1").on("click", function() {
                    toggleSleeve("sleeves_1");
                });
                $("#longsleeves_1_btn_c2, .responsive-sleeves-container #longsleeves_1_btn_c2").on("click", function() {
                    toggleSleeve("sleeves_1_c2");
                });
                $("#longsleeves_1_btn_c3, .responsive-sleeves-container #longsleeves_1_btn_c3").on("click", function() {
                    toggleSleeve("sleeves_1_c3");
                });
                $("#longsleeves_1_btn_c4, .responsive-sleeves-container #longsleeves_1_btn_c4").on("click", function() {
                    toggleSleeve("sleeves_1_c4");
                });
                $("#longsleeves_1_btn_c5, .responsive-sleeves-container #longsleeves_1_btn_c5").on("click", function() {
                    toggleSleeve("sleeves_1_c5");
                });
                $("#longsleeves_1_btn_c6, .responsive-sleeves-container #longsleeves_1_btn_c6").on("click", function() {
                    toggleSleeve("sleeves_1_c6");
                });
                $("#longsleeves_1_btn_c7, .responsive-sleeves-container #longsleeves_1_btn_c7").on("click", function() {
                    toggleSleeve("sleeves_1_c7");
                });
                $("#longsleeves_1_btn_c8, .responsive-sleeves-container #longsleeves_1_btn_c8").on("click", function() {
                    toggleSleeve("sleeves_1_c8");
                });
        });
        $(".responsive-sleeves-container #longsleeves_2_btn, .sleeves-container #longsleeves_2_btn").on("click", function() {
            sleevesActive("longsleeves_2_btn");
            toggleSleeve("sleeves_2");
            updateSleeve("longsleeves_2_btn", "longsleeves_1_btn");
            $(".responsive-sleeves-container #sleeves_colors_longsleeves_1, #sleeves_colors_longsleeves_1").hide();
        });
        $(".responsive-sleeves-container #remove_sleeve_btn, .sleeves-container #remove_sleeve_btn").click(function() {
            $("#sleeves_1, #sleeves_1_c2, #sleeves_1_c3, #sleeves_1_c4, #sleeves_1_c5, #sleeves_1_c6, #sleeves_1_c7, #sleeves_1_c8, #sleeves_2").hide();
            $(".responsive-sleeves-container #sleeves_colors_longsleeves_1, #sleeves_colors_longsleeves_1").hide();
            $("#longsleeves_1_btn, #longsleeves_2_btn").removeClass('active-option-img');
            $(this).addClass('active-option-img-remove');
        });

        // Show Sleeve
        function showSleeve(elementId) {
            var element = $("#" + elementId);
            if (element.hasClass("sleeve")) {
                if (currentSleeve !== "") {
                    $("#" + currentSleeve).css("visibility", "hidden");
                }
                currentSleeve = elementId;
            }
            element.css("visibility", "visible");
        }
        /**Active Triggers */
            function sleevesActive(elementId) {
                var sleeveContent = $("#" + elementId);
                    $("#longsleeves_1_btn").removeClass('active-option-img');
                    $("#longsleeves_2_btn").removeClass('active-option-img');
                    $("#remove_sleeve_btn").removeClass('active-option-img');
                    sleeveContent.addClass('active-option-img');
            }
        
        /** 
         * SLEEVES CLICK EVENT */

            // Last clicked sleeve ID
            var lastClickedSleeveId = null;

            // Function to handle bodice click event
            function handleSleeveClick(sleeveId) {
                sleevesActive(sleeveId + "_btn");
                toggleSleeve(sleeveId);
                updateSleeve(sleeveId + "_btn");
                
                $('.responsive-sleeves-container #' + sleeveId + '_btn').addClass('active-option-img');
                $('.responsive-sleeves-container .sleeves-item .option-img').not('#' + sleeveId + '_btn').removeClass('active-option-img');
                $('.sleeves-container .sleeves-item .option-img').not('#' + sleeveId + '_btn').removeClass('active-option-img');
                lastClickedSleeveId = sleeveId;
            }

                // Sleeves item click
                $('.responsive-sleeves-container .sleeves-item, .sleeves-container .sleeves-item').on("click", function() {
                    var sleeveId = $(this).find('.option-img').attr('id').replace('_btn', '');
                    lastClickedSleeveId = sleeveId;
                    $('.sleeves-container #' + sleeveId + '_btn').addClass('active-option-img');
                    handleSleeveClick(sleeveId);
                });

            if (lastClickedSleeveId !== null) {
                $('.responsive-sleeves-container #' + lastClickedSleeveId + '_btn').addClass('active-option-img');
                $('.sleeves-container #' + lastClickedSleeveId + '_btn').addClass('active-option-img');
            }

        
    /*--------------------------------------------------------------
    # Show Skirt Images
    --------------------------------------------------------------*/

        /**
         * Default Active Trigger for Bodice 
         * */
        function setDefaultActiveStateForSkirt() {
            /**
             * Default Trigger Bodice */
            $('#skirt_1_btn').addClass('active-option-img');
            $("#skirt_1_btn_c1").on("click",function() {
                showSkirt("skirt_1");
            });
            $("#skirt_1_btn_c2").on("click",function() {
                showSkirt("skirt_1_c2");
            });
            $("#skirt_1_btn_c3").on("click",function() {
                showSkirt("skirt_1_c3");
            });
            $("#skirt_1_btn_c4").on("click",function() {
                showSkirt("skirt_1_c4");
            });
            $("#skirt_1_btn_c5").on("click",function() {
                showSkirt("skirt_1_c5");
            });
            $("#skirt_1_btn_c6").on("click",function() {
                showSkirt("skirt_1_c6");
            });
            $("#skirt_1_btn_c7").on("click",function() {
                showSkirt("skirt_1_c7");
            });
            $("#skirt_1_btn_c8").on("click",function() {
                showSkirt("skirt_1_c8");
            });

            //Responsive
            $('.responsive-skirt-container #skirt_1_btn').addClass('active-option-img');
            $('.responsive-skirt-container #skirt_colors_skirt_1').show();
            $('.responsive-skirt-container .dress-colorgroup > div').not('#skirt_colors_skirt_1').hide();
            $('.responsive-skirt-container .dress-colorgroup .dress-skirt-colors-skirt_1 > div').on("click",function() {
                var colorId = $(this).attr('id').replace('skirt_1_btn_c', '');
                var selectedSkirt = (colorId === '1') ? 'skirt_1' : 'skirt_1' + '_c' + colorId;
                showSkirt(selectedSkirt);
            });
        }

        // Show Skirt when Clicked
        $("#skirt_1_btn").on("click",function() {
            skirtActive("skirt_1_btn");
            showSkirt("skirt_1");
            $('#skirt_1_btn').addClass('active-option-img');
            $('#skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn, #skirt_7_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_1").show();
            $("#skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6, #skirt_colors_skirt_7").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_1_btn_c1").on("click",function() {
                    showSkirt("skirt_1");
                });
                $("#skirt_1_btn_c2").on("click",function() {
                    showSkirt("skirt_1_c2");
                });
                $("#skirt_1_btn_c3").on("click",function() {
                    showSkirt("skirt_1_c3");
                });
                $("#skirt_1_btn_c4").on("click",function() {
                    showSkirt("skirt_1_c4");
                });
                $("#skirt_1_btn_c5").on("click",function() {
                    showSkirt("skirt_1_c5");
                });
                $("#skirt_1_btn_c6").on("click",function() {
                    showSkirt("skirt_1_c6");
                });
                $("#skirt_1_btn_c7").on("click",function() {
                    showSkirt("skirt_1_c7");
                });
                $("#skirt_1_btn_c8").on("click",function() {
                    showSkirt("skirt_1_c8");
                });
        });
        $("#skirt_2_btn").on("click",function() {
            skirtActive("skirt_2_btn");
            showSkirt("skirt_2");
            $('#skirt_2_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn, #skirt_7_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_2").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6, #skirt_colors_skirt_7").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_2_btn_c1").on("click",function() {
                    showSkirt("skirt_2");
                });
                $("#skirt_2_btn_c2").on("click",function() {
                    showSkirt("skirt_2_c2");
                });
                $("#skirt_2_btn_c3").on("click",function() {
                    showSkirt("skirt_2_c3");
                });
                $("#skirt_2_btn_c4").on("click",function() {
                    showSkirt("skirt_2_c4");
                });
                $("#skirt_2_btn_c5").on("click",function() {
                    showSkirt("skirt_2_c5");
                });
                $("#skirt_2_btn_c6").on("click",function() {
                    showSkirt("skirt_2_c6");
                });
                $("#skirt_2_btn_c7").on("click",function() {
                    showSkirt("skirt_2_c7");
                });
                $("#skirt_2_btn_c8").on("click",function() {
                    showSkirt("skirt_2_c8");
                });
        });
        $("#skirt_3_btn").on("click",function() {
            skirtActive("skirt_3_btn");
            showSkirt("skirt_3");
            $('#skirt_3_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn, #skirt_7_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_3").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6, #skirt_colors_skirt_7").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_3_btn_c1").on("click",function() {
                    showSkirt("skirt_3");
                });
                $("#skirt_3_btn_c2").on("click",function() {
                    showSkirt("skirt_3_c2");
                });
                $("#skirt_3_btn_c3").on("click",function() {
                    showSkirt("skirt_3_c3");
                });
                $("#skirt_3_btn_c4").on("click",function() {
                    showSkirt("skirt_3_c4");
                });
                $("#skirt_3_btn_c5").on("click",function() {
                    showSkirt("skirt_3_c5");
                });
                $("#skirt_3_btn_c6").on("click",function() {
                    showSkirt("skirt_3_c6");
                });
                $("#skirt_3_btn_c7").on("click",function() {
                    showSkirt("skirt_3_c7");
                });
                $("#skirt_3_btn_c8").on("click",function() {
                    showSkirt("skirt_3_c8");
                });
        });
        $("#skirt_4_btn").on("click",function() {
            skirtActive("skirt_4_btn");
            showSkirt("skirt_4");
            $('#skirt_4_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_5_btn, #skirt_6_btn, #skirt_7_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_4").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_5, #skirt_colors_skirt_6, #skirt_colors_skirt_7").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_4_btn_c1").on("click",function() {
                    showSkirt("skirt_4");
                });
                $("#skirt_4_btn_c2").on("click",function() {
                    showSkirt("skirt_4_c2");
                });
                $("#skirt_4_btn_c3").on("click",function() {
                    showSkirt("skirt_4_c3");
                });
                $("#skirt_4_btn_c4").on("click",function() {
                    showSkirt("skirt_4_c4");
                });
                $("#skirt_4_btn_c5").on("click",function() {
                    showSkirt("skirt_4_c5");
                });
                $("#skirt_4_btn_c6").on("click",function() {
                    showSkirt("skirt_4_c6");
                });
                $("#skirt_4_btn_c7").on("click",function() {
                    showSkirt("skirt_4_c7");
                });
                $("#skirt_4_btn_c8").on("click",function() {
                    showSkirt("skirt_4_c8");
                });
        });
        $("#skirt_5_btn").on("click",function() {
            skirtActive("skirt_5_btn");
            showSkirt("skirt_5");
            $('#skirt_5_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_6_btn, #skirt_7_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_5").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_6, #skirt_colors_skirt_7").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_5_btn_c1").on("click",function() {
                    showSkirt("skirt_5");
                });
                $("#skirt_5_btn_c2").on("click",function() {
                    showSkirt("skirt_5_c2");
                });
                $("#skirt_5_btn_c3").on("click",function() {
                    showSkirt("skirt_5_c3");
                });
                $("#skirt_5_btn_c4").on("click",function() {
                    showSkirt("skirt_5_c4");
                });
                $("#skirt_5_btn_c5").on("click",function() {
                    showSkirt("skirt_5_c5");
                });
                $("#skirt_5_btn_c6").on("click",function() {
                    showSkirt("skirt_5_c6");
                });
                $("#skirt_5_btn_c7").on("click",function() {
                    showSkirt("skirt_5_c7");
                });
                $("#skirt_5_btn_c8").on("click",function() {
                    showSkirt("skirt_5_c8");
                });
        });
        $("#skirt_6_btn").on("click",function() {
            skirtActive("skirt_6_btn");
            showSkirt("skirt_6");
            $('#skirt_6_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_7_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_6").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_7").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_6_btn_c1").on("click",function() {
                    showSkirt("skirt_6");
                });
                $("#skirt_6_btn_c2").on("click",function() {
                    showSkirt("skirt_6_c2");
                });
                $("#skirt_6_btn_c3").on("click",function() {
                    showSkirt("skirt_6_c3");
                });
                $("#skirt_6_btn_c4").on("click",function() {
                    showSkirt("skirt_6_c4");
                });
                $("#skirt_6_btn_c5").on("click",function() {
                    showSkirt("skirt_6_c5");
                });
                $("#skirt_6_btn_c6").on("click",function() {
                    showSkirt("skirt_6_c6");
                });
                $("#skirt_6_btn_c7").on("click",function() {
                    showSkirt("skirt_6_c7");
                });
                $("#skirt_6_btn_c8").on("click",function() {
                    showSkirt("skirt_6_c8");
                });
        });
        $("#skirt_7_btn").on("click",function() {
            skirtActive("skirt_7_btn");
            showSkirt("skirt_7");
            $('#skirt_7_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn').removeClass('active-option-img');
            $('#skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_7").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6").hide();
            $("#skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_7_btn_c1").on("click",function() {
                    showSkirt("skirt_7");
                });
                $("#skirt_7_btn_c2").on("click",function() {
                    showSkirt("skirt_7_c2");
                });
                $("#skirt_7_btn_c3").on("click",function() {
                    showSkirt("skirt_7_c3");
                });
                $("#skirt_7_btn_c4").on("click",function() {
                    showSkirt("skirt_7_c4");
                });
                $("#skirt_7_btn_c5").on("click",function() {
                    showSkirt("skirt_7_c5");
                });
                $("#skirt_7_btn_c6").on("click",function() {
                    showSkirt("skirt_7_c6");
                });
                $("#skirt_7_btn_c7").on("click",function() {
                    showSkirt("skirt_7_c7");
                });
                $("#skirt_7_btn_c8").on("click",function() {
                    showSkirt("skirt_7_c8");
                });
        });
        $("#skirt_8_btn").on("click",function() {
            skirtActive("skirt_8_btn");
            showSkirt("skirt_8");
            $('#skirt_8_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn').removeClass('active-option-img');
            $('#skirt_7_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_8").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6").hide();
            $("#skirt_colors_skirt_7, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_8_btn_c1").on("click",function() {
                    showSkirt("skirt_8");
                });
                $("#skirt_8_btn_c2").on("click",function() {
                    showSkirt("skirt_8_c2");
                });
                $("#skirt_8_btn_c3").on("click",function() {
                    showSkirt("skirt_8_c3");
                });
                $("#skirt_8_btn_c4").on("click",function() {
                    showSkirt("skirt_8_c4");
                });
                $("#skirt_8_btn_c5").on("click",function() {
                    showSkirt("skirt_8_c5");
                });
                $("#skirt_8_btn_c6").on("click",function() {
                    showSkirt("skirt_8_c6");
                });
                $("#skirt_8_btn_c7").on("click",function() {
                    showSkirt("skirt_8_c7");
                });
                $("#skirt_8_btn_c8").on("click",function() {
                    showSkirt("skirt_8_c8");
                });
        });
        $("#skirt_9_btn").on("click",function() {
            skirtActive("skirt_9_btn");
            showSkirt("skirt_9");
            $('#skirt_9_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn').removeClass('active-option-img');
            $('#skirt_7_btn, #skirt_8_btn, #skirt_10_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_9").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6").hide();
            $("#skirt_colors_skirt_7, #skirt_colors_skirt_8, #skirt_colors_skirt_10, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_9_btn_c1").on("click",function() {
                    showSkirt("skirt_9");
                });
                $("#skirt_9_btn_c2").on("click",function() {
                    showSkirt("skirt_9_c2");
                });
                $("#skirt_9_btn_c3").on("click",function() {
                    showSkirt("skirt_9_c3");
                });
                $("#skirt_9_btn_c4").on("click",function() {
                    showSkirt("skirt_9_c4");
                });
                $("#skirt_9_btn_c5").on("click",function() {
                    showSkirt("skirt_9_c5");
                });
                $("#skirt_9_btn_c6").on("click",function() {
                    showSkirt("skirt_9_c6");
                });
                $("#skirt_9_btn_c7").on("click",function() {
                    showSkirt("skirt_9_c7");
                });
                $("#skirt_9_btn_c8").on("click",function() {
                    showSkirt("skirt_9_c8");
                });
        });
        $("#skirt_10_btn").on("click",function() {
            skirtActive("skirt_10_btn");
            showSkirt("skirt_10");
            $('#skirt_10_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn').removeClass('active-option-img');
            $('#skirt_7_btn, #skirt_8_btn, #skirt_9_btn, #skirt_11_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_10").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6").hide();
            $("#skirt_colors_skirt_7, #skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_11, #skirt_colors_skirt_12").hide();
                $("#skirt_10_btn_c1").on("click",function() {
                    showSkirt("skirt_10");
                });
                $("#skirt_10_btn_c2").on("click",function() {
                    showSkirt("skirt_10_c2");
                });
                $("#skirt_10_btn_c3").on("click",function() {
                    showSkirt("skirt_10_c3");
                });
                $("#skirt_10_btn_c4").on("click",function() {
                    showSkirt("skirt_10_c4");
                });
                $("#skirt_10_btn_c5").on("click",function() {
                    showSkirt("skirt_10_c5");
                });
                $("#skirt_10_btn_c6").on("click",function() {
                    showSkirt("skirt_10_c6");
                });
                $("#skirt_10_btn_c7").on("click",function() {
                    showSkirt("skirt_10_c7");
                });
                $("#skirt_10_btn_c8").on("click",function() {
                    showSkirt("skirt_10_c8");
                });
        });
        $("#skirt_11_btn").on("click",function() {
            skirtActive("skirt_11_btn");
            showSkirt("skirt_11");
            $('#skirt_11_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn').removeClass('active-option-img');
            $('#skirt_7_btn, #skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_12_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_11").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6").hide();
            $("#skirt_colors_skirt_7, #skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_12").hide();
                $("#skirt_11_btn_c1").on("click",function() {
                    showSkirt("skirt_11");
                });
                $("#skirt_11_btn_c2").on("click",function() {
                    showSkirt("skirt_11_c2");
                });
                $("#skirt_11_btn_c3").on("click",function() {
                    showSkirt("skirt_11_c3");
                });
                $("#skirt_11_btn_c4").on("click",function() {
                    showSkirt("skirt_11_c4");
                });
                $("#skirt_11_btn_c5").on("click",function() {
                    showSkirt("skirt_11_c5");
                });
                $("#skirt_11_btn_c6").on("click",function() {
                    showSkirt("skirt_11_c6");
                });
                $("#skirt_11_btn_c7").on("click",function() {
                    showSkirt("skirt_11_c7");
                });
                $("#skirt_11_btn_c8").on("click",function() {
                    showSkirt("skirt_11_c8");
                });
        });
        $("#skirt_12_btn").on("click",function() {
            skirtActive("skirt_12_btn");
            showSkirt("skirt_12");
            $('#skirt_12_btn').addClass('active-option-img');
            $('#skirt_1_btn, #skirt_2_btn, #skirt_3_btn, #skirt_4_btn, #skirt_5_btn, #skirt_6_btn').removeClass('active-option-img');
            $('#skirt_7_btn, #skirt_8_btn, #skirt_9_btn, #skirt_10_btn, #skirt_11_btn').removeClass('active-option-img');
            //Colors
            $("#skirt_colors_skirt_12").show();
            $("#skirt_colors_skirt_1, #skirt_colors_skirt_2, #skirt_colors_skirt_3, #skirt_colors_skirt_4, #skirt_colors_skirt_5, #skirt_colors_skirt_6").hide();
            $("#skirt_colors_skirt_7, #skirt_colors_skirt_8, #skirt_colors_skirt_9, #skirt_colors_skirt_10, #skirt_colors_skirt_11").hide();
                $("#skirt_12_btn_c1").on("click",function() {
                    showSkirt("skirt_12");
                });
                $("#skirt_12_btn_c2").on("click",function() {
                    showSkirt("skirt_12_c2");
                });
                $("#skirt_12_btn_c3").on("click",function() {
                    showSkirt("skirt_12_c3");
                });
                $("#skirt_12_btn_c4").on("click",function() {
                    showSkirt("skirt_12_c4");
                });
                $("#skirt_12_btn_c5").on("click",function() {
                    showSkirt("skirt_12_c5");
                });
                $("#skirt_12_btn_c6").on("click",function() {
                    showSkirt("skirt_12_c6");
                });
                $("#skirt_12_btn_c7").on("click",function() {
                    showSkirt("skirt_12_c7");
                });
                $("#skirt_12_btn_c8").on("click",function() {
                    showSkirt("skirt_12_c8");
                });
        });
        

        // Show Skirt function
        function showSkirt(elementId) {
            var element = $("#" + elementId);
            if (element.hasClass("skirt")) {
                if (currentSkirt !== "") {
                    $("#" + currentSkirt).css("visibility", "hidden");
                }
                currentSkirt = elementId;
            }
            element.css("visibility", "visible");
        }
        /**Active Triggers */
        function skirtActive(elementId) {
            var skirtContent = $("#" + elementId);
                $("#skirt_1_btn").removeClass('active-option-img');
                $("#skirt_2_btn").removeClass('active-option-img');
                $("#skirt_3_btn").removeClass('active-option-img');
                $("#skirt_4_btn").removeClass('active-option-img');
                $("#skirt_5_btn").removeClass('active-option-img');
                skirtContent.addClass('active-option-img');
        }

        /** 
         * SKIRT CLICK EVENT */

            // Last clicked skirt ID
            var lastClickedSkirtId = null;

            // Function to handle skirt click event
            function handleSkirtClick(skirtId) {
                skirtActive(skirtId + "_btn");
                showSkirt(skirtId);
                $('.responsive-skirt-container #' + skirtId + '_btn').addClass('active-option-img');
                $('.responsive-skirt-container .skirt-item .option-img').not('#' + skirtId + '_btn').removeClass('active-option-img');
                $('.skirt-container .skirt-item .option-img').not('#' + skirtId + '_btn').removeClass('active-option-img');
                lastClickedSkirtId = skirtId;
                
                // Colors
                $('.skirt-container, .responsive-skirt-container').each(function() {
                    var container = $(this);
                    container.find('.dress-skirt-colors').hide();
                    container.find('#skirt_colors_' + skirtId).show();
                    container.find('.dress-colorgroup > div').not('#skirt_colors_' + skirtId).hide();
                });
                    // Color button click 
                    $('.responsive-skirt-container .dress-colorgroup .dress-skirt-colors-' + skirtId 
                        + '> div, .skirt-container .dress-colorgroup .dress-skirt-colors-' + skirtId + ' > div').on("click",function() {
                        var colorId = $(this).attr('id').replace(skirtId + '_btn_c', '');
                        var selectedSkirt = (colorId === '1') ? skirtId : skirtId + '_c' + colorId;
                        showSkirt(selectedSkirt);
                    });
            }

                // Skirt item click
                $('.responsive-skirt-container .skirt-item, .skirt-container .skirt-item').on("click",function() {
                    var skirtId = $(this).find('.option-img').attr('id').replace('_btn', '');
                    lastClickedSkirtId = skirtId;
                    $('.skirt-container #' + skirtId + '_btn').addClass('active-option-img');
                    handleSkirtClick(skirtId);
                });

            if (lastClickedSkirtId !== null) {
                $('.responsive-skirt-container #' + lastClickedSkirtId + '_btn').addClass('active-option-img');
                $('.skirt-container #' + lastClickedSkirtId + '_btn').addClass('active-option-img');
            }


    /*--------------------------------------------------------------
    # On Load (Default)
    --------------------------------------------------------------*/
        
        // Show images
        var bodices = $('.bodice');
        var sleeves = $('.sleeves');
        var skirts = $('.skirt');

        for (var i = 0; i < bodices.length; i++) {
            if (bodices[i].id !== currentBodice) {
                $(bodices[i]).css('visibility', 'hidden');
            }
        }
        for (var j = 0; j < sleeves.length; j++) {
            if (sleeves[j].id !== currentSleeve) {
                $(sleeves[j]).css('visibility', 'hidden');
            }
        }
        for (var k = 0; k < skirts.length; k++) {
            if (skirts[k].id !== currentSkirt) {
                $(skirts[k]).css('visibility', 'hidden');
            }
        }
        
        // Show default bodice and skirt
        $('#' + currentBodice).css('visibility', 'visible');
        $('#' + currentSleeve).css('visibility', 'hidden');
        $('#' + currentSkirt).css('visibility', 'visible');

        //  Bodice
        setDefaultActiveStateForBodice();
        $("#bodice_colors_straight_2").hide();
        $("#bodice_colors_sweetheart_1").hide();
        $("#bodice_colors_sweetheart_2").hide();
        $("#bodice_colors_sweetheart_3").hide();
        $("#bodice_colors_vneck_1").hide();
        $("#bodice_colors_vneck_2").hide();
        $("#bodice_colors_vneck_3").hide();
        $("#bodice_colors_vneck_4").hide();
        $("#bodice_colors_sweetheart_4").hide();
        $("#bodice_colors_sweetheart_5").hide();
        $("#bodice_colors_off-shoulder_1").hide();
        $("#bodice_colors_scoop_1").hide();
        $("#bodice_colors_half_1").hide();
        $("#bodice_colors_boat_1").hide();
        
        // Sleeve
        setDefaultActiveStateForSleeves();
        $("#sleeves_group_show").hide();
        $(".responsive-sleeves-container #sleeves_group_show").hide();
        $("#sleeves_colors_longsleeves_1").hide();
        $(".responsive-sleeves-container #sleeves_colors_longsleeves_1").hide();
        $("#dress_colorgroup").hide();
        $(".responsive-sleeves-container #dress_colorgroup").hide();
        
        // Skirt
        setDefaultActiveStateForSkirt();
        $("#skirt_colors_skirt_2").hide();
        $("#skirt_colors_skirt_3").hide();
        $("#skirt_colors_skirt_4").hide();
        $("#skirt_colors_skirt_5").hide();
        $("#skirt_colors_skirt_6").hide();
        $("#skirt_colors_skirt_7").hide();
        $("#skirt_colors_skirt_8").hide();
        $("#skirt_colors_skirt_9").hide();
        $("#skirt_colors_skirt_10").hide();
        $("#skirt_colors_skirt_11").hide();
        $("#skirt_colors_skirt_12").hide();


        //DCT Content
        $(".responsive-custom-content").hide();

        $("#custom_btn").on("click",function () {
            $(".responsive-custom-content").slideToggle();
        });

});