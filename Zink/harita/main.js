var isShown = false;
var isParksShown = false;
var isRestaurantsShown = false;
var isPharmaciesShown = false;
var isHotelsShown = false;
var isVisitsShown = false;
var isLibrariesShown = false;
var isMarketsShown = false;
var isCafesShown = false;
var isOilsShown = false;
const parks = [
    {
        X: 125,
        Y: 800
    },
    {
        X: 360,
        Y: 260
    },
    {
        X: 1000,
        Y: 170
    },
    {
        X: 910,
        Y: 630
    },
    {
        X: 730,
        Y: 630
    }
];
const restaurants = [
    {
        X: 120,
        Y: 540
    },
    {
        X: 100,
        Y: 460
    },
    {
        X: 410,
        Y: 400
    },
    {
        X: 410,
        Y: 470
    },
    {
        X: 436,
        Y: 160
    },
    {
        X: 820,
        Y: 600
    },
];
const pharmacies = [
    {
        X: 150,
        Y: 100
    },
    {
        X: 200,
        Y: 100
    },
    {
        X: 1550,
        Y: 220
    }
];
const hotels = [
    {
        X: 1310,
        Y: 500
    },
    {
        X: 1320,
        Y: 590
    }
];
const visits = [
    {
        X: 140,
        Y: 740
    },
    {
        X: 480,
        Y: 500
    }
];
const libraries = [
    {
        X: 1170,
        Y: 600
    }
];
const markets = [
    {
        X: 150,
        Y: 110
    },
    {
        X: 200,
        Y: 110
    },
    {
        X: 400,
        Y: 290
    },
    {
        X: 550,
        Y: 270
    },
    {
        X: 1410,
        Y: 400
    },
    {
        X: 1520,
        Y: 720
    },
    {
        X: 670,
        Y: 710
    },
    {
        X: 1090,
        Y: 130
    }
];
const cafes = [
    {
        X: 270,
        Y: 760
    },
    {
        X: 285,
        Y: 170
    },
    {
        X: 285,
        Y: 220
    },
    {
        X: 990,
        Y: 230
    },
    {
        X: 840,
        Y: 660
    }
];
const oils = [
    {
        X: 370,
        Y: 740
    },
    {
        X: 280,
        Y: 90
    },
    {
        X: 1090,
        Y: 490
    }
];

window.onload = () => {
    SpawnActor(550, 690, "people.svg", "konum")
}

function removeAll(customClass) {
    if (customClass)
        document.querySelectorAll("." + customClass).forEach(e => e.remove());
    else
        document.querySelectorAll(".icon").forEach(e => e.remove());
}

function buttonPress(data, addme) {
    switch (data) {
        case parks:
            if (isParksShown == true) {
                removeAll("parkI")
                addme.classList.remove("active");
                isParksShown = false;
            } else {
                loadData(data, "park.svg", "parkI");
                addme.classList.add("active");
                isParksShown = true;
            }

            break;
        case restaurants:
            if (isRestaurantsShown == true) {
                removeAll("restI")
                addme.classList.remove("active");
                isRestaurantsShown = false;
            } else {
                loadData(data, "restaurant.svg", "restI");
                addme.classList.add("active");
                isRestaurantsShown = true;
            }
            break;
        case pharmacies:
            if (isPharmaciesShown == true) {
                removeAll("pharI")
                addme.classList.remove("active");
                isPharmaciesShown = false;
            } else {
                loadData(data, "pharmacy.svg", "pharI");
                addme.classList.add("active");
                isPharmaciesShown = true;
            }
            break;
        case hotels:
            if (isHotelsShown == true) {
                removeAll("hotelI")
                addme.classList.remove("active");
                isHotelsShown = false;
            } else {
                loadData(data, "hotel.svg", "hotelI");
                addme.classList.add("active");
                isHotelsShown = true;
            }

            break;
        case visits:
            if (isVisitsShown == true) {
                removeAll("visitI")
                addme.classList.remove("active");
                isVisitsShown = false;
            } else {
                loadData(data, "visit.svg", "visitI");
                addme.classList.add("active");
                isVisitsShown = true;
            }
            break;
        case libraries:
            if (isLibrariesShown == true) {
                removeAll("libI")
                addme.classList.remove("active");
                isLibrariesShown = false;
            } else {
                loadData(data, "library.svg", "libI");
                addme.classList.add("active");
                isLibrariesShown = true;
            }
            break;
        case markets:
            if (isMarketsShown == true) {
                removeAll("marketI")
                addme.classList.remove("active");
                isMarketsShown = false;
            } else {
                loadData(data, "market.svg", "marketI");
                addme.classList.add("active");
                isMarketsShown = true;
            }
            break;
        case cafes:
            if (isCafesShown == true) {
                removeAll("cafeI")
                addme.classList.remove("active");
                isCafesShown = false;
            } else {
                loadData(data, "cafe.svg", "cafeI");
                addme.classList.add("active");
                isCafesShown = true;
            }
            break;
        case oils:
            if (isOilsShown == true) {
                removeAll("oilI")
                addme.classList.remove("active");
                isOilsShown = false;
            } else {
                loadData(data, "oil.svg", "oilI");
                addme.classList.add("active");
                isOilsShown = true;
            }
            break;
        default:
            if (isShown == true) {
                removeAll("pinI")
                addme.classList.remove("active");
                isShown = false;
            } else {
                loadData(data, "pin.svg", "pinI");
                addme.classList.add("active");
                isShown = true;
            }
            break;
    }

}

function loadData(data, src, customClass) {
    data.forEach(el => {
        SpawnActor(el.X, el.Y, src, customClass)
    });
}

function SpawnActor(X, Y, src, customClass) {
    const el = document.createElement("img");
    el.src = "./icons/" + src;
    el.classList.add("icon");
    if (customClass)
        el.classList.add(customClass);
    //el.style.top = Y + "px";
    el.style.left = X + "px";
    var time = 100, eod = 102;
    setTimeout(() => {
        el.style.top = (Y - 10) + "px";


        setTimeout(() => {
            el.style.top = Y + "px";
            el.style.opacity = "100%";
        }, 102);
    }, time);
    document.body.appendChild(el);
}
