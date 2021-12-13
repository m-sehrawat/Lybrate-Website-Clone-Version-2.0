async function topHeader() {
    return `<div id="topnavbar">
    <div class="conatiner-fluid topnavbar">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-2 col-lg-4" style="color: #be2528;">This is only for Educational Purposes</div>
            <div style="cursor: pointer;" title="App will come soon" class="col-12 col-sm-12 col-md-2 col-lg-2">Get theApp</div>
            <div onclick="bookAppointment('diabetes')" style="cursor: pointer;" class="col-12 col-sm-12 col-md-2 col-lg-2 ">for Doctors</div>
            <div onclick="displayNews('depression')" style="cursor: pointer;" class="col-12 col-sm-12 col-md-2 col-lg-2 ">HealthFeed</div>
            <div class="col-12 col-sm-12 col-md-2 col-lg-2 "><a style="text-decoration: none;color: rgb(105, 93, 93); " href="signup.html">Login/Signup</a></div>
            <div class="col-12 col-sm-12 col-md-2 col-lg-1 "></div>
        </div>
    </div>
</div>

<div id="navbar">
    <div class="mt-2">
        <a href="landingpage.html"><img style="width: 27%; margin-left: 30%;" src="https://assets.lybrate.com/q_auto,f_auto//imgs/product/logos/Lybrate-Logo.png"></a>
    </div>
    <div onclick="bookAppointment('depression')" class="mt-3" style="cursor: pointer;">
        <a><img src="https://assets.lybrate.com/q_auto,f_auto,h_28,w_28,c_fill/imgs/product/Homepage/Ask-Question.png">Ask Question</a>
    </div>
    <div onclick="bookAppointment('hairfall')" class="mt-3" style="cursor: pointer;">
        <a><img src="https://assets.lybrate.com/q_auto,f_auto,h_28,w_28,c_fill/imgs/product/Homepage/Book-Appointment.png" alt="">BookAppointment</a>
    </div>
    <div class="mt-3">
        <a href="consultOnline.html"><img src="https://assets.lybrate.com/q_auto,f_auto,h_28,w_28,c_fill/imgs/product/Homepage/Consult-Online.png" alt="">Consult Online</a>
    </div>
    <div onclick="bookAppointment('diabetes')" class="mt-3" style="cursor: pointer;">
        <a><img src="https://assets.lybrate.com/q_auto,f_auto,h_28,w_28,c_fill/imgs/product/Homepage/Book-Lab-test.png" alt="">Book Lab Test</a>
    </div>
    <div class="mt-2 ms-3">
        <a href="goodkart.html"><button class="btn btn-danger rounded-pill">goodkart</button></a>
    </div>
    <div class="mt-1 ms-1">
        <a href="cart.html"><img style="width:80%;" src="https://github.com/adyasha9/medical-website-frontend/blob/master/lybrate-homepage/cart.png?raw=true" alt=""></a>
    </div>
</div>
<hr style="margin-top: 5px; margin-bottom: 0px;">`
}

export default topHeader;