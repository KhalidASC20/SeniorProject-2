document.addEventListener("DOMContentLoaded", function () {
    const foodResources = [
        { name: "Inn of the 7th Ray", location: "128 Old Topanga Canyon Rd, Topanga, CA 90290", phone: "(310) 455-1311", website: "https://www.innoftheseventhray.com/" },
        { name: "Tatsu Ramen", location: "2123 Sawtelle Blvd Los Angeles, CA 90025", phone: "(310) 684-2889", website: "https://tatsuramen.com/" },
        { name: "Madre", location: "10426 National Blvd, Los Angeles, CA 90034", phone: "(310) 559-4732", website: "https://madrerestaurants.com/" },
        { name: "Shake Shack (only for first responders, discount for evacuees)", location: "All LA", phone: "(213) 618-3241", website: "https://shakeshack.com/#/" },
        { name: "Fat Sal's Deli", location: "Multiple LA", phone: "(310) 452-3229", website: "https://www.fatsalsdeli.com/" },
        { name: "Crustacean", location: "468 N Bedford Dr, Beverly Hills, CA 90210", phone: "(310) 205-8990", website: "https://crustaceanbh.com/" },
        { name: "Lorenzo", location: "9529 S Santa Monica Blvd, Beverly Hills, CA 90210", phone: "(424) 332-2949", website: "https://lorenzocalifornia.com/" },
        { name: "Planta", location: "11754 San Vicente Blvd, Los Angeles, CA 90049 ", phone: "(925) 515-2984", website: "https://www.plantarestaurants.com/location/planta-brentwood/" },
        { name: "Bakers Bench (pay what you can)", location: "1021 Alpine St BLDG A, Los Angeles, CA 90012", phone: "", website: "https://bakersbenchla.com/" },
        { name: "Sonoritas Prime Tacos", location: "2004 Sawtelle Blvd, Los Angeles, CA 90025", phone: "(310) 444-9100", website: "https://www.sonoritastacos.com/" },
        { name: "Sora Craft Kitchen (free bowl - DM on Instagram in advance)", location: "1109 E 12th St, Los Angeles, CA 90021", phone: "(213) 537-0654", website: "https://soracraftkitchen.com/" },
        { name: "Zaya DTLA", location: "515 W 7th St, Los Angeles, CA 90014", phone: "(213) 567-4525", website: "https://www.zaya.la/" },
        { name: "Bar Etoile", location: "632 N Western Ave, Los Angeles, CA 90004", phone: "(323) 380-5040", website: "https://baretoile.com/" },
        { name: "Horses", location: "7617 W Sunset Blvd, Los Angeles, CA 90046", phone: "", website: "https://horsesla.com/" },
        { name: "Sugar Taco", location: "7257 Melrose Ave, Los Angeles, CA 90046", phone: "(310) 526-8004", website: "https://sugartaco.com/" },
        { name: "Zira Uzbek Kitchen", location: "422 Melrose Ave, Los Angeles, CA 90046", phone: "(213) 332-4086", website: "https://zirauzbekkitchen.com/" },
        { name: "Descanso Restaurant", location: "1555 Adams Ave #103, Costa Mesa, CA 92626", phone: "(714) 486-3798", website: "https://www.descansorestaurantla.com/" },
        { name: "Amiga Amore", location: "5668 York Blvd, Los Angeles, CA 90042", phone: "(323) 739-0894", website: "https://www.amigaamorela.com/" },
        { name: "Highly Likely", location: "4310 W Jefferson Blvd, Los Angeles, CA 90016", phone: "(310) 622-4550", website: "https://www.itshighlylikely.com/" },
        { name: "Sunday Gravy", location: "1122 Centinela Ave, Inglewood, CA 90302", phone: "(424) 227-6500", website: "https://www.eatsundaygravy.com/" },
        { name: "Alana's Coffee Roasters", location: "12511 Venice Blvd", phone: "(310) 295-0099", website: "https://shop.alanascoffeeroasters.com/" },
        { name: "Birriera San Marcos", location: "5937 Hazeltine Ave, Sherman Oaks, CA 91401", phone: "(818) 781-2368", website: "https://www.instagram.com/birrieriasanmarcos/?hl=en" },
        { name: "And Waffles", location: "4141 Lankershim Blvd, North Hollywood, CA 91602", phone: "(818) 853-7833", website: "https://andwaffles.com/" },
        { name: "The Rooster", location: "8809 W Pico Blvd, Los Angeles, CA 90035", phone: "(424) 278-1839", website: "https://www.roostereats.com/" },
        { name: "LaSorted's", location: "Silver Lake", phone: "", website: "" },
        { name: "Be U", location: "Silver Lake", phone: "", website: "" },
        { name: "Gokuku", location: "Studio City", phone: "", website: "" },
        { name: "Oy Bar", location: "Studio City", phone: "", website: "" },
        { name: "Heavy Handed", location: "Studio City/Santa Monica", phone: "", website: "" },
        { name: "Brooklyn Bagel (bagel/spread)", location: "Westlake", phone: "", website: "" },
        { name: "Danny Boy's Pizza", location: "Westwood/DTLA", phone: "", website: "" },
        { name: "House of Mandi", location: "Westwood", phone: "", website: "" },
        { name: "Pike Bar", location: "Long Beach", phone: "", website: "" },
        { name: "Dudleys Market", location: "Venice", phone: "", website: "" },
        { name: "Casa Vega", location: "Sherman Oaks", phone: "", website: "" },
        { name: "Calamigos Beach Club (free breakfast burrito)", location: "Malibu", phone: "", website: "" },
        { name: "Highland Park Brewery", location: "DTLA", phone: "", website: "" },
        { name: "Magic Castle", location: "Hollywood", phone: "", website: "" },
        { name: "Sizzler", location: "Van Nuys, Los Feliz, Palmdale, Culver City", phone: "", website: "" },
        { name: "Teleferic Barcelona (paella)", location: "Brentwood", phone: "", website: "" },
        { name: "Yang's Kitchen", location: "Alhambra", phone: "", website: "" },
        { name: "Harold's Chicken (2 meals per family)", location: "Culver City Westfield only", phone: "", website: "" },
        { name: "Bravo Toast (7am-3pm)", location: "WeHo/Silverlake", phone: "", website: "" },
        { name: "Planta (to-go only)", location: "Brentwood/MDR", phone: "", website: "" },
        { name: "Arth Bar", location: "Culver City", phone: "", website: "" },
        { name: "Star Leaf", location: "Pasadena", phone: "", website: "" },
        { name: "Detroit Pizza Depot", location: "Hollywood/DTLA", phone: "", website: "" },
        { name: "Jame (bowl of pasta)", location: "El Segundo", phone: "", website: "" },
        { name: "Tam O'Shanter (sandwich/soft drink)", location: "Atwater Village", phone: "", website: "" },
        { name: "Lawry's Prime Rib (bar seating only, prime rib sandwich or burger w/ drink)", location: "Beverly Hills", phone: "", website: "" },
        { name: "Burger 3000", location: "Chinatown", phone: "", website: "" },
        { name: "Fountain Grains and Greens (free soup)", location: "East Hollywood", phone: "", website: "" },
        { name: "Millcross Coffee (free coffee)", location: "Culver City", phone: "", website: "" },
        { name: "Milo & Olive (free coffee)", location: "Santa Monica", phone: "", website: "" },
        { name: "Otus Thai Kitchen (firefighters)", location: "WeHo", phone: "", website: "" },
        { name: "Pie Trap Pizza", location: "Covina", phone: "", website: "" },
        { name: "Sona Craft Kitchen (chicken bowls)", location: "", phone: "", website: "" },
        { name: "South Cafe LA (shelter, groceries, masks)", location: "", phone: "", website: "" },
        { name: "Shiku @ Grand Central Market", location: "DTLA", phone: "", website: "" },
        { name: "Steep LA", location: "Chinatown", phone: "", website: "" },
        { name: "Stereoscope (coffee & tea drinks)", location: "Echo Park, Hollywood", phone: "", website: "" }
    ];
   
    const foodBanks = [
        { name: "Los Angeles Regional Food Bank", location: "1734 E. 41st Street, Los Angeles, CA", phone: "(323) 234-3030", website: "https://www.lafoodbank.org/fire/" },
        { name: "Meet Each Need with Dignity (MEND)", location: "10641 N. San Fernando Rd, Pacoima, CA", phone: "(818) 896-0246", website: "https://www.mendpoverty.org/" },
        { name: "Dream Center", location: "2301 Bellevue Ave, Los Angeles, CA", phone: "(213) 273-7000", website: "https://www.dreamcenter.org/" },
        { name: "World Central Kitchen", location: "Various Locations", phone: "", website: "https://wck.org/" },
        { name: "YMCA of Metropolitan Los Angeles", location: "Multiple Locations", phone: "(213) 639-7400", website: "https://www.ymcala.org/" }
    ];

    function populateTable(data, tableId) {
        const tableBody = document.getElementById(tableId);
        data.forEach(resource => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${resource.name}</td>
                <td>${resource.location}</td>
                <td>${resource.phone || "N/A"}</td>
                <td>${resource.website ? `<a href="${resource.website}" target="_blank">Visit Website</a>` : "N/A"}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    populateTable(foodResources, "food-resources");
    populateTable(foodBanks, "food-banks");

});
