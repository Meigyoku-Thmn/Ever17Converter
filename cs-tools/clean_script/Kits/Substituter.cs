using System;
using System.Collections.Generic;

partial class Kits {
   public static string FixJPTextInEnVer(string input) {
      if (input == "‚k‚qQ‚`‚O‚O‚Ì’l‚ª³‚µ‚­‚ ‚è‚Ü‚¹‚ñB") {
         input = "ＬＲ＿Ａ００の値が正しくありません。";
      }
      return input;
   }
   public static (string var, Dictionary<string, string> @enum) SubstituteVar(string type, string var) {
      string rs = var;
      var @enum = new Dictionary<string, string>();
      switch (type) {
         case "g_":
            switch (var) {
               case "08":
                  rs = "you_gd__cleared";
                  break;
               case "09":
                  rs = "_tsugumi_gd_cleared";
                  break;
               case "0d":
                  rs = "sora_or_tsugumi_gd__cleared";
                  break;
               case "0e":
                  rs = "sara_or_you_gd__cleared";
                  break;
               case "0f":
                  rs = "tsugumi_gd_cleared";
                  break;
               case "10":
                  rs = "_sora_gd_cleared";
                  break;
               case "11":
                  rs = "takeshi_ep__cleared";
                  break;
               case "12":
                  rs = "tsugumi_sora_bd__cleared";
                  break;
               case "19":
                  rs = "coco_ep__cleared";
                  break;
               case "0a":
                  rs = "sora_gd_cleared";
                  break;
               case "0b":
                  rs = "sara_gd__cleared";
                  break;
               case "0c":
                  rs = "_coco_ep__cleared";
                  break;
               case "13":
                  rs = "_you_gd_cleared";
                  break;
               case "14":
                  rs = "you_gd_cleared";
                  break;
               case "15":
                  rs = "you_bd_cleared";
                  break;
               case "16":
                  rs = "_sara_gd_cleared";
                  break;
               case "17":
                  rs = "sara_gd_cleared";
                  break;
               case "18":
                  rs = "sara_bd_cleared";
                  break;
               case "1a":
                  rs = "coco_route_unlock";
                  break;
               case "1b":
                  rs = "kid_bd__cleared";
                  break;
            }
            break;
         case "l_":
            switch (var) {
               case "24":
                  rs = "_coco_route_unlock";
                  break;
               case "25":
                  rs = "_you_ep__cleared";
                  break;
               case "26":
                  rs = "_tsugumi_gd__cleared";
                  break;
               case "27":
                  rs = "_sora_gd__cleared";
                  break;
               case "28":
                  rs = "_sara_ep__cleared";
                  break;
               case "29":
                  rs = "coco_ep__clear";
                  break;
               case "2a":
                  rs = "coco_ep_reach_a";
                  break;
               case "2b":
                  rs = "coco_ep_reach_b";
                  break;
               case "2c":
                  rs = "coco_ep_reach_c";
                  break;
               case "2d":
                  rs = "coco_ep_reach_d";
                  break;
               case "2e":
                  rs = "coco_ep_reach_e";
                  break;
               case "2f":
                  rs = "coco_ep_reach_f";
                  break;
               case "b1":
                  rs = "dayA";
                  break;
               case "b2":
                  rs = "dayB";
                  break;
               case "b3":
                  rs = "choice";
                  break;
               case "b6":
                  rs = "you_point";
                  break;
               case "b7":
                  rs = "tsugumi_point";
                  break;
               case "b8":
                  rs = "sora_point";
                  break;
               case "b9":
                  rs = "sara_point";
                  break;
               case "ba":
                  rs = "coco_point";
                  break;
               case "bb":
                  rs = "counter";
                  break;
               case "bc":
                  rs = "choice_flag1";
                  break;
               case "bd":
                  rs = "choice_flag2";
                  break;
               case "bf":
                  rs = "accumulator";
                  break;
               case "c7":
                  rs = "ending";
                  @enum = new Dictionary<string, string>() {
                        { "3", "`sara_gd`" }, { "6", "`sara_bd`" },
                        { "2", "`you_gd`" }, { "5", "`you_bd`" },
                        { "4", "`takeshi_bd`" },
                        { "1", "`sora_gd`" }, { "0", "`tsugumi_gd`" },
                     };
                  break;
               case "d0":
                  rs = "selection_0_available";
                  break;
               case "d1":
                  rs = "selection_1_available";
                  break;
               case "d2":
                  rs = "selection_2_available";
                  break;
               case "d3":
                  rs = "selection_3_available";
                  break;
               case "d4":
                  rs = "selection_4_available";
                  break;
               case "d5":
                  rs = "selection_5_available";
                  break;
               case "d8":
                  rs = "looked_for_you";
                  break;
               case "d9":
                  rs = "tsugumi_flag";
                  break;
               case "da":
                  rs = "sora_flag";
                  break;
               case "db":
                  rs = "repaired_with_sara";
                  break;
               case "dd":
                  rs = "listened_to_the_joke";
                  break;
               case "de":
                  rs = "blamed_the_tanuki";
                  break;
               case "df":
                  rs = "wanted_to_be_called_prince";
                  break;
               case "e0":
                  rs = "thought_you_can_swim_34_meters_regardless_water_pressure";
                  break;
               case "e1":
                  rs = "went_to_merry_go_round";
                  break;
               case "e2":
                  rs = "went_to_warehouse";
                  break;
               case "e3":
                  rs = "chose_to_wait_there_in_2nd_day";
                  break;
               case "e4":
                  rs = "went_with_you_in_2nd_day";
                  break;
               case "e5":
                  rs = "chose_almost_completely_vertical";
                  break;
               case "e6":
                  rs = "talked_to_you_about_her_father_in_6th_day";
                  break;
               case "e7":
                  rs = "you_gd_flag";
                  break;
               case "e8":
                  rs = "said_it_is_not_soras_fault";
                  break;
               case "e9":
                  rs = "decide_go_to_sora_in_2nd_day";
                  break;
               case "eb":
                  rs = "made_the_pipe_steam_sounds_louder";
                  break;
               case "ec":
                  rs = "went_outside_as_sora_suggests_in_3rd_day";
                  break;
               case "ed":
                  rs = "confessed_the_truth_in_4th_day";
                  break;
               case "ee":
                  rs = "skeptical_about_coco_having_decompression_sickness";
                  break;
               case "ef":
                  rs = "went_with_sara_in_3rd_day";
                  break;
               case "f0":
                  rs = "know_sora_is_an_ai";
                  break;
               case "f1":
                  rs = "is_coco_route";
                  break;
               case "f2":
                  rs = "sc2f_clear";
                  break;
            }
            break;
         case "eff_":
            break;
         case "dimOff_":
            break;
         case "sys_":
            switch (var) {
               case "f1":
                  rs = "allow_shortcut";
                  break;
               case "f2":
                  rs = "allow_jukebox";
                  break;
               case "f3":
                  rs = "allow_album";
                  break;
               case "f5":
                  rs = "allow_clearlist";
                  break;
            }
            break;

      }
      return (rs, @enum);
   }
}