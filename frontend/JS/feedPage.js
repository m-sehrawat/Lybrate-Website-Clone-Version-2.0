
// Navigation bar section
async function bottomNavbar() {
    return `<div class="row upperBox shadow">
    <!-- About -->
    <div class="col border hoverEffect">
        <a class="text-decoration-none hoverEffect" href="aboutPage.html">
            <div class="row">
                <div class="col-3 offset-3">
                    <img class="img-fluid icon-width offset-7" src="https://assets.lybrate.com/imgs/product/icons/ic_all_64.png" alt="">
                </div>
                <div class="col">
                    <p class="my-3">About</p>
                </div>
            </div>
        </a>
    </div>
    <!-- Health Feed -->
    <div class="col border hoverEffect">
        <a class="text-decoration-none hoverEffect" href="healthFeed.html">
            <div class="row">
                <div class="col-3 offset-2">
                    <img class="img-fluid icon-width offset-7" src="https://assets.lybrate.com/imgs/product/icons/ic_tips_64.png" alt="">
                </div>
                <div class="col">
                    <p class="my-3">Health Feed</p>
                </div>
            </div>
        </a>
    </div>
    <!-- Find Doctors -->
    <div class="col border hoverEffect">
        <a class="text-decoration-none hoverEffect" href="findDoctors.html">
            <div class="row">
                <div class="col-3 offset-2">
                    <img class="img-fluid icon-width offset-7" src="https://assets.lybrate.com/imgs/product/icons/ic-doctor-64x64.png" alt="">
                </div>
                <div class="col">
                    <p class="my-3">Find Doctors</p>
                </div>
            </div>
        </a>
    </div>
    <!-- Health Packages -->
    <div class="col border hoverEffect">
        <a class="text-decoration-none hoverEffect" href="healthPackages.html">
            <div class="row">
                <div class="col-3 offset-1">
                    <img class="img-fluid icon-width offset-7" src="https://assets.lybrate.com/imgs/product/icons/ic-condition-64x64.png" alt="">
                </div>
                <div class="col">
                    <p class="my-3">Health Packages</p>
                </div>
            </div>
        </a>
    </div>
</div>`
}


// Book Appointment Section
async function appointmentSection() {
    return `<!-- Book Appointment Box -->
<div class="row ms-2">
    <div style="background-color: white;" class="col-12 border border-danger mb-2">
        <div class="row">
            <div class="col-2">
                <img class="img-fluid mt-3" src="https://assets.lybrate.com/q_auto,f_auto/imgs/product/widget/appointment/doctor_icon.png">
            </div>
            <div class="col">
                <h6 class="fw-bold pt-3">Book appointment with top doctors for Depression treatment</h6>
                <small class="text-muted ">View fees, clinic timings and reviews</small>
                <button class="btn btn-outline-danger fw-bold p-2 rounded-0 offset-2 mt-2 mb-3">Book Appointment</button>
            </div>
        </div>
    </div>
    <!-- Input Text Box -->
    <div style="background-color: white;" class="col-12 border border-danger mb-2">
        <div class="row">
            <div class="col-2">
                <img class="img-fluid mt-3" src="https://assets.lybrate.com/q_auto,f_auto/imgs/product/widget/appointment/doctor_icon.png">
            </div>
            <div class="col mb-2">
                <h6 class="fw-bold pt-3">Ask a FREE Question</h6>
                <small class="text-muted ">Get FREE multiple opinions from Doctors</small>
            </div>
        </div>
        <div>
            <textarea placeholder="Enter question for you or someone else E.g. my left eye is red and swollen" style="width: 350px; height: 120px;"></textarea>
            <button class="btn btn-danger py-1 px-3 rounded-0 offset-9 mb-3">Submit</button>
        </div>
    </div>
    <!-- Image -->
    <div class="col-12 p-0">
        <img class="img-fluid" style="width: 100%;" src="https://assets.lybrate.com/q_auto,f_auto/rio/800x800/Lybrate_Covid-Care_Banner_320x235_18-05-2021.jpg">
    </div>
</div>`
}

// Gold Membership Div
async function showGoldMembership(){
    return `<a class="text-decoration-none text-dark" href="goldmembership.html">
        <div class="row">
            <div class="col-2">
                <img class="img-fluid" src="https://assets.lybrate.com/swan/patmem/LybrateGold_Color.png">
            </div>
            <div class="col">
                <h6 class="fw-bold mt-4">Lybrate gold</h6>
                <p>Become a member today and enjoy limitless health privileges, Good health made easy!</p>
            </div>
        </div>
    </a>`
}

// Exporting functions
export { bottomNavbar, appointmentSection, showGoldMembership }