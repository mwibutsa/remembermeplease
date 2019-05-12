const saveDraft = document.querySelector('#saveDraft');
const sendNow = document.querySelector('#sendNow');
const messageText = document.querySelector('#message');
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
const handleClick = (draft = '') => (event) => {
  event.preventDefault();
  const queries = processQueries(
    window.location.search.replace('?', '').split('&')
  );
  fetch(`../events/${queries.id}/send-message${draft}`, {
    method: 'POST',
    body: JSON.stringify({ content: messageText.value }),
    headers: myHeaders,
  })
    .then((result) => {
      if (result) {
        window.location = 'congratulations.html';
      }
    })
    .catch((err) => console.log(err));
};
const loadMessage = () => {
  const messageText = document.querySelector('#message');
  const queries = processQueries();
  fetch(`../events/${queries.id}/message`, {
    method: 'GET',
    headers: myHeaders,
  })
    .then((message) => {
      if (message) {
        messageText.value = message.content;
      }
    })
    .catch((err) => console.log(err));
};
saveDraft.addEventListener('click', handleClick('?draft=true'));
sendNow.addEventListener('click', handleClick(''));
