import Footer from "./components/Footer";
import  GoogleLogin  from "react-google-login";
import axios from 'axios'

function App() {

  const responseSuccessGoogle = (response) => {
    console.log(response)
    axios({
      method: "POST",
      url: 'http://localhost:4000/api/googlelogin',
      data: {tokenId: response.tokenId}
    })
  }

  const responseErrorGoogle = (response) => {

  }


  return (
    <div className="App">
      <h1>Page Is Working</h1>
      <GoogleLogin
        clientId="329970603963-p4v6ssajruq344qv6tij4bvptdkuqkcj.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <Footer />
    </div>
  );
}

export default App;
