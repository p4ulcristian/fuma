
shadow.cljs.devtools.client.env.module_loaded('app');

try { app.frontend.site.start_app_BANG_(); } catch (e) { console.error("An error occurred when calling (app.frontend.site/start-app!)"); console.error(e); }