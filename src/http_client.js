import https from "https";

const url = "https://eoe3c3tilcjfzoe.m.pipedream.net";
const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  function (response) {
    response.addListener("data", function (data) {
      console.log("Receive : " + data.toString());
    });
  }
);

const body = JSON.stringify({
  firstName: "febri",
  lastname: "anto",
});

request.write(body);
request.end();
