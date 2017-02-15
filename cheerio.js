var cheerio = require('cheerio');
var html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" dir="ltr" lang="en" id="vbulletin_html">
    <head>
        <base href="http://www.3dsiso.com/" />
        <!--[if IE]>
        </base>
        <![endif]-->
        <link rel="canonical" href="http://www.3dsiso.com/cia-downloads/" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta id="e_vb_meta_bburl" name="vb_meta_bburl" content="http://www.3dsiso.com" />
        <meta name="generator" content="vBulletin 4.2.3" />
        <meta http-equiv="X-UA-Compatible" content="IE=9" />
        <link rel="Shortcut Icon" href="http://www.3dsiso.com/favicon.ico" type="image/x-icon" />
        <meta name="keywords" content="font,color,ef733f,CIA,Downloads,CIA Downloads, 3dsiso, forum" />
        <meta name="description" content="CIA Downloads - Games, Nintendo eshop games & apps in CIA format can be found here!" />
        <meta property="fb:app_id" content="1377720232451715" />
        <meta property="og:site_name" content="Nintendo 3DSISO" />
        <meta property="og:description" content="CIA Downloads - Games, Nintendo eshop games & apps in CIA format can be found here!" />
        <meta property="og:url" content="http://www.3dsiso.com/cia-downloads/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://www.3dsiso.com/images/wiiso_logo.png" />
        <meta property="og:title" content="CIA Downloads" />
        <script type="text/javascript">
            <!--
  if (typeof YAHOO === 'undefined') // Load ALL YUI Local
  {
    document.write('<script type="text/javascript" src="clientscript/yui/yuiloader-dom-event/yuiloader-dom-event.js?v=423"><\/script>');
    document.write('<script type="text/javascript" src="clientscript/yui/connection/connection-min.js?v=423"><\/script>');
    var yuipath = 'clientscript/yui';
    var yuicombopath = '';
    var remoteyui = false;
  }
  else  // Load Rest of YUI remotely (where possible)
  {
    var yuipath = 'clientscript/yui';
    var yuicombopath = '';
    var remoteyui = true;
    if (!yuicombopath)
    {
      document.write('<script type="text/javascript" src="clientscript/yui/connection/connection-min.js?v=423"><\/script>');
    }
  }
  var SESSIONURL = "s=b1372a653cf5892c033fb23921d82ccc&";
  var SECURITYTOKEN = "guest";
  var IMGDIR_MISC = "images/misc";
  var IMGDIR_BUTTON = "images/buttons";
  var vb_disable_ajax = parseInt("0", 10);
  var SIMPLEVERSION = "423";
  var BBURL = "http://www.3dsiso.com";
  var LOGGEDIN = 0 > 0 ? true : false;
  var THIS_SCRIPT = "forumdisplay";
  var RELPATH = "forumdisplay.php?f=261";
  var PATHS = {
    forum : "",
    cms   : "",
    blog  : ""
  };
  var AJAXBASEURL = "http://www.3dsiso.com/";
// -->

        </script>
        <script type="text/javascript" src="http://www.3dsiso.com/clientscript/vbulletin-core.js?v=423"></script>
        <link rel="stylesheet" type="text/css" href="http://www.3dsiso.com/css.php?styleid=33&amp;langid=1&amp;d=1485159289&amp;td=ltr&amp;sheet=bbcode.css,editor.css,popupmenu.css,reset-fonts.css,vbulletin.css,vbulletin-chrome.css,vbulletin-formcontrols.css," />
        <!--[if lt IE 8]>
        <link rel="stylesheet" type="text/css" href="http://www.3dsiso.com/css.php?styleid=33&amp;langid=1&amp;d=1485159289&amp;td=ltr&amp;sheet=popupmenu-ie.css,vbulletin-ie.css,vbulletin-chrome-ie.css,vbulletin-formcontrols-ie.css,editor-ie.css" />
        <![endif]-->
        <script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "url": "http://www.3dsiso.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "http://www.3dsiso.com/search.php?do=process&query={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
        <script type="text/javascript">var _prx = [];_prx.push(["cfg.RequestUrl"," http://www.3dsiso.com/forumdisplay.php?f=261"]);</script>
        <script type="text/javascript" src="http://a.postrelease.com/serve/load.js?async=true"></script>
        <title>CIA Downloads</title>
        <script type="text/javascript" src="clientscript/vbulletin_read_marker.js?v=423"></script>
        <link rel="stylesheet" type="text/css" href="http://www.3dsiso.com/css.php?styleid=33&amp;langid=1&amp;d=1485159289&amp;td=ltr&amp;sheet=toolsmenu.css,forumbits.css,forumdisplay.css,threadlist.css,options.css" />
        <!--[if lt IE 8]>
        <script type="text/javascript" src="clientscript/vbulletin-threadlist-ie.js?v=423"></script>
        <link rel="stylesheet" type="text/css" href="http://www.3dsiso.com/css.php?styleid=33&amp;langid=1&amp;d=1485159289&amp;td=ltr&amp;sheet=toolsmenu-ie.css,forumbits-ie.css,forumdisplay-ie.css,threadlist-ie.css,options-ie.css" />
        <![endif]-->
        <link rel="stylesheet" type="text/css" href="http://www.3dsiso.com/css.php?styleid=33&amp;langid=1&amp;d=1485159289&amp;td=ltr&amp;sheet=additional.css" />
    </head>
    <body>
        <style>
#hasan span a{
background: none;
margin-top:-5px;
}
</style>
        <div class="above_body" style="background:url(http://hosting.fayp.com/vi-nAybUB.jpg); background-repeat:no-repeat;">
            <!-- closing tag is in template navbar -->
            <div id="header" class="floatcontainer doc_header" style="padding-top:20px;">
                <div>
                    <a name="top" href="http://www.3dsiso.com/?s=b1372a653cf5892c033fb23921d82ccc" class="logo-image">
                        <img src="http://hosting.fayp.com/vi-XlwD.png" alt="Nintendo 3DSISO - Powered by vBulletin" />
                    </a>
                </div>
                <div id="toplinks" class="toplinks">
                    <ul class="nouser">
                        <li>
                            <a href="http://www.3dsiso.com/register.php?s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Register</a>
                        </li>
                        <li>
                            <a rel="help" href="http://www.3dsiso.com/faq.php?s=b1372a653cf5892c033fb23921d82ccc">Help</a>
                        </li>
                        <li>
                            <script type="text/javascript" src="clientscript/vbulletin_md5.js?v=423"></script>
                            <form id="navbar_loginform" action="http://www.3dsiso.com/login.php?s=b1372a653cf5892c033fb23921d82ccc&amp;do=login" method="post" onsubmit="md5hash(vb_login_password, vb_login_md5password, vb_login_md5password_utf, 0)">
                                <fieldset id="logindetails" class="logindetails" style="height:39px;">
                                    <div>
                                        <div>
                                            <input type="text" class="textbox default-value" name="vb_login_username" id="navbar_username" size="10" accesskey="u" tabindex="101" value="User Name" style="font-size:15px; padding:2px;"/>
                                            <input type="password" class="textbox" tabindex="102" name="vb_login_password" id="navbar_password" size="10" style="font-size:15px; padding:2px;"/>
                                            <input type="text" class="textbox default-value" tabindex="102" name="vb_login_password_hint" id="navbar_password_hint" size="10" value="Password" style="display:none;font-size:15px; padding:2px;" />
                                            <input type="submit" class="loginbutton" tabindex="104" value="Log in" title="Enter your username and password in the boxes provided to login, or click the 'register' button to create a profile for yourself." accesskey="s" style="font-size:15px; padding:2px;"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <div id="remember" class="remember">
                                    <label for="cb_cookieuser_navbar">
                                        <input type="checkbox" name="cookieuser" value="1" id="cb_cookieuser_navbar" class="cb_cookieuser_navbar" accesskey="c" tabindex="103" /> Remember Me?
                                    </label>
                                </div>
                                <input type="hidden" name="s" value="b1372a653cf5892c033fb23921d82ccc" />
                                <input type="hidden" name="securitytoken" value="guest" />
                                <input type="hidden" name="do" value="login" />
                                <input type="hidden" name="vb_login_md5password" />
                                <input type="hidden" name="vb_login_md5password_utf" />
                            </form>
                            <script type="text/javascript">
      YAHOO.util.Dom.setStyle('navbar_password_hint', "display", "inline");
      YAHOO.util.Dom.setStyle('navbar_password', "display", "none");
      vB_XHTML_Ready.subscribe(function()
      {
      //
        YAHOO.util.Event.on('navbar_username', "focus", navbar_username_focus);
        YAHOO.util.Event.on('navbar_username', "blur", navbar_username_blur);
        YAHOO.util.Event.on('navbar_password_hint', "focus", navbar_password_hint);
        YAHOO.util.Event.on('navbar_password', "blur", navbar_password);
      });
      
      function navbar_username_focus(e)
      {
      //
        var textbox = YAHOO.util.Event.getTarget(e);
        if (textbox.value == 'User Name')
        {
        //
          textbox.value='';
          textbox.style.color='';
        }
      }

      function navbar_username_blur(e)
      {
      //
        var textbox = YAHOO.util.Event.getTarget(e);
        if (textbox.value == '')
        {
        //
          textbox.value='User Name';
          textbox.style.color='';
        }
      }
      
      function navbar_password_hint(e)
      {
      //
        var textbox = YAHOO.util.Event.getTarget(e);
        
        YAHOO.util.Dom.setStyle('navbar_password_hint', "display", "none");
        YAHOO.util.Dom.setStyle('navbar_password', "display", "inline");
        YAHOO.util.Dom.get('navbar_password').focus();
      }

      function navbar_password(e)
      {
      //
        var textbox = YAHOO.util.Event.getTarget(e);
        
        if (textbox.value == '')
        {
          YAHOO.util.Dom.setStyle('navbar_password_hint', "display", "inline");
          YAHOO.util.Dom.setStyle('navbar_password', "display", "none");
        }
      }
      </script>
                        </li>
                        <li id="hasan"></li>
                        <li id="fb_headerbox" class="hidden">
                            <a id="fb_loginbtn" href="http://www.3dsiso.com/cia-downloads/#">
                                <img src="http://www.3dsiso.com/images/misc/facebook_login.gif" alt="The Facebook Platform" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="ad_global_header">
    
  </div>
                <hr />
            </div>
            <div align="center" style="margin-top:20px;"></div>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
            <div id="navbar" class="navbar">
                <ul id="navtabs" class="navtabs floatcontainer">
                    <li class="selected" id="vbtab_forum">
                        <a class="navtab" href="http://www.3dsiso.com/?s=b1372a653cf5892c033fb23921d82ccc">Forum</a>
                    </li>
                    <ul class="floatcontainer">
                        <li id="vbflink_newposts">
                            <a rel="nofollow" href="http://www.3dsiso.com/search.php?do=getnew&amp;contenttype=vBForum_Post&amp;s=b1372a653cf5892c033fb23921d82ccc">New Posts</a>
                        </li>
                        <li id="vbflink_faq">
                            <a href="http://www.3dsiso.com/faq.php?s=b1372a653cf5892c033fb23921d82ccc">FAQ</a>
                        </li>
                        <li id="vbflink_calendar">
                            <a href="http://www.3dsiso.com/calendar.php?s=b1372a653cf5892c033fb23921d82ccc">Calendar</a>
                        </li>
                        <li class="popupmenu" id="vbmenu_actions">
                            <a href="javascript://" class="popupctrl">Forum Actions</a>
                            <ul class="popupbody popuphover">
                                <li id="vbalink_mfr">
                                    <a rel="nofollow" href="http://www.3dsiso.com/forumdisplay.php?do=markread&amp;markreadhash=guest&amp;s=b1372a653cf5892c033fb23921d82ccc">Mark Forums Read</a>
                                </li>
                            </ul>
                        </li>
                        <li class="popupmenu" id="vbmenu_qlinks">
                            <a href="javascript://" class="popupctrl">Quick Links</a>
                            <ul class="popupbody popuphover">
                                <li id="vbqlink_posts">
                                    <a href="http://www.3dsiso.com/search.php?do=getdaily&amp;contenttype=vBForum_Post&amp;s=b1372a653cf5892c033fb23921d82ccc">Today's Posts</a>
                                </li>
                                <li id="vbqlink_leaders">
                                    <a href="http://www.3dsiso.com/showgroups.php?s=b1372a653cf5892c033fb23921d82ccc">View Site Leaders</a>
                                </li>
                                <li id="vbqlink_online">
                                    <a href="http://www.3dsiso.com/online.php?s=b1372a653cf5892c033fb23921d82ccc">Who's Online</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <li  id="vbtab_whatsnew">
                        <a class="navtab" href="http://www.3dsiso.com/activity.php?s=b1372a653cf5892c033fb23921d82ccc">Activity Stream</a>
                    </li>
                    <li  id="tab_odk2_150">
                        <a class="navtab" href="http://www.3dsiso.com/showgroups.php">Contact Staff</a>
                    </li>
                </ul>
                <div id="globalsearch" class="globalsearch">
                    <form action="http://www.3dsiso.com/search.php?s=b1372a653cf5892c033fb23921d82ccc&amp;do=process" method="post" id="navbar_search" class="navbar_search">
                        <input type="hidden" name="securitytoken" value="guest" />
                        <input type="hidden" name="do" value="process" />
                        <span class="textboxcontainer">
                            <span>
                                <input type="text" value="" name="query" class="textbox" tabindex="99"/>
                            </span>
                        </span>
                        <span class="buttoncontainer">
                            <span>
                                <input type="image" class="searchbutton" src="images/buttons/search.png" name="submit" onclick="document.getElementById('navbar_search').submit;" tabindex="100"/>
                            </span>
                        </span>
                    </form>
                    <ul class="navbar_advanced_search">
                        <li>
                            <a href="http://www.3dsiso.com/search.php?s=b1372a653cf5892c033fb23921d82ccc" accesskey="4">Advanced Search</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- closing div for above_body -->
        <div class="body_wrapper">
            <div id="breadcrumb" class="breadcrumb">
                <ul class="floatcontainer">
                    <li class="navbithome">
                        <a href="http://www.3dsiso.com/index.php?s=b1372a653cf5892c033fb23921d82ccc" accesskey="1">
                            <img src="http://www.3dsiso.com/images/misc/navbit-home.png" alt="Home" />
                        </a>
                    </li>
                    <div itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb">
                        <li class="navbit">
                            <a href="http://www.3dsiso.com/?s=b1372a653cf5892c033fb23921d82ccc" itemprop="url">
                                <span itemprop="title">Forum</span>
                            </a>
                        </li>
                    </div>
                    <div itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb">
                        <li class="navbit">
                            <a href="http://www.3dsiso.com/nintendo-3ds-roms-homebrews-and-downloads/?s=b1372a653cf5892c033fb23921d82ccc" itemprop="url">
                                <span itemprop="title">
                                    <font color= ef733f>Nintendo 3DS ROMs, Homebrews and Downloads</font color>
                                </span>
                            </a>
                        </li>
                    </div>
                    <li class="navbit lastnavbit">
                        <span itemprop="title">
                            <font color= ef733f>CIA Downloads</font color>
                        </span>
                    </li>
                </ul>
                <hr />
            </div>
            <div id="ad_global_below_navbar">
                <div align="center">
                    <script src=http://174.133.197.186/adcode/iso.php?user_id=802></script>
                </div>
            </div>
            <div></div>
            <div></div>
            <!-- Facebook Start -->
            <style>
.facebooklike{
  height:45px;
  width:auto;
  background-color:#3B5998;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        -khtml-border-radius: 3px;
         border-radius: 3px;
         margin-bottom:10px;

}
.fblike{
  float:left;
  width:auto;
  height:44px;
  padding:0px;  
}
</style>
            <div class="facebooklike">
                <div style="text-align:center; width:1000px; margin-left:auto; margin-right:auto;">
                    <div class="fblike" style="padding-top:3px;">
                        <img src="http://www.ps3iso.com/images/likeus.png" width="470">
      
                    </div>
                    <div class="fblike" style="width:150px; padding-top:13px;">
                        <div id="fb-root"></div>
                        <div class="fb-like" data-href="https://www.facebook.com/3dsiso" data-width="450" data-layout="button_count" data-show-faces="false" data-send="true"></div>
                    </div>
                    <div class="fblike" style="padding-top:3px;">
                        <img src="http://cdn.isonw.com/img/3dsiso/shareus.png" width="376">
        
                    </div>
                    <div style="clear:left"></div>
                </div>
            </div>
            <!-- Facebook Finish -->
            <form action="http://www.3dsiso.com/profile.php?do=dismissnotice" method="post" id="notices" class="notices">
                <input type="hidden" name="do" value="dismissnotice" />
                <input type="hidden" name="s" value="s=b1372a653cf5892c033fb23921d82ccc&amp;" />
                <input type="hidden" name="securitytoken" value="guest" />
                <input type="hidden" id="dismiss_notice_hidden" name="dismiss_noticeid" value="" />
                <input type="hidden" name="url" value="" />
                <ol>
                    <li class="restore" id="navbar_notice_22">
                        <FONT SIZE=+7>
                            <center>Gateway</center>
                        </FONT>
                        <br>
                        <FONT SIZE=+1>
                            <center>&#9733;  Gateway Ultra V3.7.1 Released

                                <a rel="nofollow" href="http://www.3dsiso.com/gateway/268981-gateway-ultra-v3-4-public-beta-released-post365019.html?268981-Gateway-Ultra-V3-4-Public-Beta-Released=#post365019"> Click Here For More Info</a>! &#9733;
                            </center>
                        </FONT>
                        <FONT SIZE=+1>
                            <center>&#9733;  Gateway 4.1 - 4.5 Noob Proof Set Up Guide 

                                <a rel="nofollow" href="http://www.3dsiso.com/gateway/268982-gateway-2-7-set-guide-post365020.html?268982-Gateway-2-7-Set-Up-Guide=#post365020"> Click Here To Read The Guide</a>! &#9733;
                            </center>
                        </FONT>
                    </li>
                    <li class="restore" id="navbar_notice_23">
                        <FONT SIZE=+7>
                            <center>CFW</center>
                        </FONT>
                        <br>
                        <FONT SIZE=+1>
                            <center>&#9733;  rxTools Pasta Edition Released!! 9.8 emuNAND Support, Install Un-Signed CIA

                                <a rel="nofollow" href="http://www.3dsiso.com/cfw-discussions/267661-rxpasta-run-unsigned-cias-rxtools-post355180.html?267661-RxTools-Pasta-Eddition=#post355180"> Click Here To Read More </a>! &#9733;
                            </center>
                        </FONT>
                        <FONT SIZE=+1>
                            <center>&#9733;  Palantine CFW, Dual Nand & rxTools Tutorial 

                                <a rel="nofollow" href="http://www.3dsiso.com/3ds-tips-and-tutorials/266709-tutorial-setting-palantine-cfw-dual-nand-rxtools-3ds-3ds-xl-post347451.html?266709-Tutorial-Setting-Up-Palantine-CFW-Dual-Nand-And-rxTools-Old-3DS-only=#post347451"> Click Here To Read The Guide</a>! &#9733;
                            </center>
                        </FONT>
                        <FONT SIZE=+1>
                            <center>&#9733;  PBT CFW & rxTools Tutorial  

                                <a rel="nofollow" href="http://www.3dsiso.com/3ds-tips-and-tutorials/266330-megatutorial-pbt-cfw-emunand-9-8-a-post344520.html?266330-Megatutorial-PBT-CFW-emunand-9-7=#post344520"> Click Here To Read The Guide</a>! &#9733;
                            </center>
                        </FONT>
                    </li>
                    <li class="restore" id="navbar_notice_24">
                        <FONT SIZE=+7>
                            <center>Sky3DS</center>
                        </FONT>
                        <br>
                        <FONT SIZE=+1>
                            <center>&#9733;  Sky3DS For The Latest Firmware 10.3.0-28 
                                <a rel="nofollow" href="http://www.3dsiso.com/forumdisplay.php?260-SKY3DS"> Check Out Our Sky3DS Section Here</a>! &#9733;
                            </center>
                        </FONT>
                        <FONT SIZE=+1>
                            <center>&#9733;  Sky3DS Red & Blue Button Set Up Guides

                                <a rel="nofollow" href="http://www.3dsiso.com/showthread.php?266551-Red-amp-Blue-Button-SKY3DS-Tutorials"> Click Here To Read The Guides</a>! &#9733;
                            </center>
                        </FONT>
                    </li>
                </ol>
            </form>
            <div id="above_threadlist" class="above_threadlist">
                <div class="threadpagenav">
                    <form action="http://www.3dsiso.com/forumdisplay.php?f=261&amp;page=51&amp;s=b1372a653cf5892c033fb23921d82ccc" method="get" class="pagination popupmenu nohovermenu">
                        <input type="hidden" name="f" value="261" />
                        <input type="hidden" name="s" value="b1372a653cf5892c033fb23921d82ccc" />
                        <span>
                            <a href="javascript://" class="popupctrl">Page 1 of 58</a>
                        </span>
                        <span class="selected">
                            <a href="javascript://" title="Results 1 to 20 of 1,142">1</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index2.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 21 to 40 of 1,142">2</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index3.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 41 to 60 of 1,142">3</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index4.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 61 to 80 of 1,142">4</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index5.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 81 to 100 of 1,142">5</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index11.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 201 to 220 of 1,142">
                                <!--+10-->11
                            </a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index51.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 1,001 to 1,020 of 1,142">
                                <!--+50-->51
                            </a>
                        </span>
                        <span class="separator">...</span>
                        <span class="prev_next">
                            <a rel="next" href="http://www.3dsiso.com/cia-downloads/index2.html?s=b1372a653cf5892c033fb23921d82ccc" title="Next Page - Results 21 to 40 of 1,142">
                                <img src="http://www.3dsiso.com/images/pagination/next-right.png" alt="Next" />
                            </a>
                        </span>
                        <span class="first_last">
                            <a href="http://www.3dsiso.com/cia-downloads/index58.html?s=b1372a653cf5892c033fb23921d82ccc" title="Last Page - Results 1,141 to 1,142 of 1,142">Last
                                <img src="http://www.3dsiso.com/images/pagination/last-right.png" alt="Last" />
                            </a>
                        </span>
                        <ul class="popupbody popuphover">
                            <li class="formsubmit jumptopage">
                                <label>Jump to page: 
                                    <input type="text" name="page" size="4" />
                                </label>
                                <input type="submit" class="button" value="Go" />
                            </li>
                        </ul>
                    </form>
                    <div id="threadpagestats" class="threadpagestats">Threads 1 to 20 of 1142</div>
                </div>
            </div>
            <div id="pagetitle" class="pagetitle">
                <h1>Forum: 
                    <span class="forumtitle">
                        <font color= ef733f>CIA Downloads</font color>
                    </span>
                </h1>
                <p class="description">
                    <font color= 000000>Games, Nintendo eshop games &amp; apps in CIA format can be found here!</font color>
                </p>
            </div>
            <div id="above_threadlist_controls" class="above_threadlist_controls toolsmenu">
                <div>
                    <ul class="popupgroup forumdisplaypopups" id="forumdisplaypopups">
                        <li class="popupmenu nohovermenu" id="forumtools">
                            <h6>
                                <a href="javascript://" class="popupctrl" rel="nofollow">Forum Tools</a>
                            </h6>
                            <ul class="popupbody popuphover">
                                <li>
                                    <a href="http://www.3dsiso.com/forumdisplay.php?do=markread&amp;f=261&amp;markreadhash=guest&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow" onclick="return mark_forum_and_threads_read(261);">
                Mark This Forum Read
              </a>
                                </li>
                                <li>
                                    <a href="http://www.3dsiso.com/nintendo-3ds-roms-homebrews-and-downloads/?s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">View Parent Forum</a>
                                </li>
                            </ul>
                        </li>
                        <li class="popupmenu nohovermenu forumsearch menusearch" id="forumsearch">
                            <h6>
                                <a href="javascript://" class="popupctrl">Search Forum</a>
                            </h6>
                            <form action="http://www.3dsiso.com/search.php?do=process" method="get">
                                <ul class="popupbody popuphover">
                                    <li>
                                        <input type="text" class="searchbox" name="q" value="Search..." />
                                        <input type="submit" class="button" value="Search" />
                                    </li>
                                    <li class="formsubmit" id="popupsearch">
                                        <div class="submitoptions">
                                            <label>
                                                <input type="radio" name="showposts" value="0" checked="checked" /> Show Threads
                                            </label>
                                            <label>
                                                <input type="radio" name="showposts" value="1" /> Show Posts
                                            </label>
                                        </div>
                                        <div class="advancedsearchlink">
                                            <a href="http://www.3dsiso.com/search.php?search_type=1&amp;contenttype=vBForum_Post&amp;forumchoice[]=261&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Advanced Search</a>
                                        </div>
                                    </li>
                                </ul>
                                <input type="hidden" name="s" value="b1372a653cf5892c033fb23921d82ccc" />
                                <input type="hidden" name="securitytoken" value="guest" />
                                <input type="hidden" name="do" value="process" />
                                <input type="hidden" name="contenttype" value="vBForum_Post" />
                                <input type="hidden" name="forumchoice[]" value="261" />
                                <input type="hidden" name="childforums" value="1" />
                                <input type="hidden" name="exactname" value="1" />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="forumbits" class="forumbits">
                <div class="forumhead">
                    <h2>
                        <span class="forumtitle">Sub-Forums</span>
                        <span class="forumthreadpost">Threads / Posts&nbsp;</span>
                        <span class="forumlastpost">Last Post</span>
                    </h2>
                </div>
                <ol>
                    <li id="forum262" class="forumbit_post old L1">
                        <div class="forumbit_post L2">
                            <div class="forumrow">
                                <div class="foruminfo">
                                    <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_262" alt="" />
                                    <div class="forumdata">
                                        <div class="datacontainer">
                                            <div class="titleline">
                                                <h2 class="forumtitle">
                                                    <a href="http://www.3dsiso.com/cia-requests/?s=b1372a653cf5892c033fb23921d82ccc">
                                                        <font color= ef733f>CIA Requests</font color>
                                                    </a>
                                                </h2>
                                            </div>
                                            <p class="forumdescription">Request any Games, Nintendo eshop games &amp; apps in CIA format here</p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="nocss_label">Forum Actions:</h4>
                                <ul class="forumactionlinks td">
      
        
        
      
      </ul>
                                <h4 class="nocss_label">Forum Statistics:</h4>
                                <ul class="forumstats_2 td">
                                    <li>Threads: 3,039</li>
                                    <li>Posts: 12,786</li>
                                </ul>
                                <div class="forumlastpost td">
                                    <h4 class="lastpostlabel">Last Post:</h4>
                                    <div>
                                        <p class="lastposttitle">
                                            <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                            <a href="http://www.3dsiso.com/cia-requests/279997-mario-sports-superstar-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread 'Mario Sports Superstar'">Mario Sports Superstar</a>
                                            <a href="http://www.3dsiso.com/cia-requests/279997-mario-sports-superstar-post467780.html?s=b1372a653cf5892c033fb23921d82ccc#post467780">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </p>
                                        <div class="lastpostby">
  
    by 
                                            <div class="popupmenu memberaction">
                                                <a class="username online popupctrl" href="http://www.3dsiso.com/members/346179.html?s=b1372a653cf5892c033fb23921d82ccc" title="AceTechHD is online now">
                                                    <strong>AceTechHD</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/346179.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=346179&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=346179&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="lastpostdate">36 Minutes Ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="forum263" class="forumbit_post old L1">
                        <div class="forumbit_post L2">
                            <div class="forumrow">
                                <div class="foruminfo">
                                    <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_263" alt="" />
                                    <div class="forumdata">
                                        <div class="datacontainer">
                                            <div class="titleline">
                                                <h2 class="forumtitle">
                                                    <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates/?s=b1372a653cf5892c033fb23921d82ccc">
                                                        <font color= ef733f>CIA Format DLC's, Themes &amp; Updates</font color>
                                                    </a>
                                                </h2>
                                            </div>
                                            <p class="forumdescription">
                                                <font color= 000000>DLC's, Theme's &amp; Updates in CIA format can be found here!</font color>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="nocss_label">Forum Actions:</h4>
                                <ul class="forumactionlinks td">
      
        
        
      
      </ul>
                                <h4 class="nocss_label">Forum Statistics:</h4>
                                <ul class="forumstats_2 td">
                                    <li>Threads: 1,052</li>
                                    <li>Posts: 13,332</li>
                                </ul>
                                <div class="forumlastpost td">
                                    <h4 class="lastpostlabel">Last Post:</h4>
                                    <div>
                                        <p class="lastposttitle">
                                            <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                            <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates-requests/279052-request-please-upload-shin-megami-tensei-4-apocalypse-eur-dlc-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread '(REQUEST) can anyone please upload  shin megami tensei 4 apocalypse EUR DLC ?'">(REQUEST) can anyone please...</a>
                                            <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates-requests/279052-request-please-upload-shin-megami-tensei-4-apocalypse-eur-dlc-post467781.html?s=b1372a653cf5892c033fb23921d82ccc#post467781">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </p>
                                        <div class="lastpostby">
  
    by 
                                            <div class="popupmenu memberaction">
                                                <a class="username online popupctrl" href="http://www.3dsiso.com/members/33512.html?s=b1372a653cf5892c033fb23921d82ccc" title="microtouch is online now">
                                                    <strong>microtouch</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/33512.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=33512&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=33512&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="lastpostdate">24 Minutes Ago</p>
                                    </div>
                                </div>
                            </div>
                            <ol id="childforum_for_263" class="childsubforum">
                                <li id="forum264" class="forumbit_post old L2">
                                    <div class="forumrow table">
                                        <div class="foruminfo td">
                                            <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_264" alt="" />
                                            <div class="forumdata">
                                                <div class="datacontainer">
                                                    <div class="titleline">
                                                        <h2 class="forumtitle">
                                                            <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates-requests/?s=b1372a653cf5892c033fb23921d82ccc">
                                                                <font color= ef733f>CIA Format DLC's, Themes &amp; Updates Requests</font color>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <p class="forumdescription">
                                                        <font color= 000000>Request Any DLC's, Theme's &amp; Updates in CIA format here!</font color>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="nocss_label">Forum Actions:</h4>
                                        <div class="forumactionlinks"></div>
                                        <h4 class="nocss_label">Forum Statistics:</h4>
                                        <ul class="forumstats td">
                                            <li>Threads: 764</li>
                                            <li>Posts: 3,216</li>
                                        </ul>
                                        <div class="forumlastpost td">
                                            <h4 class="lastpostlabel">Last Post:</h4>
                                            <div>
                                                <p class="lastposttitle">
                                                    <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                                    <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates-requests/279052-request-please-upload-shin-megami-tensei-4-apocalypse-eur-dlc-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread '(REQUEST) can anyone please upload  shin megami tensei 4 apocalypse EUR DLC ?'">(REQUEST) can anyone please...</a>
                                                    <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates-requests/279052-request-please-upload-shin-megami-tensei-4-apocalypse-eur-dlc-post467781.html?s=b1372a653cf5892c033fb23921d82ccc#post467781">
                                                        <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                                    </a>
                                                </p>
                                                <div class="lastpostby">
  
    by 
                                                    <div class="popupmenu memberaction">
                                                        <a class="username online popupctrl" href="http://www.3dsiso.com/members/33512.html?s=b1372a653cf5892c033fb23921d82ccc" title="microtouch is online now">
                                                            <strong>microtouch</strong>
                                                        </a>
                                                        <ul class="popupbody popuphover memberaction_body">
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/members/33512.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                            </li>
                                                            <li class="right">
                                                                <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=33512&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                            </li>
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=33512&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="lastpostdate">24 Minutes Ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li id="forum270" class="forumbit_post old L1">
                        <div class="forumbit_post L2">
                            <div class="forumrow">
                                <div class="foruminfo">
                                    <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_270" alt="" />
                                    <div class="forumdata">
                                        <div class="datacontainer">
                                            <div class="titleline">
                                                <h2 class="forumtitle">
                                                    <a href="http://www.3dsiso.com/cia-format-dsi-ware/?s=b1372a653cf5892c033fb23921d82ccc">
                                                        <font color= ef733f>CIA Format DSi Ware</font color>
                                                    </a>
                                                </h2>
                                            </div>
                                            <p class="forumdescription">
                                                <font color= 000000>DSi Ware in CIA format can be found here!</font color>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="nocss_label">Forum Actions:</h4>
                                <ul class="forumactionlinks td">
      
        
        
      
      </ul>
                                <h4 class="nocss_label">Forum Statistics:</h4>
                                <ul class="forumstats_2 td">
                                    <li>Threads: 145</li>
                                    <li>Posts: 922</li>
                                </ul>
                                <div class="forumlastpost td">
                                    <h4 class="lastpostlabel">Last Post:</h4>
                                    <div>
                                        <p class="lastposttitle">
                                            <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                            <a href="http://www.3dsiso.com/cia-format-dsi-ware/274743-gameyob-ds-hb-dsiware-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread 'GameYob DS(i) HB as a DSiWare'">GameYob DS(i) HB as a DSiWare</a>
                                            <a href="http://www.3dsiso.com/cia-format-dsi-ware/274743-gameyob-ds-hb-dsiware-post467665.html?s=b1372a653cf5892c033fb23921d82ccc#post467665">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </p>
                                        <div class="lastpostby">
  
    by 
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/359121.html?s=b1372a653cf5892c033fb23921d82ccc" title="Tutimane is offline">
                                                    <strong>Tutimane</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/359121.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=359121&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=359121&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="lastpostdate">15 Hours Ago</p>
                                    </div>
                                </div>
                            </div>
                            <ol id="childforum_for_270" class="childsubforum">
                                <li id="forum271" class="forumbit_post old L2">
                                    <div class="forumrow table">
                                        <div class="foruminfo td">
                                            <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_271" alt="" />
                                            <div class="forumdata">
                                                <div class="datacontainer">
                                                    <div class="titleline">
                                                        <h2 class="forumtitle">
                                                            <a href="http://www.3dsiso.com/cia-format-dsi-ware-requests/?s=b1372a653cf5892c033fb23921d82ccc">
                                                                <font color= ef733f>CIA Format DSi Ware Requests</font color>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <p class="forumdescription">
                                                        <font color= 000000>Post requests for DSi Ware in CIA format here!</font color>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="nocss_label">Forum Actions:</h4>
                                        <div class="forumactionlinks"></div>
                                        <h4 class="nocss_label">Forum Statistics:</h4>
                                        <ul class="forumstats td">
                                            <li>Threads: 87</li>
                                            <li>Posts: 266</li>
                                        </ul>
                                        <div class="forumlastpost td">
                                            <h4 class="lastpostlabel">Last Post:</h4>
                                            <div>
                                                <p class="lastposttitle">
                                                    <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                                    <a href="http://www.3dsiso.com/cia-format-dsi-ware-requests/279781-pok-mon-heartgold-soulsilver-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread 'Pok�mon HeartGold/SoulSilver'">Pok�mon HeartGold/SoulSilver</a>
                                                    <a href="http://www.3dsiso.com/cia-format-dsi-ware-requests/279781-pok-mon-heartgold-soulsilver-post467574.html?s=b1372a653cf5892c033fb23921d82ccc#post467574">
                                                        <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                                    </a>
                                                </p>
                                                <div class="lastpostby">
  
    by 
                                                    <div class="popupmenu memberaction">
                                                        <a class="username offline popupctrl" href="http://www.3dsiso.com/members/179683.html?s=b1372a653cf5892c033fb23921d82ccc" title="Francesco Cordella is offline">
                                                            <strong>Francesco Cordella</strong>
                                                        </a>
                                                        <ul class="popupbody popuphover memberaction_body">
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/members/179683.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                            </li>
                                                            <li class="right">
                                                                <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=179683&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                            </li>
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=179683&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="lastpostdate">19 Hours Ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li id="forum272" class="forumbit_post old L1">
                        <div class="forumbit_post L2">
                            <div class="forumrow">
                                <div class="foruminfo">
                                    <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_272" alt="" />
                                    <div class="forumdata">
                                        <div class="datacontainer">
                                            <div class="titleline">
                                                <h2 class="forumtitle">
                                                    <a href="http://www.3dsiso.com/cia-format-gba-nes-gbc-gb-snes-virtual-console-games/?s=b1372a653cf5892c033fb23921d82ccc">
                                                        <font color= ef733f>CIA Format GBA, NES, GBC, GB, SNES Virtual Console Games</font color>
                                                    </a>
                                                </h2>
                                            </div>
                                            <p class="forumdescription">
                                                <font color= 000000>GBA, NES, GBC, GB Virtual Console Games in CIA format can be found here!</font color>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="nocss_label">Forum Actions:</h4>
                                <ul class="forumactionlinks td">
      
        
        
      
      </ul>
                                <h4 class="nocss_label">Forum Statistics:</h4>
                                <ul class="forumstats_2 td">
                                    <li>Threads: 849</li>
                                    <li>Posts: 9,688</li>
                                </ul>
                                <div class="forumlastpost td">
                                    <h4 class="lastpostlabel">Last Post:</h4>
                                    <div>
                                        <p class="lastposttitle">
                                            <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                            <a href="http://www.3dsiso.com/cia-format-gba-nes-gbc-gb-snes-virtual-console-games/279755-mega-english-mother-1-2-3-gba-vc-cias-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread '[MEGA] [ENGLISH] Mother 1+2+3 GBA VC .CIAs'">[MEGA] [ENGLISH] Mother 1+2+3...</a>
                                            <a href="http://www.3dsiso.com/cia-format-gba-nes-gbc-gb-snes-virtual-console-games/279755-mega-english-mother-1-2-3-gba-vc-cias-post467774.html?s=b1372a653cf5892c033fb23921d82ccc#post467774">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </p>
                                        <div class="lastpostby">
  
    by 
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/345393.html?s=b1372a653cf5892c033fb23921d82ccc" title="MitoKi is offline">
                                                    <strong>MitoKi</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/345393.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=345393&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=345393&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="lastpostdate">1 Hour Ago</p>
                                    </div>
                                </div>
                            </div>
                            <ol id="childforum_for_272" class="childsubforum">
                                <li id="forum273" class="forumbit_post old L2">
                                    <div class="forumrow table">
                                        <div class="foruminfo td">
                                            <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_273" alt="" />
                                            <div class="forumdata">
                                                <div class="datacontainer">
                                                    <div class="titleline">
                                                        <h2 class="forumtitle">
                                                            <a href="http://www.3dsiso.com/cia-format-vc-requests/?s=b1372a653cf5892c033fb23921d82ccc">
                                                                <font color= ef733f>CIA Format VC Requests</font color>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <p class="forumdescription">
                                                        <font color= 000000>Request VC Games in CIA format here!</font color>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="nocss_label">Forum Actions:</h4>
                                        <div class="forumactionlinks"></div>
                                        <h4 class="nocss_label">Forum Statistics:</h4>
                                        <ul class="forumstats td">
                                            <li>Threads: 520</li>
                                            <li>Posts: 1,331</li>
                                        </ul>
                                        <div class="forumlastpost td">
                                            <h4 class="lastpostlabel">Last Post:</h4>
                                            <div>
                                                <p class="lastposttitle">
                                                    <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                                    <a href="http://www.3dsiso.com/cia-format-vc-requests/279990-im-missing-4-vc-usa-sets-nes-games-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread 'Im MIssing 4 of the whole VC USA sets and they are NES games'">Im MIssing 4 of the whole VC...</a>
                                                    <a href="http://www.3dsiso.com/cia-format-vc-requests/279990-im-missing-4-vc-usa-sets-nes-games-post467700.html?s=b1372a653cf5892c033fb23921d82ccc#post467700">
                                                        <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                                    </a>
                                                </p>
                                                <div class="lastpostby">
  
    by 
                                                    <div class="popupmenu memberaction">
                                                        <a class="username offline popupctrl" href="http://www.3dsiso.com/members/153852.html?s=b1372a653cf5892c033fb23921d82ccc" title="Venomux is offline">
                                                            <strong>Venomux</strong>
                                                        </a>
                                                        <ul class="popupbody popuphover memberaction_body">
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/members/153852.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                            </li>
                                                            <li class="right">
                                                                <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=153852&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                            </li>
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=153852&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="lastpostdate">10 Hours Ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li id="forum287" class="forumbit_post old L2">
                                    <div class="forumrow table">
                                        <div class="foruminfo td">
                                            <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_287" alt="" />
                                            <div class="forumdata">
                                                <div class="datacontainer">
                                                    <div class="titleline">
                                                        <h2 class="forumtitle">
                                                            <a href="http://www.3dsiso.com/virtual-console-inject/?s=b1372a653cf5892c033fb23921d82ccc">Virtual Console Inject</a>
                                                        </h2>
                                                    </div>
                                                    <p class="forumdescription">All injected VC go here</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="nocss_label">Forum Actions:</h4>
                                        <div class="forumactionlinks"></div>
                                        <h4 class="nocss_label">Forum Statistics:</h4>
                                        <ul class="forumstats td">
                                            <li>Threads: 28</li>
                                            <li>Posts: 145</li>
                                        </ul>
                                        <div class="forumlastpost td">
                                            <h4 class="lastpostlabel">Last Post:</h4>
                                            <div>
                                                <p class="lastposttitle">
                                                    <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                                    <a href="http://www.3dsiso.com/virtual-console-inject/279979-request-pokemon-sweet-version-firered-romhack-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread '[Request] Pokemon Sweet Version (FireRed Romhack)'">[Request] Pokemon Sweet...</a>
                                                    <a href="http://www.3dsiso.com/virtual-console-inject/279979-request-pokemon-sweet-version-firered-romhack-post467571.html?s=b1372a653cf5892c033fb23921d82ccc#post467571">
                                                        <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                                    </a>
                                                </p>
                                                <div class="lastpostby">
  
    by 
                                                    <div class="popupmenu memberaction">
                                                        <a class="username offline popupctrl" href="http://www.3dsiso.com/members/358529.html?s=b1372a653cf5892c033fb23921d82ccc" title="CourtneySNK is offline">
                                                            <strong>CourtneySNK</strong>
                                                        </a>
                                                        <ul class="popupbody popuphover memberaction_body">
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/members/358529.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                            </li>
                                                            <li class="right">
                                                                <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=358529&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                            </li>
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=358529&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="lastpostdate">20 Hours Ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li id="forum265" class="forumbit_post old L1">
                        <div class="forumbit_post L2">
                            <div class="forumrow">
                                <div class="foruminfo">
                                    <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_265" alt="" />
                                    <div class="forumdata">
                                        <div class="datacontainer">
                                            <div class="titleline">
                                                <h2 class="forumtitle">
                                                    <a href="http://www.3dsiso.com/xorpad-downloads/?s=b1372a653cf5892c033fb23921d82ccc">
                                                        <font color= ef733f>Xorpad Downloads</font color>
                                                    </a>
                                                </h2>
                                            </div>
                                            <p class="forumdescription">Xorpad's of 3DS Games can be found here!</p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="nocss_label">Forum Actions:</h4>
                                <ul class="forumactionlinks td">
      
        
        
      
      </ul>
                                <h4 class="nocss_label">Forum Statistics:</h4>
                                <ul class="forumstats_2 td">
                                    <li>Threads: 143</li>
                                    <li>Posts: 643</li>
                                </ul>
                                <div class="forumlastpost td">
                                    <h4 class="lastpostlabel">Last Post:</h4>
                                    <div>
                                        <p class="lastposttitle">
                                            <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                            <a href="http://www.3dsiso.com/xorpad-downloads/265730-mega-kohakus-xorpads-49-games-edited-14-07-15-gba-vc-usa-added-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread '[MEGA] Kohaku's Xorpads [49 Games] [Edited 14/07/15 - GBA VC (USA) Added]'">[MEGA] Kohaku's Xorpads [49...</a>
                                            <a href="http://www.3dsiso.com/xorpad-downloads/265730-mega-kohakus-xorpads-49-games-edited-14-07-15-gba-vc-usa-added-post464587.html?s=b1372a653cf5892c033fb23921d82ccc#post464587">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </p>
                                        <div class="lastpostby">
  
    by 
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/351949.html?s=b1372a653cf5892c033fb23921d82ccc" title="funnyandoriginalusername is offline">
                                                    <strong>funnyandoriginalusername</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/351949.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=351949&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=351949&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="lastpostdate">2 Weeks Ago</p>
                                    </div>
                                </div>
                            </div>
                            <ol id="childforum_for_265" class="childsubforum">
                                <li id="forum266" class="forumbit_post old L2">
                                    <div class="forumrow table">
                                        <div class="foruminfo td">
                                            <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_266" alt="" />
                                            <div class="forumdata">
                                                <div class="datacontainer">
                                                    <div class="titleline">
                                                        <h2 class="forumtitle">
                                                            <a href="http://www.3dsiso.com/xorpad-requests/?s=b1372a653cf5892c033fb23921d82ccc">
                                                                <font color= ef733f>Xorpad Requests</font color>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <p class="forumdescription">Request any Xorpad's Here</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="nocss_label">Forum Actions:</h4>
                                        <div class="forumactionlinks"></div>
                                        <h4 class="nocss_label">Forum Statistics:</h4>
                                        <ul class="forumstats td">
                                            <li>Threads: 126</li>
                                            <li>Posts: 280</li>
                                        </ul>
                                        <div class="forumlastpost td">
                                            <h4 class="lastpostlabel">Last Post:</h4>
                                            <div>
                                                <p class="lastposttitle">
                                                    <img src="http://www.3dsiso.com/images/icons/icon1.png" class="postimg" alt="" border="0" />
                                                    <a href="http://www.3dsiso.com/xorpad-requests/274158-animal-crossing-leaf-xorpads-usa-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread 'Animal Crossing: New Leaf xorpads (USA)'">Animal Crossing: New Leaf...</a>
                                                    <a href="http://www.3dsiso.com/xorpad-requests/274158-animal-crossing-leaf-xorpads-usa-post463856.html?s=b1372a653cf5892c033fb23921d82ccc#post463856">
                                                        <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                                    </a>
                                                </p>
                                                <div class="lastpostby">
  
    by 
                                                    <div class="popupmenu memberaction">
                                                        <a class="username offline popupctrl" href="http://www.3dsiso.com/members/102812.html?s=b1372a653cf5892c033fb23921d82ccc" title="Shadow322 is offline">
                                                            <strong>Shadow322</strong>
                                                        </a>
                                                        <ul class="popupbody popuphover memberaction_body">
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/members/102812.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                            </li>
                                                            <li class="right">
                                                                <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=102812&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                            </li>
                                                            <li class="left">
                                                                <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=102812&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p class="lastpostdate">3 Weeks Ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li id="forum286" class="forumbit_post old L1">
                        <div class="forumbit_post L2">
                            <div class="forumrow">
                                <div class="foruminfo">
                                    <img src="http://www.3dsiso.com/images/statusicon/forum_old-48.png" class="forumicon" id="forum_statusicon_286" alt="" />
                                    <div class="forumdata">
                                        <div class="datacontainer">
                                            <div class="titleline">
                                                <h2 class="forumtitle">
                                                    <a href="http://www.3dsiso.com/cia-manga-and-movies/?s=b1372a653cf5892c033fb23921d82ccc">CIA Manga &amp; Movies</a>
                                                </h2>
                                            </div>
                                            <p class="forumdescription">Section for CIA 3ds format Manga and Movies</p>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="nocss_label">Forum Actions:</h4>
                                <ul class="forumactionlinks td">
      
        
        
      
      </ul>
                                <h4 class="nocss_label">Forum Statistics:</h4>
                                <ul class="forumstats_2 td">
                                    <li>Threads: 66</li>
                                    <li>Posts: 396</li>
                                </ul>
                                <div class="forumlastpost td">
                                    <h4 class="lastpostlabel">Last Post:</h4>
                                    <div>
                                        <p class="lastposttitle">
                                            <img src="http://www.3dsiso.com/images/icons/icon10.png" class="postimg" alt="Talking" border="0" />
                                            <a href="http://www.3dsiso.com/cia-manga-and-movies/279947-mega-azure-striker-gunvolt-anime-new-post.html?s=b1372a653cf5892c033fb23921d82ccc" class="threadtitle" title="Go to first unread post in thread '[MEGA] Azure Striker Gunvolt: The Anime'">[MEGA] Azure Striker Gunvolt:...</a>
                                            <a href="http://www.3dsiso.com/cia-manga-and-movies/279947-mega-azure-striker-gunvolt-anime-post467297.html?s=b1372a653cf5892c033fb23921d82ccc#post467297">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </p>
                                        <div class="lastpostby">
  
    by 
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/122382.html?s=b1372a653cf5892c033fb23921d82ccc" title="NikolaMiljevic is offline">
                                                    <strong>NikolaMiljevic</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/122382.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=122382&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=122382&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p class="lastpostdate">2 Days Ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
            <div id="threadlist" class="threadlist">
                <form id="thread_inlinemod_form" action="http://www.3dsiso.com/inlinemod.php?forumid=261" method="post">
                    <h2 class="hidden">Threads in This Forum</h2>
                    <div>
                        <div class="threadlisthead table">
                            <div>
                                <span class="threadinfo">
                                    <span class="threadtitle">
                                        <a href="http://www.3dsiso.com/cia-downloads/?sort=title&amp;order=asc&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Title</a> /
                                        <a href="http://www.3dsiso.com/cia-downloads/?sort=postusername&amp;order=asc&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Thread Starter</a>
                                    </span>
                                </span>
                                <span class="threadstats td">
                                    <a href="http://www.3dsiso.com/cia-downloads/?sort=replycount&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Replies</a> /
                                    <a href="http://www.3dsiso.com/cia-downloads/?sort=views&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Views</a>
                                </span>
                                <span class="threadlastpost td">
                                    <a href="http://www.3dsiso.com/cia-downloads/?order=asc&amp;s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow">Last Post By
                                        <img class="sortarrow" src="http://www.3dsiso.com/images/buttons/sortarrow-asc.png" alt="Reverse Sort Order" border="0" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <ol id="stickies" class="stickies">
                            <li class="threadbit hot attachments" id="thread_271417">
                                <div class="rating5 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon6.png" alt="Cool" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_271417" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/271417-gdrive-faster-billy-cia-eshop-undub-dragon-quest-8-a.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_271417">[GDRIVE][FASTER] Billy CIA, ESHOP &amp; UNDUB | DRAGON QUEST 8</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/144234.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Billy Halim on 01-17-2016">Billy Halim</a>,&nbsp;01-17-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_271417">
                                                        <dt class="label">183 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/271417-gdrive-faster-billy-cia-eshop-undub-dragon-quest-8-a.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/271417-gdrive-faster-billy-cia-eshop-undub-dragon-quest-8-a-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/271417-gdrive-faster-billy-cia-eshop-undub-dragon-quest-8-a-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/271417-gdrive-faster-billy-cia-eshop-undub-dragon-quest-8-a-183.html?s=b1372a653cf5892c033fb23921d82ccc">183</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="dlc, download, legit, mario, usa" />
                                                            <a href="javascript://" onclick="attachments(271417); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="2 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            1,826
          
        </li>
                                        <li>Views: 769,016</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/285739.html?s=b1372a653cf5892c033fb23921d82ccc" title="pyrojackz is offline">
                                                    <strong>pyrojackz</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/285739.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=285739&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=285739&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>2 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/271417-gdrive-faster-billy-cia-eshop-undub-dragon-quest-8-a-post467768.html?s=b1372a653cf5892c033fb23921d82ccc#post467768" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_265742">
                                <div class="rating5 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_265742" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/265742-mega-thread-jasons-cia-collection-delays-ads-passwords-downloads.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_265742">[MEGA THREAD] Jason's CIA Collection *NO DELAYS NO ADS NO PASSWORDS JUST DOWNLOADS*</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/66742.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by jason0597 on 03-16-2015">jason0597</a>,&nbsp;03-16-2015
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_265742">
                                                        <dt class="label">71 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/265742-mega-thread-jasons-cia-collection-delays-ads-passwords-downloads.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/265742-mega-thread-jasons-cia-collection-delays-ads-passwords-downloads-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/265742-mega-thread-jasons-cia-collection-delays-ads-passwords-downloads-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/265742-mega-thread-jasons-cia-collection-delays-ads-passwords-downloads-71.html?s=b1372a653cf5892c033fb23921d82ccc">71</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <a href="javascript://" onclick="attachments(265742); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="4 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            702
          
        </li>
                                        <li>Views: 281,660</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/242167.html?s=b1372a653cf5892c033fb23921d82ccc" title="Trashcat is offline">
                                                    <strong>Trashcat</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/242167.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=242167&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=242167&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Day Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/265742-mega-thread-jasons-cia-collection-delays-ads-passwords-downloads-post467393.html?s=b1372a653cf5892c033fb23921d82ccc#post467393" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279841">
                                <div class="rating0 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_279841" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279841-megathread-nintendo-3ds-eshop-roms-converted-cia-format-1fichier.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279841">MegaThread Nintendo 3DS &amp; eShop Roms converted to CIA Format [1Fichier]</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/296007.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by AlvRo on 5 Days Ago">AlvRo</a>,&nbsp;5 Days Ago
                                                    </span>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="cia, download, downloads, free, roms" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            1
          
        </li>
                                        <li>Views: 1,084</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/359164.html?s=b1372a653cf5892c033fb23921d82ccc" title="sunnyk is offline">
                                                    <strong>sunnyk</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/359164.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=359164&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=359164&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>2 Days Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279841-megathread-nintendo-3ds-eshop-roms-converted-cia-format-1fichier-post467250.html?s=b1372a653cf5892c033fb23921d82ccc#post467250" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_278558">
                                <div class="rating0 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_278558" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/278558-legit-signed-3ds-game-tickets-11-0-11-1-11-2-fasthax-fbi-cfw.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_278558">Legit/Signed 3DS game tickets (for 11.0+11.1+11.2 with FastHax+FBI or CFW)</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/58880.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by b3243035 on 12-13-2016">b3243035</a>,&nbsp;12-13-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_278558">
                                                        <dt class="label">11 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278558-legit-signed-3ds-game-tickets-11-0-11-1-11-2-fasthax-fbi-cfw.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278558-legit-signed-3ds-game-tickets-11-0-11-1-11-2-fasthax-fbi-cfw-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278558-legit-signed-3ds-game-tickets-11-0-11-1-11-2-fasthax-fbi-cfw-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278558-legit-signed-3ds-game-tickets-11-0-11-1-11-2-fasthax-fbi-cfw-11.html?s=b1372a653cf5892c033fb23921d82ccc">11</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="fbi, legit cia, signed, tickets, waithax" />
                                                            <a href="javascript://" onclick="attachments(278558); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="1 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            109
          
        </li>
                                        <li>Views: 27,577</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/301895.html?s=b1372a653cf5892c033fb23921d82ccc" title="patje is offline">
                                                    <strong>patje</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/301895.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=301895&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=301895&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>4 Days Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/278558-legit-signed-3ds-game-tickets-11-0-11-1-11-2-fasthax-fbi-cfw-post466971.html?s=b1372a653cf5892c033fb23921d82ccc#post466971" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_263074">
                                <div class="rating0 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon4.png" alt="Exclamation" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_263074" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/263074-read-warning-precautions-cia-files.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_263074">Read-Me!!! WARNING! PRECAUTIONS about CIA files!</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/21253.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by MDashK on 11-26-2014">MDashK</a>,&nbsp;11-26-2014
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_263074">
                                                        <dt class="label">11 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/263074-read-warning-precautions-cia-files.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/263074-read-warning-precautions-cia-files-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/263074-read-warning-precautions-cia-files-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/263074-read-warning-precautions-cia-files-11.html?s=b1372a653cf5892c033fb23921d82ccc">11</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="cia, guide, install, precautions, warning" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            108
          
        </li>
                                        <li>Views: 86,347</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/125676.html?s=b1372a653cf5892c033fb23921d82ccc" title="krisk77 is offline">
                                                    <strong>krisk77</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/125676.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=125676&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=125676&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>01-01-2017
      
                                            <a href="http://www.3dsiso.com/cia-downloads/263074-read-warning-precautions-cia-files-post457669.html?s=b1372a653cf5892c033fb23921d82ccc#post457669" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot lock" id="thread_278671">
                                <div class="rating0 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_278671" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/278671-allowing-uploading-pokemon-sun-moon-threads.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_278671">We are allowing uploading\making Pokemon sun/moon threads again!!!</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/102812.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Shadow322 on 12-20-2016">Shadow322</a>,&nbsp;12-20-2016
                                                    </span>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="anymore, deleted, pokemon, site, sun/moon, threads, uploadmake" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            0
          
        </li>
                                        <li>Views: 4,554</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/102812.html?s=b1372a653cf5892c033fb23921d82ccc" title="Shadow322 is offline">
                                                    <strong>Shadow322</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/102812.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=102812&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=102812&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>12-20-2016
      
                                            <a href="http://www.3dsiso.com/cia-downloads/278671-allowing-uploading-pokemon-sun-moon-threads-post455109.html?s=b1372a653cf5892c033fb23921d82ccc#post455109" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot lock" id="thread_263387">
                                <div class="rating0 sticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon4.png" alt="Exclamation" border="0" />
                                                <img src="http://www.3dsiso.com/images/misc/sticky.gif" alt="Sticky Thread" />
                                                <span id="thread_prefix_263387" class="prefix understate">
              
              Sticky: 
              
              
            </span>
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/263387-please-post-requests.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_263387">Please do not post requests here</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/57647.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by alocks on 12-11-2014">alocks</a>,&nbsp;12-11-2014
                                                    </span>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                
                
                
                
                
                
              </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            0
          
        </li>
                                        <li>Views: 3,046</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/57647.html?s=b1372a653cf5892c033fb23921d82ccc" title="alocks is offline">
                                                    <strong>alocks</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/57647.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=57647&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=57647&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>12-11-2014
      
                                            <a href="http://www.3dsiso.com/cia-downloads/263387-please-post-requests-post321084.html?s=b1372a653cf5892c033fb23921d82ccc#post321084" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ol>
                        <ol id="threads" class="threads">
                            <li class="threadbit hot attachments" id="thread_274624">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/274624-mega-cia-collection-retail-eshop-undub-dlc-update-2-4-poochy-yoshis-ww.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_274624">[MEGA] CIA Collection [Retail] [eShop] [UNDUB] [DLC] Update 2/4 Poochy &amp; Yoshi's WW</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/237444.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by TMS on 05-19-2016">TMS</a>,&nbsp;05-19-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_274624">
                                                        <dt class="label">62 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274624-mega-cia-collection-retail-eshop-undub-dlc-update-2-4-poochy-yoshis-ww.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274624-mega-cia-collection-retail-eshop-undub-dlc-update-2-4-poochy-yoshis-ww-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274624-mega-cia-collection-retail-eshop-undub-dlc-update-2-4-poochy-yoshis-ww-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274624-mega-cia-collection-retail-eshop-undub-dlc-update-2-4-poochy-yoshis-ww-62.html?s=b1372a653cf5892c033fb23921d82ccc">62</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="etrian, legend, mario, pokemon, super" />
                                                            <a href="javascript://" onclick="attachments(274624); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="1 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            617
          
        </li>
                                        <li>Views: 196,490</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username online popupctrl" href="http://www.3dsiso.com/members/237444.html?s=b1372a653cf5892c033fb23921d82ccc" title="TMS is online now">
                                                    <strong>TMS</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/237444.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=237444&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=237444&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>18 Minutes Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/274624-mega-cia-collection-retail-eshop-undub-dlc-update-2-4-poochy-yoshis-ww-post467783.html?s=b1372a653cf5892c033fb23921d82ccc#post467783" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_267804">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/267804-mega-pokemon-3ds-hacks-collection-cia-region-free-updated-01-08-16-a.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_267804">[MEGA] Pokemon 3DS Hacks Collection [CIA] Region Free (updated 01/08/16)</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/90238.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by pakrett on 06-17-2015">pakrett</a>,&nbsp;06-17-2015
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_267804">
                                                        <dt class="label">24 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/267804-mega-pokemon-3ds-hacks-collection-cia-region-free-updated-01-08-16-a.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/267804-mega-pokemon-3ds-hacks-collection-cia-region-free-updated-01-08-16-a-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/267804-mega-pokemon-3ds-hacks-collection-cia-region-free-updated-01-08-16-a-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/267804-mega-pokemon-3ds-hacks-collection-cia-region-free-updated-01-08-16-a-24.html?s=b1372a653cf5892c033fb23921d82ccc">24</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <a href="javascript://" onclick="attachments(267804); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="2 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            239
          
        </li>
                                        <li>Views: 100,888</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username online popupctrl" href="http://www.3dsiso.com/members/73709.html?s=b1372a653cf5892c033fb23921d82ccc" title="cagocagette is online now">
                                                    <strong>cagocagette</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/73709.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=73709&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=73709&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>24 Minutes Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/267804-mega-pokemon-3ds-hacks-collection-cia-region-free-updated-01-08-16-a-post467782.html?s=b1372a653cf5892c033fb23921d82ccc#post467782" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279983">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon11.png" alt="Red face" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279983-monster-hunter-double-cross-sp-demo-mhxx.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279983">Monster Hunter Double Cross SP Demo [MHXX]</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/293372.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by TheRisingDragon on 16 Hours Ago">TheRisingDragon</a>,&nbsp;16 Hours Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279983">
                                                        <dt class="label">7 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279983-monster-hunter-double-cross-sp-demo-mhxx.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279983-monster-hunter-double-cross-sp-demo-mhxx-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279983-monster-hunter-double-cross-sp-demo-mhxx-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279983-monster-hunter-double-cross-sp-demo-mhxx-7.html?s=b1372a653cf5892c033fb23921d82ccc">7</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="cia, demo, googledrive, japanese, mhxx" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            60
          
        </li>
                                        <li>Views: 2,895</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/345393.html?s=b1372a653cf5892c033fb23921d82ccc" title="MitoKi is offline">
                                                    <strong>MitoKi</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/345393.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=345393&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=345393&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Hour Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279983-monster-hunter-double-cross-sp-demo-mhxx-post467773.html?s=b1372a653cf5892c033fb23921d82ccc#post467773" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279446">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279446-mega-dragon-ball-fusions-uncensored-uncensored-2-2-0-update-usa-region-free.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279446">[MEGA] Dragon Ball Fusions Uncensored + Uncensored 2.2.0 Update (USA) (Region Free)</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/51665.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Canzah on 3 Weeks Ago">Canzah</a>,&nbsp;3 Weeks Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279446">
                                                        <dt class="label">9 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279446-mega-dragon-ball-fusions-uncensored-uncensored-2-2-0-update-usa-region-free.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279446-mega-dragon-ball-fusions-uncensored-uncensored-2-2-0-update-usa-region-free-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279446-mega-dragon-ball-fusions-uncensored-uncensored-2-2-0-update-usa-region-free-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279446-mega-dragon-ball-fusions-uncensored-uncensored-2-2-0-update-usa-region-free-9.html?s=b1372a653cf5892c033fb23921d82ccc">9</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="animations, game, release, version, wooden" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            82
          
        </li>
                                        <li>Views: 10,006</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/152465.html?s=b1372a653cf5892c033fb23921d82ccc" title="blackcat is offline">
                                                    <strong>blackcat</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/152465.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=152465&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=152465&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Hour Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279446-mega-dragon-ball-fusions-uncensored-uncensored-2-2-0-update-usa-region-free-post467770.html?s=b1372a653cf5892c033fb23921d82ccc#post467770" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279992">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon6.png" alt="Cool" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279992-monster-hunter-double-cross-sp-demo-mhxx-jpn-tik.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279992">Monster Hunter Double Cross SP Demo [MHXX] (JPN) (.tik)</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/155595.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Draenz on 9 Hours Ago">Draenz</a>,&nbsp;9 Hours Ago
                                                    </span>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt=".tik, fbi, jpn, monster, version" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            2
          
        </li>
                                        <li>Views: 254</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/243488.html?s=b1372a653cf5892c033fb23921d82ccc" title="LunaticShock is offline">
                                                    <strong>LunaticShock</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/243488.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=243488&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=243488&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>2 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279992-monster-hunter-double-cross-sp-demo-mhxx-jpn-tik-post467762.html?s=b1372a653cf5892c033fb23921d82ccc#post467762" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279698">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279698-gdrive-dragon-quest-8-3ed-orchestrated-uncensored-undubbed-eur-usa.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279698">[GDrive] Dragon Quest 8 3ED (Orchestrated, Uncensored and Undubbed) [EUR/USA]</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/61246.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by davhuit on 1 Week Ago">davhuit</a>,&nbsp;1 Week Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279698">
                                                        <dt class="label">5 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279698-gdrive-dragon-quest-8-3ed-orchestrated-uncensored-undubbed-eur-usa.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279698-gdrive-dragon-quest-8-3ed-orchestrated-uncensored-undubbed-eur-usa-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279698-gdrive-dragon-quest-8-3ed-orchestrated-uncensored-undubbed-eur-usa-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279698-gdrive-dragon-quest-8-3ed-orchestrated-uncensored-undubbed-eur-usa-5.html?s=b1372a653cf5892c033fb23921d82ccc">5</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="files, hans, patch, uncensored, version" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            48
          
        </li>
                                        <li>Views: 4,583</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/61246.html?s=b1372a653cf5892c033fb23921d82ccc" title="davhuit is offline">
                                                    <strong>davhuit</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/61246.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=61246&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=61246&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>3 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279698-gdrive-dragon-quest-8-3ed-orchestrated-uncensored-undubbed-eur-usa-post467757.html?s=b1372a653cf5892c033fb23921d82ccc#post467757" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_269604">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/269604-3ds-hans-gba-gbc-vc-rom-hacks-rare-rom-injects-alex-cia-format.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_269604">3DS HANS,GBA,AND GBC VC Rom Hacks/Rare ROM Injects By Alex S in CIA Format!</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/128614.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by g10366272@trbvm.com on 10-09-2015">g10366272@trbvm.com</a>,&nbsp;10-09-2015
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_269604">
                                                        <dt class="label">20 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/269604-3ds-hans-gba-gbc-vc-rom-hacks-rare-rom-injects-alex-cia-format.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/269604-3ds-hans-gba-gbc-vc-rom-hacks-rare-rom-injects-alex-cia-format-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/269604-3ds-hans-gba-gbc-vc-rom-hacks-rare-rom-injects-alex-cia-format-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/269604-3ds-hans-gba-gbc-vc-rom-hacks-rare-rom-injects-alex-cia-format-20.html?s=b1372a653cf5892c033fb23921d82ccc">20</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                
                
                
                
                
                
              </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            191
          
        </li>
                                        <li>Views: 33,160</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/128614.html?s=b1372a653cf5892c033fb23921d82ccc" title="g10366272@trbvm.com is offline">
                                                    <strong>g10366272@trbvm.com</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/128614.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=128614&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=128614&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>4 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/269604-3ds-hans-gba-gbc-vc-rom-hacks-rare-rom-injects-alex-cia-format-post467744.html?s=b1372a653cf5892c033fb23921d82ccc#post467744" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_278261">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="Post" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/278261-mega-persona-shadow-labyrinth-kor.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_278261">[MEGA] Persona Q: Shadow of the Labyrinth (KOR) [&#54168;&#47476;&#49548;&#45208; Q: &#49408;&#46020;&#50864; &#50724;&#48652; &#45908; &#47000;&#48260;&#47536;&#49828;]</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/282727.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Quipluk on 12-01-2016">Quipluk</a>,&nbsp;12-01-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_278261">
                                                        <dt class="label">2 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278261-mega-persona-shadow-labyrinth-kor.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278261-mega-persona-shadow-labyrinth-kor-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="&#49408;&#46020;&#50864;, labyrinth, persona, shadow, title" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            11
          
        </li>
                                        <li>Views: 1,147</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/361239.html?s=b1372a653cf5892c033fb23921d82ccc" title="qhfkdlgla is offline">
                                                    <strong>qhfkdlgla</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/361239.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=361239&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=361239&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>4 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/278261-mega-persona-shadow-labyrinth-kor-post467740.html?s=b1372a653cf5892c033fb23921d82ccc#post467740" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_279593">
                                <div class="rating3 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279593-mega-project-zone-2-kor-2-a.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279593">[MEGA]Project X Zone 2 (KOR) &#54532;&#47196;&#51229;&#53944; &#53356;&#47196;&#49828; &#51316; 2</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/351725.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by cocona on 2 Weeks Ago">cocona</a>,&nbsp;2 Weeks Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279593">
                                                        <dt class="label">2 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279593-mega-project-zone-2-kor-2-a.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279593-mega-project-zone-2-kor-2-a-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="&#53356;&#47196;&#49828;, &#54532;&#47196;&#51229;&#53944;, ctr-p-bx2k, kor, zone" />
                                                            <a href="javascript://" onclick="attachments(279593); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="1 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            16
          
        </li>
                                        <li>Views: 1,105</li>
                                        <li class="hidden">Rating3 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/361151.html?s=b1372a653cf5892c033fb23921d82ccc" title="lee2d2 is offline">
                                                    <strong>lee2d2</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/361151.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=361151&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=361151&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>9 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279593-mega-project-zone-2-kor-2-a-post467718.html?s=b1372a653cf5892c033fb23921d82ccc#post467718" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_274138">
                                <div class="rating4 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/274138-cia-collection-mega.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_274138">My CIA Collection on MEGA</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/229655.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by zddf on 04-22-2016">zddf</a>,&nbsp;04-22-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_274138">
                                                        <dt class="label">11 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274138-cia-collection-mega.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274138-cia-collection-mega-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274138-cia-collection-mega-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274138-cia-collection-mega-11.html?s=b1372a653cf5892c033fb23921d82ccc">11</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="etrian, legend, mario, pokemon, zelda" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            106
          
        </li>
                                        <li>Views: 59,006</li>
                                        <li class="hidden">Rating4 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/229655.html?s=b1372a653cf5892c033fb23921d82ccc" title="zddf is offline">
                                                    <strong>zddf</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/229655.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=229655&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=229655&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>11 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/274138-cia-collection-mega-post467690.html?s=b1372a653cf5892c033fb23921d82ccc#post467690" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_278482">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/278482-mega-fire-emblem-special-edition-english-translation-v4-0-dlc-links.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_278482">[MEGA] Fire Emblem If Special Edition - English Translation v4.0+Dlc links</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/150135.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Nafets009 on 12-10-2016">Nafets009</a>,&nbsp;12-10-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_278482">
                                                        <dt class="label">8 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278482-mega-fire-emblem-special-edition-english-translation-v4-0-dlc-links.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278482-mega-fire-emblem-special-edition-english-translation-v4-0-dlc-links-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278482-mega-fire-emblem-special-edition-english-translation-v4-0-dlc-links-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/278482-mega-fire-emblem-special-edition-english-translation-v4-0-dlc-links-8.html?s=b1372a653cf5892c033fb23921d82ccc">8</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt=".cia, files, mega, patched, version" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            71
          
        </li>
                                        <li>Views: 11,894</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/360270.html?s=b1372a653cf5892c033fb23921d82ccc" title="mxxnbun is offline">
                                                    <strong>mxxnbun</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/360270.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=360270&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=360270&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>17 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/278482-mega-fire-emblem-special-edition-english-translation-v4-0-dlc-links-post467607.html?s=b1372a653cf5892c033fb23921d82ccc#post467607" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_279363">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon6.png" alt="Cool" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279363-gdrive-dragon-quest-viii-usa-eur-retail-orchestra-uncensored-v4-cia-3ds.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279363">[GDRIVE] Dragon Quest VIII (USA &amp; EUR) (Retail) (Orchestra &amp; Uncensored v4) .CIA/.3DS</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/144234.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Billy Halim on 3 Weeks Ago">Billy Halim</a>,&nbsp;3 Weeks Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279363">
                                                        <dt class="label">52 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279363-gdrive-dragon-quest-viii-usa-eur-retail-orchestra-uncensored-v4-cia-3ds.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279363-gdrive-dragon-quest-viii-usa-eur-retail-orchestra-uncensored-v4-cia-3ds-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279363-gdrive-dragon-quest-viii-usa-eur-retail-orchestra-uncensored-v4-cia-3ds-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279363-gdrive-dragon-quest-viii-usa-eur-retail-orchestra-uncensored-v4-cia-3ds-52.html?s=b1372a653cf5892c033fb23921d82ccc">52</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="000400000018f200, canzah, ctr-p-bq8p, cursed, download, drive, eur, free, google, journey, king, link, master, music, orchestra, outfits, quest, region, serial, source, title, undub, u[color=#333333]ncensored, version, viii" />
                                                            <a href="javascript://" onclick="attachments(279363); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="2 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            518
          
        </li>
                                        <li>Views: 49,600</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/329294.html?s=b1372a653cf5892c033fb23921d82ccc" title="williamlost is offline">
                                                    <strong>williamlost</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/329294.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=329294&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=329294&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>18 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279363-gdrive-dragon-quest-viii-usa-eur-retail-orchestra-uncensored-v4-cia-3ds-post467606.html?s=b1372a653cf5892c033fb23921d82ccc#post467606" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279450">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279450-mega-fire-emblem-special-edition-english-v4-0-team.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279450">[MEGA] Fire Emblem If: Special Edition (English v4.0 by Team If)</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/3545.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by jmjohnson85 on 3 Weeks Ago">jmjohnson85</a>,&nbsp;3 Weeks Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279450">
                                                        <dt class="label">5 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279450-mega-fire-emblem-special-edition-english-v4-0-team.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279450-mega-fire-emblem-special-edition-english-v4-0-team-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279450-mega-fire-emblem-special-edition-english-v4-0-team-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279450-mega-fire-emblem-special-edition-english-v4-0-team-5.html?s=b1372a653cf5892c033fb23921d82ccc">5</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="emblem, file, fire, size, [t+eng4.0_team" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            44
          
        </li>
                                        <li>Views: 8,542</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/242167.html?s=b1372a653cf5892c033fb23921d82ccc" title="Trashcat is offline">
                                                    <strong>Trashcat</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/242167.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=242167&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=242167&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>19 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279450-mega-fire-emblem-special-edition-english-v4-0-team-post467579.html?s=b1372a653cf5892c033fb23921d82ccc#post467579" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_279867">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279867-mega-jpn-gundam-3d-battle-3ds-cia.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279867">[MEGA] [JPN] Gundam The 3D Battle [.3ds to Cia]</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/358227.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Murdering Your Bane on 4 Days Ago">Murdering Your Bane</a>,&nbsp;4 Days Ago
                                                    </span>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="65$, crap, eshop, hard, jpn" />
                                                            <a href="javascript://" onclick="attachments(279867); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="1 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            2
          
        </li>
                                        <li>Views: 477</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/169231.html?s=b1372a653cf5892c033fb23921d82ccc" title="Yamato is offline">
                                                    <strong>Yamato</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/169231.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=169231&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=169231&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>22 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279867-mega-jpn-gundam-3d-battle-3ds-cia-post467555.html?s=b1372a653cf5892c033fb23921d82ccc#post467555" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279447">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279447-mega-persona-undub-1-1-usa-region-free.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279447">[MEGA] Persona Q Undub Full 1.1 (USA) (Region Free)</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/51665.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Canzah on 3 Weeks Ago">Canzah</a>,&nbsp;3 Weeks Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279447">
                                                        <dt class="label">2 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279447-mega-persona-undub-1-1-usa-region-free.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279447-mega-persona-undub-1-1-usa-region-free-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="link, persona, repack, undub, version" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            16
          
        </li>
                                        <li>Views: 795</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/51665.html?s=b1372a653cf5892c033fb23921d82ccc" title="Canzah is offline">
                                                    <strong>Canzah</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/51665.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=51665&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=51665&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>23 Hours Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279447-mega-persona-undub-1-1-usa-region-free-post467551.html?s=b1372a653cf5892c033fb23921d82ccc#post467551" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279700">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon6.png" alt="Cool" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279700-gdrive-mega-poochy-yoshis-woolly-world-usa-eur-clean-gw-cfw-cia-3ds.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279700">[GDRIVE][MEGA] Poochy &amp; Yoshi's Woolly World (USA) &amp; (EUR) (CLEAN) (GW/CFW) .CIA/3DS</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/144234.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Billy Halim on 1 Week Ago">Billy Halim</a>,&nbsp;1 Week Ago
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_279700">
                                                        <dt class="label">7 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279700-gdrive-mega-poochy-yoshis-woolly-world-usa-eur-clean-gw-cfw-cia-3ds.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279700-gdrive-mega-poochy-yoshis-woolly-world-usa-eur-clean-gw-cfw-cia-3ds-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279700-gdrive-mega-poochy-yoshis-woolly-world-usa-eur-clean-gw-cfw-cia-3ds-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/279700-gdrive-mega-poochy-yoshis-woolly-world-usa-eur-clean-gw-cfw-cia-3ds-7.html?s=b1372a653cf5892c033fb23921d82ccc">7</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt=".3ds, .cia, 3ds, card, converted, download, drive, enjoy, format, free, google, gw/cfw, link, mediatype, mega, poochy, region, repack, shadow322, uploading, usa, woolly, world, yoshis, [size=4]poochy" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            64
          
        </li>
                                        <li>Views: 5,986</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/57520.html?s=b1372a653cf5892c033fb23921d82ccc" title="Henceforth is offline">
                                                    <strong>Henceforth</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/57520.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=57520&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=57520&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Day Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279700-gdrive-mega-poochy-yoshis-woolly-world-usa-eur-clean-gw-cfw-cia-3ds-post467538.html?s=b1372a653cf5892c033fb23921d82ccc#post467538" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_271631">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/271631-mega-hatsune-miku-project-mirai-dx-usa-fixed.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_271631">[MEGA] Hatsune Miku: Project Mirai DX (USA) - Fixed</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/64157.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Apache Thunder on 01-23-2016">Apache Thunder</a>,&nbsp;01-23-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_271631">
                                                        <dt class="label">2 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/271631-mega-hatsune-miku-project-mirai-dx-usa-fixed.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/271631-mega-hatsune-miku-project-mirai-dx-usa-fixed-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="acquired, aka, attempts, bought, cia, correct, download, enjoy, eshop, fails, forum, free, game, hatsune, miku, mirai, original, project, recall, repacked, ticket, update, usa, valid, version" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            16
          
        </li>
                                        <li>Views: 4,754</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/213824.html?s=b1372a653cf5892c033fb23921d82ccc" title="Yasserxyz is offline">
                                                    <strong>Yasserxyz</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/213824.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=213824&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=213824&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Day Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/271631-mega-hatsune-miku-project-mirai-dx-usa-fixed-post467483.html?s=b1372a653cf5892c033fb23921d82ccc#post467483" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_274918">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon10.png" alt="Talking" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/274918-mega-bannerfixed-taiko-tatsujin-don-katsu-jikuu-daibouken.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_274918">[MEGA] [BANNERFIXED] Taiko no Tatsujin Don to Katsu no Jikuu Daibouken</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/122020.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by jeandiegoconi on 06-05-2016">jeandiegoconi</a>,&nbsp;06-05-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_274918">
                                                        <dt class="label">3 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274918-mega-bannerfixed-taiko-tatsujin-don-katsu-jikuu-daibouken.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274918-mega-bannerfixed-taiko-tatsujin-don-katsu-jikuu-daibouken-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/274918-mega-bannerfixed-taiko-tatsujin-don-katsu-jikuu-daibouken-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="don, jikuu, taiko, tatsujin, [b]mega" />
                                                            <a href="javascript://" onclick="attachments(274918); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="8 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            24
          
        </li>
                                        <li>Views: 2,727</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/213824.html?s=b1372a653cf5892c033fb23921d82ccc" title="Yasserxyz is offline">
                                                    <strong>Yasserxyz</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/213824.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=213824&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=213824&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Day Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/274918-mega-bannerfixed-taiko-tatsujin-don-katsu-jikuu-daibouken-post467480.html?s=b1372a653cf5892c033fb23921d82ccc#post467480" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot" id="thread_279929">
                                <div class="rating0 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon1.png" alt="" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/279929-multiup-org-cia-usa-mario-kart-7-ctgp-7-v0-12-1-a.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_279929">[MULTIUP.ORG][CIA][USA] Mario Kart 7 CTGP-7 v0.12.1</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/102812.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Shadow322 on 2 Days Ago">Shadow322</a>,&nbsp;2 Days Ago
                                                    </span>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="0.12.1, added, arrow, ctgp-7, id], install, kart, mario, offline, online, password, shadow322@3dsiso, silver, title, tomix[different, v0.12.1, [multiup.org][cia][usa], [same" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            3
          
        </li>
                                        <li>Views: 291</li>
                                        <li class="hidden">Rating0 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/61685.html?s=b1372a653cf5892c033fb23921d82ccc" title="covcha is offline">
                                                    <strong>covcha</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/61685.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=61685&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=61685&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Day Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/279929-multiup-org-cia-usa-mario-kart-7-ctgp-7-v0-12-1-a-post467475.html?s=b1372a653cf5892c033fb23921d82ccc#post467475" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li class="threadbit hot attachments" id="thread_276956">
                                <div class="rating5 nonsticky">
                                    <div class="threadinfo" title="">
                                        <!--  status icon block -->
                                        <a class="threadstatus" rel="vB::AJAX" ></a>
                                        <!-- title / author block -->
                                        <div class="inner">
                                            <h3 class="threadtitle">
                                                <img src="http://www.3dsiso.com/images/icons/icon6.png" alt="Cool" border="0" />
                                                <a class="title" href="http://www.3dsiso.com/cia-downloads/276956-gd-mega-yo-kai-watch-2-bony-spirits-fleshy-souls-undub-3dsiso-exclusive.html?s=b1372a653cf5892c033fb23921d82ccc" id="thread_title_276956">[GD][MEGA] YO-KAI Watch 2: Bony Spirits &amp; Fleshy Souls (US) + UNDUB *3DSiso Exclusive</a>
                                            </h3>
                                            <div class="threadmeta">
                                                <div class="author">
                                                    <span class="label">Started by&nbsp;
                                                        <a href="http://www.3dsiso.com/members/144234.html?s=b1372a653cf5892c033fb23921d82ccc" class="username understate" title="Started by Billy Halim on 09-29-2016">Billy Halim</a>,&nbsp;09-29-2016
                                                    </span>
                                                    <dl class="pagination" id="pagination_threadbit_276956">
                                                        <dt class="label">20 Pages 
                                                            <span class="separator">&bull;</span>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/276956-gd-mega-yo-kai-watch-2-bony-spirits-fleshy-souls-undub-3dsiso-exclusive.html?s=b1372a653cf5892c033fb23921d82ccc">1</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/276956-gd-mega-yo-kai-watch-2-bony-spirits-fleshy-souls-undub-3dsiso-exclusive-2.html?s=b1372a653cf5892c033fb23921d82ccc">2</a>
                                                            </span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/276956-gd-mega-yo-kai-watch-2-bony-spirits-fleshy-souls-undub-3dsiso-exclusive-3.html?s=b1372a653cf5892c033fb23921d82ccc">3</a>
                                                            </span>
                                                            <span class="separator">...</span>
                                                            <span>
                                                                <a href="http://www.3dsiso.com/cia-downloads/276956-gd-mega-yo-kai-watch-2-bony-spirits-fleshy-souls-undub-3dsiso-exclusive-20.html?s=b1372a653cf5892c033fb23921d82ccc">20</a>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    <!-- iconinfo -->
                                                    <div class="threaddetails td">
                                                        <div class="threaddetailicons">
                                                            <img src="http://www.3dsiso.com/images/misc/tag.png" alt="home, usa, watch, yo-kai, [gdrive]" />
                                                            <a href="javascript://" onclick="attachments(276956); return false">
                                                                <img src="http://www.3dsiso.com/images/misc/paperclip.png" border="0" alt="1 Attachment(s)" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- threadstats -->
                                    <ul class="threadstats td alt" title="">
                                        <li>Replies:
          
            199
          
        </li>
                                        <li>Views: 19,320</li>
                                        <li class="hidden">Rating5 / 5</li>
                                    </ul>
                                    <!-- lastpost -->
                                    <dl class="threadlastpost td">
                                        <dt class="lastpostby hidden">Last Post By</dt>
                                        <dd>
                                            <div class="popupmenu memberaction">
                                                <a class="username offline popupctrl" href="http://www.3dsiso.com/members/3688.html?s=b1372a653cf5892c033fb23921d82ccc" title="dothackjhe is offline">
                                                    <strong>dothackjhe</strong>
                                                </a>
                                                <ul class="popupbody popuphover memberaction_body">
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/members/3688.html?s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_profile">
        View Profile
      </a>
                                                    </li>
                                                    <li class="right">
                                                        <a href="http://www.3dsiso.com/search.php?do=finduser&amp;userid=3688&amp;contenttype=vBForum_Post&amp;showposts=1&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_forum" rel="nofollow">
        View Forum Posts
      </a>
                                                    </li>
                                                    <li class="left">
                                                        <a href="http://www.3dsiso.com/private.php?do=newpm&amp;u=3688&amp;s=b1372a653cf5892c033fb23921d82ccc" class="siteicon_message" rel="nofollow">
        Private Message
      </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dd>
                                        <dd>1 Day Ago
      
                                            <a href="http://www.3dsiso.com/cia-downloads/276956-gd-mega-yo-kai-watch-2-bony-spirits-fleshy-souls-undub-3dsiso-exclusive-post467452.html?s=b1372a653cf5892c033fb23921d82ccc#post467452" class="lastpostdate understate" title="Go to last post">
                                                <img src="http://www.3dsiso.com/images/buttons/lastpost-right.png" alt="Go to last post" />
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <hr />
                    <div class="noinlinemod forumfoot">
    
    </div>
                    <input type="hidden" name="url" value="" />
                    <input type="hidden" name="s" value="b1372a653cf5892c033fb23921d82ccc" />
                    <input type="hidden" name="securitytoken" value="guest" />
                    <input type="hidden" name="forumid" value="261" />
                </form>
            </div>
            <div id="below_threadlist" class="noinlinemod below_threadlist">
                <div class="threadpagenav">
                    <form action="http://www.3dsiso.com/forumdisplay.php?f=261&amp;page=51&amp;s=b1372a653cf5892c033fb23921d82ccc" method="get" class="pagination popupmenu nohovermenu">
                        <input type="hidden" name="f" value="261" />
                        <input type="hidden" name="s" value="b1372a653cf5892c033fb23921d82ccc" />
                        <span>
                            <a href="javascript://" class="popupctrl">Page 1 of 58</a>
                        </span>
                        <span class="selected">
                            <a href="javascript://" title="Results 1 to 20 of 1,142">1</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index2.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 21 to 40 of 1,142">2</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index3.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 41 to 60 of 1,142">3</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index4.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 61 to 80 of 1,142">4</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index5.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 81 to 100 of 1,142">5</a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index11.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 201 to 220 of 1,142">
                                <!--+10-->11
                            </a>
                        </span>
                        <span>
                            <a href="http://www.3dsiso.com/cia-downloads/index51.html?s=b1372a653cf5892c033fb23921d82ccc" title="Show results 1,001 to 1,020 of 1,142">
                                <!--+50-->51
                            </a>
                        </span>
                        <span class="separator">...</span>
                        <span class="prev_next">
                            <a rel="next" href="http://www.3dsiso.com/cia-downloads/index2.html?s=b1372a653cf5892c033fb23921d82ccc" title="Next Page - Results 21 to 40 of 1,142">
                                <img src="http://www.3dsiso.com/images/pagination/next-right.png" alt="Next" />
                            </a>
                        </span>
                        <span class="first_last">
                            <a href="http://www.3dsiso.com/cia-downloads/index58.html?s=b1372a653cf5892c033fb23921d82ccc" title="Last Page - Results 1,141 to 1,142 of 1,142">Last
                                <img src="http://www.3dsiso.com/images/pagination/last-right.png" alt="Last" />
                            </a>
                        </span>
                        <ul class="popupbody popuphover">
                            <li class="formsubmit jumptopage">
                                <label>Jump to page: 
                                    <input type="text" name="page" size="4" />
                                </label>
                                <input type="submit" class="button" value="Go" />
                            </li>
                        </ul>
                    </form>
                    <div class="clear"></div>
                    <div class="navpopupmenu popupmenu nohovermenu" id="forumdisplay_navpopup">
                        <span class="shade">Quick Navigation</span>
                        <a href="http://www.3dsiso.com/cia-downloads/?s=b1372a653cf5892c033fb23921d82ccc" class="popupctrl">
                            <span class="ctrlcontainer">CIA Downloads</span>
                        </a>
                        <a href="http://www.3dsiso.com/cia-downloads/#top" class="textcontrol" onclick="document.location.hash='top';return false;">Top</a>
                        <ul class="navpopupbody popupbody popuphover">
                            <li class="optionlabel">Site Areas</li>
                            <li>
                                <a href="http://www.3dsiso.com/usercp.php?s=b1372a653cf5892c033fb23921d82ccc">Settings</a>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/private.php?s=b1372a653cf5892c033fb23921d82ccc">Private Messages</a>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/subscription.php?s=b1372a653cf5892c033fb23921d82ccc">Subscriptions</a>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/online.php?s=b1372a653cf5892c033fb23921d82ccc">Who's Online</a>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/search.php?s=b1372a653cf5892c033fb23921d82ccc">Search Forums</a>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/?s=b1372a653cf5892c033fb23921d82ccc">Forums Home</a>
                            </li>
                            <li class="optionlabel">Forums</li>
                            <li>
                                <a href="http://www.3dsiso.com/3dsiso-s-official-forum-rules/?s=b1372a653cf5892c033fb23921d82ccc">3DSISO's Official Forum Rules</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/forum-rules/?s=b1372a653cf5892c033fb23921d82ccc">Forum Rules</a>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/site-and-community-section/?s=b1372a653cf5892c033fb23921d82ccc">Site &amp; Community Section</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/introduction/?s=b1372a653cf5892c033fb23921d82ccc">Introduction</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/suggestion-bug-submitting/?s=b1372a653cf5892c033fb23921d82ccc">Suggestion/Bug Submitting</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/-contests-and-announcements/?s=b1372a653cf5892c033fb23921d82ccc">Contests &amp; Announcements</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/3dsiso-community-un-released-eshop-game-buying-section/?s=b1372a653cf5892c033fb23921d82ccc">3DSISO Community Un-released eShop Game Buying Section</a>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/news-section-/?s=b1372a653cf5892c033fb23921d82ccc">News Section</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-3ds-news/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS News</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-news/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo News</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/general-news/?s=b1372a653cf5892c033fb23921d82ccc">General News</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/other-consoles-devices-news/?s=b1372a653cf5892c033fb23921d82ccc">Other Consoles/Devices News</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/abgx-new-3ds-scene-releases/?s=b1372a653cf5892c033fb23921d82ccc">ABGX New 3DS Scene Releases</a>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/chat-section/?s=b1372a653cf5892c033fb23921d82ccc">Chat Section</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-3ds-n3ds-2ds-chat/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS, N3DS,2DS Chat</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-chat/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Chat</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-new-3ds-chat/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo New 3DS Chat</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-2ds-chat/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 2DS Chat</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-game-chat/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Game Chat</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-chat/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo Chat</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/general-chat/?s=b1372a653cf5892c033fb23921d82ccc">General Chat</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/fun-and-games/?s=b1372a653cf5892c033fb23921d82ccc">Fun &amp; Games</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/other-devices/?s=b1372a653cf5892c033fb23921d82ccc">Other Devices</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/anime-manga-discussions/?s=b1372a653cf5892c033fb23921d82ccc">Anime/Manga Discussions</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/graphics-area/?s=b1372a653cf5892c033fb23921d82ccc">Graphics Area</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/its-my-birthday-/?s=b1372a653cf5892c033fb23921d82ccc">Its My Birthday!!</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/flashcart-discussions/?s=b1372a653cf5892c033fb23921d82ccc">Flashcart Discussions</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/gateway/?s=b1372a653cf5892c033fb23921d82ccc">Gateway</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/sky3ds/?s=b1372a653cf5892c033fb23921d82ccc">SKY3DS</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/mt-card/?s=b1372a653cf5892c033fb23921d82ccc">MT-Card</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/r5-3ds-r4-3ds-r4-ds/?s=b1372a653cf5892c033fb23921d82ccc">R5 3DS/R4 3DS/R4 DS</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/supercard-dstwo/?s=b1372a653cf5892c033fb23921d82ccc">Supercard DSTWO</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/acekard/?s=b1372a653cf5892c033fb23921d82ccc">Acekard</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/edge/?s=b1372a653cf5892c033fb23921d82ccc">EDGE</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/miscellaneous-flashcard-discussion/?s=b1372a653cf5892c033fb23921d82ccc">Miscellaneous Flashcard Discussion</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/cfw-discussions/?s=b1372a653cf5892c033fb23921d82ccc">CFW Discussions</a>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/faq-walktrough-all-nintendo-handheld-devices/?s=b1372a653cf5892c033fb23921d82ccc">FAQ/Walktrough all Nintendo Handheld Devices</a>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/support-section/?s=b1372a653cf5892c033fb23921d82ccc">Support Section</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/help-and-faqs/?s=b1372a653cf5892c033fb23921d82ccc">Help &amp; FAQs</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-help/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Help</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/cfw-help/?s=b1372a653cf5892c033fb23921d82ccc">CFW Help</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-help/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo Help</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/general-help/?s=b1372a653cf5892c033fb23921d82ccc">General Help</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/tips-and-tutorials/?s=b1372a653cf5892c033fb23921d82ccc">Tips and Tutorials</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/3ds-tips-and-tutorials/?s=b1372a653cf5892c033fb23921d82ccc">3DS Tips and Tutorials</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-tips-and-tutorials/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo Tips and Tutorials</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/other-tips-and-tutorials/?s=b1372a653cf5892c033fb23921d82ccc">Other Tips and Tutorials</a>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/nintendo-3ds-roms-homebrews-and-downloads/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS ROMs, Homebrews and Downloads</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-3ds-roms-downloads/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS ROMs Downloads</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/-nintendo-3ds-roms-requests-/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS ROMs Requests</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/-nintendo-3ds-rom-hacks-undubs-translations-customs/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS ROM Hacks/Undubs/Translations/Customs</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-nintendo-3ds-rom-hacks-undubs-translations-customs-requests/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS ROM Hacks/Undubs/Translations/Customs Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-3dsware-rom-downloads/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DSWare ROM Downloads</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3dsware-rom-requests/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DSWare ROM Requests</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/cia-downloads/?s=b1372a653cf5892c033fb23921d82ccc">CIA Downloads</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/cia-requests/?s=b1372a653cf5892c033fb23921d82ccc">CIA Requests</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates/?s=b1372a653cf5892c033fb23921d82ccc">CIA Format DLC's, Themes &amp; Updates</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/cia-format-dlc-s-themes-and-updates-requests/?s=b1372a653cf5892c033fb23921d82ccc">CIA Format DLC's, Themes &amp; Updates Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/cia-format-dsi-ware/?s=b1372a653cf5892c033fb23921d82ccc">CIA Format DSi Ware</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/cia-format-dsi-ware-requests/?s=b1372a653cf5892c033fb23921d82ccc">CIA Format DSi Ware Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/cia-format-gba-nes-gbc-gb-snes-virtual-console-games/?s=b1372a653cf5892c033fb23921d82ccc">CIA Format GBA, NES, GBC, GB, SNES Virtual Console Games</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/cia-format-vc-requests/?s=b1372a653cf5892c033fb23921d82ccc">CIA Format VC Requests</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/virtual-console-inject/?s=b1372a653cf5892c033fb23921d82ccc">Virtual Console Inject</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/xorpad-downloads/?s=b1372a653cf5892c033fb23921d82ccc">Xorpad Downloads</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/xorpad-requests/?s=b1372a653cf5892c033fb23921d82ccc">Xorpad Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/cia-manga-and-movies/?s=b1372a653cf5892c033fb23921d82ccc">CIA Manga &amp; Movies</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/-nintendo-3ds-homebrews/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Homebrews</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-homebrew-requests/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Homebrew Requests</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/-nintendo-3ds-saves-and-cheats/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Saves &amp; Cheats</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/cheats-/?s=b1372a653cf5892c033fb23921d82ccc">Cheats</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/-saves-/?s=b1372a653cf5892c033fb23921d82ccc">Saves</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/-save-and-cheats-requests-/?s=b1372a653cf5892c033fb23921d82ccc">Save &amp; Cheats Requests</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/other-nintendo-3ds-downloads-/?s=b1372a653cf5892c033fb23921d82ccc">Other Nintendo 3DS Downloads</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/amiibo-bin-file-downloads-for-the-amiiqo-/?s=b1372a653cf5892c033fb23921d82ccc">Amiibo Bin File Downloads For The Amiiqo</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/amiibo-bin-file-requests-/?s=b1372a653cf5892c033fb23921d82ccc">Amiibo Bin File Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/-nintendo-3ds-movies-/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Movies</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-pc-applications/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS PC Applications</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-nintendo-3ds-pc-applications-requests/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS PC Applications Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/-nintendo-3ds-covers-and-manuals-/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Covers &amp; Manuals</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/3ds-covers-/?s=b1372a653cf5892c033fb23921d82ccc">3DS Covers</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/3ds-manuals-and-strategy-guides/?s=b1372a653cf5892c033fb23921d82ccc">3DS Manuals &amp; Strategy Guides</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-3ds-covers-and-manuals-requests/?s=b1372a653cf5892c033fb23921d82ccc">3DS Covers and Manuals Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/sales-and-services/?s=b1372a653cf5892c033fb23921d82ccc">Sales and Services</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/sales-and-services/?s=b1372a653cf5892c033fb23921d82ccc">Sales and Services</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-services/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Services</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-sales/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS Sales</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-3ds-rom-header-sales/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo 3DS ROM Header Sales</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/other-services/?s=b1372a653cf5892c033fb23921d82ccc">Other Services</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/other-sales/?s=b1372a653cf5892c033fb23921d82ccc">Other Sales</a>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="http://www.3dsiso.com/nintendo-ds-roms-homebrews-and-downloads-/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS ROMs, Homebrews and Downloads</a>
                                <ol class="d1">
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-ds-roms-downloads/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS ROMs Downloads</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-ds-roms-requests/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS ROMs Requests</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/nintendo-ds-homebrews/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS Homebrews</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-ds-homebrew-requests/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS Homebrew Requests</a>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <a href="http://www.3dsiso.com/other-nintendo-ds-downloads/?s=b1372a653cf5892c033fb23921d82ccc">Other Nintendo DS Downloads</a>
                                        <ol class="d2">
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-ds-saves-and-cheats/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS Saves &amp; Cheats</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-saves/?s=b1372a653cf5892c033fb23921d82ccc">Saves</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-cheats/?s=b1372a653cf5892c033fb23921d82ccc">Cheats</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-saves-and-cheats-requests/?s=b1372a653cf5892c033fb23921d82ccc">Saves &amp; Cheats Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/-nintendo-ds-covers-and-manuals/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS Covers &amp; Manuals</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-ds-covers/?s=b1372a653cf5892c033fb23921d82ccc">DS Covers</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-ds-manuals-and-strategy-guides/?s=b1372a653cf5892c033fb23921d82ccc">DS Manuals &amp; Strategy Guides</a>
                                                    </li>
                                                    <li>
                                                        <a href="http://www.3dsiso.com/ds-covers-and-manuals-requests-/?s=b1372a653cf5892c033fb23921d82ccc">DS Covers and Manuals Requests.</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-ds-rom-hacks-translations-customs/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS ROM Hacks/Translations/Customs</a>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-ds-pc-applications/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS PC Applications</a>
                                                <ol class="d3">
                                                    <li>
                                                        <a href="http://www.3dsiso.com/-nintendo-ds-pc-applications-requests-/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS PC Applications Requests</a>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <a href="http://www.3dsiso.com/nintendo-ds-movies/?s=b1372a653cf5892c033fb23921d82ccc">Nintendo DS Movies</a>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div id="forum_info_options" class="forum_info block">
                <div class="collapse">
                    <a class="collapse" id="collapse_forum_options" href="http://www.3dsiso.com/cia-downloads/#top">
                        <img src="http://www.3dsiso.com/images/buttons/collapse_40b.png" alt="" />
                    </a>
                    <h4 class="forumoptiontitle blockhead">Thread Display Options</h4>
                </div>
                <div id="forum_options" class="forum_info_form_block">
                    <form id="forum_display_options" action="http://www.3dsiso.com/forumdisplay.php" method="get" class="forum_info_form blockbody formcontrols floatcontainer">
                        <input type="hidden" name="s" value="b1372a653cf5892c033fb23921d82ccc" />
                        <input type="hidden" name="f" value="261" />
                        <input type="hidden" name="page" value="1" />
                        <input type="hidden" name="pp" value="20" />
                        <div>
                            <div class="options_input_block">
                                <label for="sel_daysprune">Show threads from the...</label>
                                <select class="primary" id="sel_daysprune" name="daysprune">
                                    <option value="1" >Last Day</option>
                                    <option value="2" >Last 2 Days</option>
                                    <option value="7" >Last Week</option>
                                    <option value="10" >Last 10 Days</option>
                                    <option value="14" >Last 2 Weeks</option>
                                    <option value="30" >Last Month</option>
                                    <option value="45" >Last 45 Days</option>
                                    <option value="60" >Last 2 Months</option>
                                    <option value="75" >Last 75 Days</option>
                                    <option value="100" >Last 100 Days</option>
                                    <option value="365" >Last Year</option>
                                    <option value="-1" selected="selected">Beginning</option>
                                </select>
                                <p class="description">Use this control to limit the display of threads to those newer than the specified time frame.</p>
                            </div>
                            <div class="options_input_block">
                                <label for="sel_sort">Sort threads by:</label>
                                <select class="primary" id="sel_sort" name="sort">
                                    <option value="title" >Thread Title</option>
                                    <option value="lastpost" selected="selected">Last Post Time</option>
                                    <option value="dateline" >Thread Start Time</option>
                                    <option value="replycount" >Number of Replies</option>
                                    <option value="views" >Number of Views</option>
                                    <option value="postusername" >Thread Starter</option>
                                    <option value="voteavg" >Thread Rating</option>
                                </select>
                                <p class="description">Allows you to choose the data by which the thread list will be sorted.</p>
                            </div>
                            <!-- Group of Radio Buttons -->
                            <div class="options_input_block">
                                <p class="label">Order threads in...</p>
                                <ul class="checkradio group">
                                    <li>
                                        <label for="radio_asc">
                                            <input type="radio" name="order" id="radio_asc" value="asc"  /> Ascending Order
                                        </label>
                                    </li>
                                    <li>
                                        <label for="radio_dsc">
                                            <input type="radio" name="order" id="radio_dsc" value="desc" checked="checked" /> Descending Order
                                        </label>
                                    </li>
                                </ul>
                                <p class="description">Note: when sorting by date, 'descending order' will show the newest results first.</p>
                            </div>
                        </div>
                        <div class="options_input_wrapper">
                            <div class="options_input_block">
                                <div class="group">
                                    <input type="submit" class="button" value="Show Threads" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="options_block_container">
                    <div class="options_block">
                        <div class="collapse options_correct">
                            <a class="collapse" id="collapse_forum_icon_legend" href="http://www.3dsiso.com/cia-downloads/#top">
                                <img src="http://www.3dsiso.com/images/buttons/collapse_40b.png" alt="" />
                            </a>
                            <h4 class="blockhead">Icon Legend</h4>
                        </div>
                        <div id="forum_icon_legend" class="forum_info_block blockbody formcontrols options_correct">
                            <dl id="icon_legends" class="forum_info_subblock icon_legends">
                                <dt>
                                    <img src="http://www.3dsiso.com/images/statusicon/thread_new-16.png" alt="Contains unread posts" />
                                </dt>
                                <dd>Contains unread posts</dd>
                                <dt>
                                    <img src="http://www.3dsiso.com/images/statusicon/thread-16-right.png" alt="Contains no unread posts" />
                                </dt>
                                <dd>Contains no unread posts</dd>
                                <dt>
                                    <img src="http://www.3dsiso.com/images/statusicon/thread_hot_new-16.png" alt="More than 15 replies or 150 views" />
                                </dt>
                                <dd>Hot thread with unread posts</dd>
                                <dt>
                                    <img src="http://www.3dsiso.com/images/statusicon/thread_hot-16.png" alt="More than 15 replies or 150 views" />
                                </dt>
                                <dd>Hot thread with no unread posts</dd>
                                <dt>
                                    <img src="http://www.3dsiso.com/images/statusicon/thread_lock-16.png" alt="Closed Thread" />
                                </dt>
                                <dd>Thread is closed</dd>
                                <dt>
                                    <img src="http://www.3dsiso.com/images/statusicon/thread_dot-16-right.png" alt="Thread Contains a Message Written By You" />
                                </dt>
                                <dd>You have posted in this thread</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="options_block2">
                        <div class="collapse options_correct">
                            <a class="collapse" id="collapse_posting_rules" href="http://www.3dsiso.com/cia-downloads/#top">
                                <img src="http://www.3dsiso.com/images/buttons/collapse_40b.png" alt="" />
                            </a>
                            <h4 class="blockhead">Posting Permissions</h4>
                        </div>
                        <div id="posting_rules" class="forum_info_block blockbody formcontrols floatcontainer options_correct">
                            <div id="forumrules" class="info_subblock">
                                <ul class="youcandoblock">
                                    <li>You 
                                        <strong>may not</strong> post new threads
                                    </li>
                                    <li>You 
                                        <strong>may not</strong> post replies
                                    </li>
                                    <li>You 
                                        <strong>may not</strong> post attachments
                                    </li>
                                    <li>You 
                                        <strong>may not</strong> edit your posts
                                    </li>
                                    <li>&nbsp;</li>
                                </ul>
                                <div class="bbcodeblock">
                                    <ul>
                                        <li>
                                            <a rel="nofollow" href="http://www.3dsiso.com/misc.php?do=bbcode&amp;s=b1372a653cf5892c033fb23921d82ccc" target="_blank">BB code</a> is
                                            <strong>On</strong>
                                        </li>
                                        <li>
                                            <a rel="nofollow" href="http://www.3dsiso.com/misc.php?do=showsmilies&amp;s=b1372a653cf5892c033fb23921d82ccc" target="_blank">Smilies</a> are
                                            <strong>On</strong>
                                        </li>
                                        <li>
                                            <a rel="nofollow" href="http://www.3dsiso.com/misc.php?do=bbcode&amp;s=b1372a653cf5892c033fb23921d82ccc#imgcode" target="_blank">[IMG]</a> code is
                                            <strong>On</strong>
                                        </li>
                                        <li>
                                            <a rel="nofollow" href="http://www.3dsiso.com/misc.php?do=bbcode&amp;s=b1372a653cf5892c033fb23921d82ccc#videocode" target="_blank">[VIDEO]</a> code is
                                            <strong>On</strong>
                                        </li>
                                        <li>HTML code is 
                                            <strong>Off</strong>
                                        </li>
                                    </ul>
                                </div>
                                <p class="rules_link">
                                    <a rel="nofollow" href="http://www.3dsiso.com/misc.php?do=showrules&amp;s=b1372a653cf5892c033fb23921d82ccc" target="_blank">Forum Rules</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                <!--
vbphrase['doubleclick_forum_markread'] = "Double-click this icon to mark this forum and its contents as read";
init_forum_readmarker_system();
//-->

            </script>
            <div style="clear: left">
                <div id="ad_global_above_footer">
                    <form id="isobar"></form>
                    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
                    <script src="http://www.isonw.com/isobar.js"></script>
                </div>
            </div>
            <div id="footer" class="floatcontainer footer">
                <form action="http://www.3dsiso.com/forum.php" method="get" id="footer_select" class="footer_select">
                    <select name="styleid" onchange="switch_id(this, 'style')">
                        <optgroup label="Quick Style Chooser">
                            <option class="hidden"></option>
                        </optgroup>
                        <option value="33" class="" selected="selected">-- 3DSISO Classic</option>
                        <option value="35" class="" >-- 3DSISO Dusk</option>
                        <option value="39" class="" >-- 3DSISO Nightly</option>
                    </select>
                </form>
                <ul id="footer_links" class="footer_links">
                    <li>
                        <a href="http://www.3dsiso.com/sendmessage.php?s=b1372a653cf5892c033fb23921d82ccc" rel="nofollow" accesskey="9">Contact Us</a>
                    </li>
                    <li>
                        <a href="http://www.3dsiso.com">3DSISO</a>
                    </li>
                    <li>
                        <a href="http://www.3dsiso.com/archive/index.php?s=b1372a653cf5892c033fb23921d82ccc">Archive</a>
                    </li>
                    <li>
                        <a href="http://www.3dsiso.com/cia-downloads/#top" onclick="document.location.hash='top'; return false;">Top</a>
                    </li>
                </ul>
                <script type="text/javascript">
                    <!--
    // Main vBulletin Javascript Initialization
    vBulletin_init();
  //-->
  
                </script>
            </div>
        </div>
        <!-- closing div for body_wrapper -->
        <div align="center" style="font-size:14px;color:red;font-weight:bold;margin:10px;">
Please contact us for your DMCA OR Abuse Requests via 
            <br>
            <a rel="nofollow" href="mailto:dmca@3dsiso.com">dmca@3dsiso.com</a>
        </div>
        <div class="below_body">
            <div id="footer_time" class="shade footer_time">All times are GMT. The time now is 
                <span class="time">08:33 PM</span>.
            </div>
            <div id="footer_copyright" class="shade footer_copyright">
                <!-- Do not remove this copyright notice -->
  Powered by 
                <a rel="nofollow" href="https://www.vbulletin.com" id="vbulletinlink">vBulletin&reg;</a> Version 4.2.3
                <br />Copyright &copy; 2017 vBulletin Solutions, Inc. All rights reserved.
                <!-- Do not remove this copyright notice -->  

            </div>
            <div id="footer_morecopyright" class="shade footer_morecopyright">
                <!-- Do not remove cronimage or your scheduled tasks will cease to function -->
                <!-- Do not remove cronimage or your scheduled tasks will cease to function -->
  Search Engine Optimisation provided by 
      
                <a rel="nofollow" href="http://www.dragonbyte-tech.com/vbecommerce.php?productid=303&do=product&utm_source=3dsiso.com&utm_campaign=product&utm_medium=DragonByte%2BSEO&utm_content=Lite" target="_blank">DragonByte SEO v2.0.20 (Lite)</a> -
                <a rel="nofollow" href="http://www.dragonbyte-tech.com/?utm_source=3dsiso.com&utm_campaign=site&utm_medium=DragonByte%2BSEO&utm_content=Lite" target="_blank">vBulletin Mods &amp; Addons</a> Copyright &copy; 2017 DragonByte Technologies Ltd.
                <br />All the content on 3DSISO.com is user generated and linked to 3rd party websites. 3DSISO.com do not host any files at it's servers, it basically provides and indexing service. 3DSISO.com; It's owners and it's staff can not be held responsible for any type of content. To remove a link please contact webmaster via Contactus.
            </div>

3dsiso is the best
            <div id="fb-root"></div>
            <script type="text/javascript" src="http://www.3dsiso.com/clientscript/vbulletin_facebook.js?v=423"></script>
            <script type="text/javascript">
                <!--
  loadFacebookAPI('en_US');
  function fbAsyncInit()
  {
    vBfb = new vB_Facebook({
      appid : "1377720232451715",
      connected : 0,
      active : 0,
      autoreg : 1,
      feed_newthread : 1,
      feed_postreply : 1,
      feed_blogentry : 1,
      feed_blogcomment : 1,
      feed_newarticle : 1,
      feed_articlecomment : 1
    });
  }
// -->

            </script>
        </div>
        <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-9398625-22']);
  _gaq.push(['_setDomainName', '3dsiso.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
        <div id="eXTReMe" align="center">
            <a rel="nofollow" href="http://extremetracking.com/open?login=3dsisos">
                <img src="http://t1.extreme-dm.com/i.gif" style="border: 0;"
height="38" width="41" id="EXim" alt="eXTReMe Tracker" />
            </a>
            <script type="text/javascript">
                <!--
EXref="";top.document.referrer?EXref=top.document.referrer:EXref=document.referrer;//-->

            </script>
            <script type="text/javascript">
                <!--
var EXlogin='3dsisos' // Login
var EXvsrv='s9' // VServer
EXs=screen;EXw=EXs.width;navigator.appName!="Netscape"?
EXb=EXs.colorDepth:EXb=EXs.pixelDepth;EXsrc="src";
navigator.javaEnabled()==1?EXjv="y":EXjv="n";
EXd=document;EXw?"":EXw="na";EXb?"":EXb="na";
EXref?EXref=EXref:EXref=EXd.referrer;
EXd.write("<img "+EXsrc+"=http://e0.extreme-dm.com",
"/"+EXvsrv+".g?login="+EXlogin+"&amp;",
"jv="+EXjv+"&amp;j=y&amp;srw="+EXw+"&amp;srb="+EXb+"&amp;",
"l="+escape(EXref)+" height=1 width=1>");//-->

            </script>
            <noscript>
                <div id="neXTReMe">
                    <img height="1" width="1" alt=""
src="http://e0.extreme-dm.com/s9.g?login=3dsisos&amp;j=n&amp;jv=n" />
                </div>
            </noscript>
        </div>
        <script type="text/javascript" src="//s.ntv.io/serve/load.js" async></script>
    </body>
</html>`

var $ = cheerio.load(html);
$('script').remove();
$('style').remove();




var every = $('*');
for (var i=0; i<every.length; i++) {
  var remove = item => {
    $(item).remove();
    every = $('*');
    i=0;
  }

  var href = every[i].attribs.href
  every[i].attribs = {};
  if (href) every[i].attribs['href'] = href;
  if (every[i].children.length === 0) { remove(every[i]); continue; }
}



// console.log($('div')[0]);
console.log($.html());