async function showHeader(){
    return `<div id="topnav" class="border-bottom">
    <div id="logo"><a href="goodkart.html"><img style="width: 70%;" class="img-fluid" src="https://www.lybrate.com/img/Lybrate-Goodkart-Logo.png" /></a></div>
    <div id="search">
        <input type="text" id="searchBox" placeholder="Search for Health Products" />
    </div>
    <div class="mt-2"><a class="text-decoration-none text-black" href="signup.html">Login/Signup</a></div>
    <span id="lybrateCashLogo" class="mt-2" title="This feature coming soon" style="cursor: pointer;">
        <img  src="https://assets.lybrate.com/q_auto,f_auto,h_15,w_15/imgs/product/d2d/PatientGoldMembership/lybrate_icon_red_large.png" />
        LybrateCash
    </span>
    <a class="mt-2" href="landingpage.html"><button class="btn btn-sm btn-outline-dark py-0">Home</button></a>
    <a class="text-black" href="cart.html"><span style=" font-size: 40px;" class="material-icons">shopping_cart</span></a>
</div>`
}

export default showHeader;

