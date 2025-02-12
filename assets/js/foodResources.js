document.addEventListener("DOMContentLoaded", function () {
   const foodResources = [
       { name: "Inn of the 7th Ray", location: "Topanga", phone: "", website: "" },
       { name: "Tatsu Ramen", location: "All LA", phone: "", website: "" },
       { name: "Madre", location: "All LA", phone: "", website: "" },
       { name: "Shake Shack (only for first responders, discount for evacuees)", location: "All LA", phone: "", website: "" },
       { name: "Fat Sal's Deli", location: "Multiple LA", phone: "", website: "" },
       { name: "Crustacean", location: "Beverly Hills", phone: "", website: "" },
       { name: "Lorenzo", location: "Beverly Hills", phone: "", website: "" },
       { name: "Planta", location: "Brentwood/MDR", phone: "", website: "" },
       { name: "Bakers Bench (pay what you can)", location: "Chinatown", phone: "", website: "" },
       { name: "Sonoritas Prime Tacos", location: "DTLA/West LA", phone: "", website: "" },
       { name: "Sora Craft Kitchen (free bowl - DM on Instagram in advance)", location: "DTLA", phone: "", website: "" },
       { name: "Zaya DTLA", location: "DTLA", phone: "", website: "" },
       { name: "Bar Etoile", location: "East Hollywood", phone: "", website: "" },
       { name: "Horses on Sunset", location: "Hollywood", phone: "", website: "" },
       { name: "Sugar Taco", location: "Fairfax", phone: "", website: "" },
       { name: "Zira Uzbek Kitchen", location: "Fairfax", phone: "", website: "" },
       { name: "Descanso Restaurant", location: "Fairfax", phone: "", website: "" },
       { name: "Amiga Amore", location: "Highland Park", phone: "", website: "" },
       { name: "Highly Likely", location: "Highland Park/West Adams", phone: "", website: "" },
       { name: "Sunday Gravy", location: "Inglewood", phone: "", website: "" },
       { name: "Alana's Coffee Roasters", location: "WeHo/Mar Vista", phone: "", website: "" },
       { name: "Birriera San Marcos", location: "North Hollywood", phone: "", website: "" },
       { name: "And Waffles", location: "North Hollywood/Woodland Hills", phone: "", website: "" },
       { name: "The Rooster", location: "Pico Robertson", phone: "", website: "" },
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
       { name: "Magic Castle (Tue Jan 14th only)", location: "Hollywood", phone: "", website: "" },
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

   const tableBody = document.getElementById("food-resources");

   foodResources.forEach(resource => {
       const row = document.createElement("tr");
       row.innerHTML = `
           <td>${resource.name}</td>
           <td>${resource.location}</td>
           <td>${resource.phone || "N/A"}</td>
           <td>${resource.website ? `<a href="${resource.website}" target="_blank">Visit Website</a>` : "N/A"}</td>
       `;
       tableBody.appendChild(row);
   });
});
