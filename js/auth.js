
if(sessionStorage.getItem("dashboard-code")==null) {

  sessionStorage.setItem("dashboard-fudge",Math.floor(Math.random() * 10000000000000001));
  fudge=sessionStorage.getItem("dashboard-fudge");
  logButton=document.getElementById('signin');

  signin.innerHTML="<a class='button' href='https://app.asana.com/-/oauth_authorize?response_type=code&client_id=1203516656368369&redirect_uri=https%3A%2F%2Fgruffwizard.dev%2Fdashboard%2F&state="+fudge+"'>Sign in</a>";


}
