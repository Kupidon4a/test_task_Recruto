const hello = document.getElementById("Hello");
const text = document.getElementById("text");

const getText = async (name, message) => {
  try {
    var url = `https://kupidon.pythonanywhere.com/?name=`;
    //var name = "Recruto";
    //var message = "Давай дружить";
    url = url + name + "&message=" + message;
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log("Возвращенные данные: ", responseData);
    console.log(responseData[0] + " --- " + responseData[1]);
    hello.textContent = hello.textContent + responseData[0];
    text.textContent = responseData[1] + '!';
    
  } catch (error){
      console.error('Error updating data:', error.message);
  }
};

var currentUrl = window.location.href;


if (currentUrl.includes("/?name=") && currentUrl.includes("&message=")) {
    var urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name').trim();
    const message = urlParams.get('message');
    getText(name, message);
    console.log("GET-запрос выполнен для адреса IP/?name=" + name + "&message=" + message);
} 
else {
    console.log("GET-запрос не выполнен, адрес не совпадает");
}
