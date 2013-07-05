requirejs.config({
    "paths": {
      "jquery": "../components/jquery/jquery.min",
      "randoms": "../scripts/randoms"
    }
});

define(["jquery", "randoms"], function($) {
	$('#primitivos').html('<br>');
	$('#euromillones').html('<br>');
	document.addEventListener("visibilitychange", handleVisibilityChange, false);
});
