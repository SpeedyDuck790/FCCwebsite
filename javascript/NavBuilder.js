window.onload = function () {
    // Create the nav bar HTML
    const navBarHtml = `
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="index.html">
                    <img src="/res/FCCLOGO.png" style="height: 200%;" alt="picture of club">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="News&TourmPage.html">Tournements</a></li>
                    <li><a href="HistoryPage.html">History</a></li>
                    <li><a href="Games.html">Club Games</a></li>
                    <li><a href="MembershipInfoPg.html">Membership</a></li>
                    <li><a href="ContactPage.html">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>
  `;

    // Prepend the nav bar to the body
    document.body.insertAdjacentHTML('afterbegin', navBarHtml);

    console.log("Nav Spawned");
};


//DECIDED NOT TO IMPLEMENT FOR NOW 
//REASON: nav bar has to load for half second making page loading not as smooth