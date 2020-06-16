var unirest = require("unirest");

var req = unirest(
  "GET",
  "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01"
);

req.query({
  inboundpartialdate: "2019-12-01",
});

req.headers({
  "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
  "x-rapidapi-key": "3e75205a1amsh6ddc480a90bc50ep19b0cfjsnd6192a0eabe9",
  useQueryString: true,
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
