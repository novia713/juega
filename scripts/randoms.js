		function giveme_nums(top, n) {
		    var nums = [];
		    var raws = [];
		    var r = 0;
		    var color = '';
		    for (i = 1; i <= n; i++) {
				r = (1 + Math.floor(Math.random() * top));
		        if (-1 != $.inArray(r, raws)) {
					r = (1 + Math.floor(Math.random() * top));
				}

				raws[i] =  r;
		        color = (6 === n) ? "verde" : "azul";
		        if (r <= 9) r = "&nbsp;" + r + "&nbsp;";
		        nums[i] = "<span id='" + color + "'>" + r + "</span>";
		    }

		    if (6 === n) {
		        $('#primitivos').html('').hide();
		        $('#primitivos').append(nums.sort().join(' ')).fadeIn();
		    } else {
		        var stars = [];
		        var rawstars = [];

		        for (y = 1; y <= 2; y++) {
					s = (1 + Math.floor(Math.random() * 9));
					if (-1 != $.inArray(s, rawstars)) {
						s = (1 + Math.floor(Math.random() * 9));
					}
					rawstars[y] =  s;
		            stars[y] = "<span id='amarillo'>&nbsp;" + s + "&nbsp;</span>";
		        }

		        $('#euromillones').html('').hide();
		        $('#euromillones').append(nums.sort().join(' ')).fadeIn();

		        $('#estrellas').html('').hide();
		        $('#estrellas').append('' + stars.sort().join(' ')).fadeIn();
		    }
		}

		function handleVisibilityChange() {
		    if (document.hidden) {} else {
		        window.location.href = "index.html";
		    }
		}

		function about(){
			location.href="about.html";
		}
