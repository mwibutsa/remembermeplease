const myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-type', 'application/json');
const processQueries = (queries) => {
  let queryArray = [];
  queries = queries.forEach((queryString) => {
    const queryData = queryString.split('=');
    queryArray.push({ [queryData[0]]: queryData[1] });
  });

  const queryObject = queryArray.reduce((oneObject = {}, singleObject) => {
    oneObject = { ...oneObject, ...singleObject };
    return oneObject;
  });
  return queryObject;
};
const sendToGarage = document.querySelector('#sendGarage');
console.log(sendToGarage);
sendToGarage.addEventListener('click', (event) => {
  fetch('../events/garage', {
    method: 'POST',
    body: JSON.stringify({}),
    headers: myHeaders,
  })
    .then((result) => result.json())
    .then((res) => {
      if (res.message) {
        window.location.href = 'congratulations.html';
      }
    });
});
