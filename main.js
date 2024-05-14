const hello = document.getElementById("Hello");
const text = document.getElementById("text");

const getText = async (data) => {
  try {
    const url = `https://kupidon.pythonanywhere.com`;
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
    console.log(responseData[1] + " --- " + responseData[2]);
    hello.textContent = hello.textContent + responseData[1];
    text.textContent = responseData[2] + '!';
    
  } catch (error){
      console.log("biba2");
      console.error('Error updating data:', error.message);
  }
};
getText();