// const YOUR_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const YOUR_API_ENDPOINT = "http://localhost:8000/pizza/user";

export const PostApi = async (api, formDetails, bearerToken) => {
  //   console.log(formDetails);
  try {
    let token = bearerToken ? bearerToken : localStorage.getItem("AccessToken");
    const myHeaders = new Headers();

    // Set the content type to JSON
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    // Create request options
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
    };

    // If formDetails exist, convert it to JSON and set it as the request body
    if (formDetails) {
      const formDataJSON = {};
      formDetails.forEach((data) => {
        const { name, value } = data;
        formDataJSON[name] = value;
      });
      requestOptions.body = JSON.stringify( );
    }

    // Make the API request
    const response = await fetch(`${YOUR_API_ENDPOINT}${api}`, requestOptions);

    // Handle non-ok response
    if (!response.ok) {
      const data = await response.json();
      console.error(data);
      throw new Error(data.detail);
    }

    // Parse and return response data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { status: false, msg: error };
  }
};

// Example usage:
// const formDetails = [{ name: "email", value: email }, { name: "password", value: password }];
// const data = await PostApi("/login", formDetails);
