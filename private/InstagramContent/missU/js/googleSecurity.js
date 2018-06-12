// Nicholas Huaman 2018

			// If someone didn't complete the sign-in correctly, then something ought to happen!
			// This code is then executed.
	
			function onFail(){
			      document.getElementById("oops").innerHTML='<h2 style="color:red;">Oops... Something went wrong there...</h2><h2 style="color:red;">Try again!</h2>';
			}

			// Here is what happens when Google Signs u in correctly.
			function onSignIn(googleUser) {
			      // Refer to Google using this variable. This is the base for the useful variables for code users.
			      var profile = googleUser.getBasicProfile();
			      // Name Google User Variables for future use!
			      var profileImg = profile.getImageUrl();
			      var profileName = profile.getName();
			      var allNames = profileName.split(" ");
			      var firstName = allNames[0];
			      var profileEmail = profile.getEmail();
				  
				  function nh_SecurityCheck(){
						if (profileEmail==="esme.lam@kcpupils.org" || profileEmail==="nicholas.hua@kcpupils.org"){      
								document.body.innerHTML='<h1 style="margin-left:10%;font-size:100px;">Bye, '+firstName+'!</h1><p style="margin-left:10%;margin-top:-50px;">Have a great time in _ _ _ _ _ _!</p><img style="margin-top:-70px;margin-left:60%;width:200px;" src="https://zippy.gfycat.com/ChubbyRadiantBlackfish.gif"><div style="left:10%;top:-250px;padding:100px;" class="wrapper"><div class="border-circle" id="one"></div><div class="border-circle" id="two"></div><div class="background-circle"><div class="triangle-light"></div><div class="body"></div><span class="shirt-text">N</span><span class="shirt-text">H</span><span class="shirt-text">N</span><span class="shirt-text">e</span><span class="shirt-text">t</span><div class="triangle-dark"></div></div><div class="head"><div class="ear" id="left"></div><div class="ear" id="right"></div><div class="hair-main"><div class="sideburn" id="left"></div><div class="sideburn" id="right"></div><div class="hair-top"></div></div><div class="face"><div class="hair-bottom"></div><div class="nose"></div><div class="eye-shadow" id="left"><div class="eyebrow"></div><div class="eye"></div></div><div class="eye-shadow" id="right"><div class="eyebrow"></div><div class="eye"></div></div><div class="mouth"></div><div class="shadow-wrapper"><div class="shadow"></div></div></div></div></div><br><a href="#feedback"><img onclick="document.body.style.overflow='+"'hidden'"+';" style="position:absolute;z-index:3000;margin-left:-10px;margin-top:-320px;width:50px;" src="https://media.giphy.com/media/8wbpmeim0LmdW/giphy.gif"></a><p style="" id="feedback">To get to the content, you shall have to give some feedback!</p><div style="columns: '+window.innerWidth/3+'px 3;"><div><button onclick="gotoContent();" class="annoy">You'+"'"+'re annoying!</button></div><div><button onclick="gotoContent();" class="ok">You'+"'"+'re ok</button></div><div><button onclick="gotoContent();" class="like">I like you</button></div></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
						}else{
								document.body.innerHTML='<h1><img style="background:White;border-radius:50px;" width="80px" src="https://image.flaticon.com/icons/png/512/12/12195.png">&nbsp;NH Net Browser</h1><br><h1 id="man" style="transform:rotate(90deg);">(: ( )</h1><p>You are trying to view content that isn'+"'t"+' for you.</p><p>Go back to what you should be doing and not trying to nose into things that aren'+"'t"+' for you...</p><script>MoveMan();setInterval(MoveMan, 2000);function MoveMan(){setTimeout(function(){document.getElementById("man").innerHTML="(: ()"; /*Close mouth*/},0);setTimeout(function(){document.getElementById("man").innerHTML="(: ( )"; /*Open mouth*/},1000);}&#60;/script>';
						}
				  }
				  
			      nh_SecurityCheck();
			}
			// That's all folks!
			// Thank you for using my code.
			// Nicholas Huaman 2018
