function creatProductCard(productName, productDetail, price, imagePath) {
    let html = `
        <div class="card">
            <div class="card-img" style="background-image: url('${imagePath}');"></div>
            <div class="card-info">
                <p class="text-title">${productName}</p>
                <p class="text-body">${productDetail}</p>
            </div>
            <div class="card-footer">
                <span class="text-title">${price}</span>
                <div class="card-button">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path
                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                        </path>
                        <path
                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                        </path>
                        <path
                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>`;
    document.querySelector(".product").innerHTML += html;
}


creatProductCard("OJOS Headphone", "OJOS Silicone Case Cover Compatible with Apple AirPods Max New USB-C (2024)...", "₹1,099", "imagis/Untitled.png");
creatProductCard("Marshall Speaker", "Marshall Willen Portable Bluetooth Speaker with 15+ Hours of Portable Playtime...", " ₹8,499", "imagis/spicker.png");
creatProductCard("boAt Airdopes 91", "boAt Airdopes 91 w/ 45 Hours Playtime, Beast Mode w/ 50 ms Low Latency...", "₹899", "imagis/Airdopes.png");
creatProductCard("ZEBRONICS Havoc ", "ZEBRONICS Havoc Premium Gaming Over Ear Headphone with Dolby Atmos Subscription..", "₹1,799", "imagis/headphone2.png");
creatProductCard("MageGee Gaming Wired Keyboard", "MageGee Gaming Wired Keyboard and Mouse Combo...", " ₹2,244", "imagis/61C9qC9U+gL._SL1500_.jpg");
creatProductCard("MSI Raider GE68 HX", "MSI Raider GE68 HX, Intel 14th Gen. i9-14900HX, 41CM UHD+ MiniLED 120Hz Gaming Laptop..", " ₹3,48,290", "imagis/gaminglaptop.jpg");
creatProductCard("Cooling Pad with Dual USB Port", "Kreo Tundra 5 Fans RGB Laptop Cooling Pad with Dual USB Port...", " ₹1,998", "imagis/collingpaid.jpg");
creatProductCard(" Laptop Sleeve  ", "Dyazo Water Resistant Laptop Sleeve with Handle Compatible for 15 Inch...", "  ₹299", "imagis/laptopbag.jpg");E