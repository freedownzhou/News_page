function goTo(m){
			switch(m)
			{
				case "1":				
				$(".bh-account_router").load("dialog/Introduction.html");
				break;
				case "2":
				$(".bh-account_router").load("dialog/contact.html");
				break;		
				default:
            	break
				
			}
		   }
