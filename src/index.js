// Here is your key: 67410f38

// Please append it to all of your API requests,

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=67410f38

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=de1bcb89-7927-441c-a94e-53a315b343c7
// If you did not make this request, please disregard this email.

const fetchData = async searchTerm => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "67410f38",
        s: searchTerm
      }
    });
  
    console.log(response.data);
  };
  
  const input = document.querySelector("input");
  
  const onInput = event => {
    fetchData(event.target.value);
    console.log(event.target.value); // equals 'args[0].target.value' - ^^^^ ABOVE ^^^^ -
  };
  
  input.addEventListener("input", deBounce(onInput, 1500));
  