


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  window.onload = document.getElementById("defaultOpen").click();

//   var data = [
//     {
//       "name": "Canada",
//       "iso3": "CAN",
//       "iso2": "CA",
//       "phone_code": "1",
//       "capital": "Ottawa",
//       "currency": "CAD",
//       "states": [
//           "Alberta",
//           "British Columbia",
//           "Manitoba",
//           "New Brunswick",
//           "Newfoundland and Labrador",
//           "Northwest Territories",
//           "Nova Scotia",
//           "Nunavut",
//           "Ontario",
//           "Prince Edward Island",
//           "Quebec",
//           "Saskatchewan",
//           "Yukon"
//       ]
//   },
//   {
//     "name": "United States",
//     "iso3": "USA",
//     "iso2": "US",
//     "phone_code": "1",
//     "capital": "Washington",
//     "currency": "USD",
//     "states": [
//         "Alabama",
//         "Alaska",
//         "American Samoa",
//         "Arizona",
//         "Arkansas",
//         "Baker Island",
//         "California",
//         "Colorado",
//         "Connecticut",
//         "Delaware",
//         "District of Columbia",
//         "Florida",
//         "Georgia",
//         "Guam",
//         "Hawaii",
//         "Howland Island",
//         "Idaho",
//         "Illinois",
//         "Indiana",
//         "Iowa",
//         "Jarvis Island",
//         "Johnston Atoll",
//         "Kansas",
//         "Kentucky",
//         "Kingman Reef",
//         "Louisiana",
//         "Maine",
//         "Maryland",
//         "Massachusetts",
//         "Michigan",
//         "Midway Atoll",
//         "Minnesota",
//         "Mississippi",
//         "Missouri",
//         "Montana",
//         "Navassa Island",
//         "Nebraska",
//         "Nevada",
//         "New Hampshire",
//         "New Jersey",
//         "New Mexico",
//         "New York",
//         "North Carolina",
//         "North Dakota",
//         "Northern Mariana Islands",
//         "Ohio",
//         "Oklahoma",
//         "Oregon",
//         "Palmyra Atoll",
//         "Pennsylvania",
//         "Puerto Rico",
//         "Rhode Island",
//         "South Carolina",
//         "South Dakota",
//         "Tennessee",
//         "Texas",
//         "United States Minor Outlying Islands",
//         "United States Virgin Islands",
//         "Utah",
//         "Vermont",
//         "Virginia",
//         "Wake Island",
//         "Washington",
//         "West Virginia",
//         "Wisconsin",
//         "Wyoming"
//     ]
//   }
// ]
//  function dataPull() {
//     // var CountryData = data.parse(data);
//     console.log(data); 
//   }
