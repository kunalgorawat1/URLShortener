import axios from "axios";

export const getShortenedURL = async (laregeURL) => {
  const encodedParams = new URLSearchParams();
  console.log("API", typeof laregeURL);
  encodedParams.set("url", laregeURL);

  const options = {
    method: "POST",
    url: "https://url-shortener-service.p.rapidapi.com/shorten",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "011b686f1fmshc26ce58308df7acp1298a4jsnfb9b57b5b659",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    data: encodedParams,
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
