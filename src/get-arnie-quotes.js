const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  return await Promise.all(
    urls.map(async (url) => {
      const response = await httpGet(url);
      if (response.status === 200) {
        return {
          "Arnie Quote": JSON.parse(response.body).message,
        };
      } else {
        return {
          FAILURE: JSON.parse(response.body).message,
        };
      }
    })
  );
};

module.exports = {
  getArnieQuotes,
};

// Previous solution
// for (index = 0; index < urls.length; index++) {
//   const response = await httpGet(urls[index]);
//   if (response.status === 200) {
//     results.push({
//       "Arnie Quote": JSON.parse(response.body).message,
//     });
//   } else {
//     results.push({
//       FAILURE: JSON.parse(response.body).message,
//     });
//   }
// }
// return new Promise(function (resolve, reject) {
//   resolve(results);
// });
