// import React, { Component } from "react";
// import axios from "axios";
// import Logo from "../../images/logo.png";

// class ShowUser extends Component {
//   constructor(props) {
//     super(props);


//     this.state = {
    
//       username: "",
//       email: "",
//       goal: "",
//       password: ""
//     }
//   }
//   const user = {
//       username: this.state.username,
//       email: this.state.email,
//       goal: this.state.goal,
//       password: this.state.password,
//     };

//     console.log(user);

//     axios
//       .post("http://localhost:4000/api/users/add", user)
//       .then((res) => console.log(res.data))
//       .catch((error) => console.log(error));

//     this.setState({
//       username: "",
//       email: "",
//       goal: "",
//       password: "",
//     });
//     // add an onSuccess redirect to home
  

//   render() {
//     return (
//       <div>
//         <h3>Create New User</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <input
//               placeholder="Create a username"
//               type="text"
//               required
//               className="form-control"
//               value={this.state.username}
//               onChange={this.onChangeUsername}
//             />
//             <input
//               placeholder="Enter Email..."
//               type="text"
//               required
//               className="form-control"
//               value={this.state.email}
//               onChange={this.onChangeEmail}
//             />
//             <input
//               placeholder="What's Your Goal"
//               type="text"
//               className="form-control"
//               value={this.state.goal}
//               onChange={this.onChangeGoal}
//             />
//             <input
//               placeholder="Enter a password"
//               type="password"
//               className="form-control"
//               value={this.state.password}
//               onChange={this.onChangePassword}
//             />
//             <input
//               type="submit"
//               value="Create User"
//               className="btn btn-primary"
//             />
//           </div>
//           <div>
//             <img className="landlogo1" src={Logo} alt="Logo" />
//             <br />
//             <p className="landp1">The Ultimate Workout Partner</p>
//           </div>
//         </form>
//       </div>
//     );
//   }

// export default NewUser;