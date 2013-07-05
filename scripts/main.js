requirejs.config({
    "paths": {
      "jquery": "../components/jquery/jquery.min",
      "randoms": "../scripts/randoms"
    }
});

define(["jquery", "randoms"], function($) {
	document.addEventListener("visibilitychange", handleVisibilityChange, false);
});
