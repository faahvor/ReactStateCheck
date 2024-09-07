import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state with a person object and a boolean for toggling visibility
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer with a love for creating dynamic user experiences.",
        imgSrc: "https://res.cloudinary.com/dsjsvmug6/image/upload/v1725695612/Screenshot_2024-09-07_084857-removebg-preview_lfwjse.png",
        profession: "Software Developer",
      },
      shows: false,
      mountedTime: 0, // Tracks the time interval since the component was mounted
    };
  }

  componentDidMount() {
    // Set up a timer to track the interval since the component was mounted
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted to avoid memory leaks
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    // Toggle the 'shows' state to show/hide the profile
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;
    return (
      <div className="flex flex-col items-center mt-10 space-y-4">
        <button
          onClick={this.toggleProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">{person.fullName}</h2>
            <p className="text-gray-600 mt-2">{person.bio}</p>
            <h4 className="text-xl font-bold text-blue-600 mt-4">
              {person.profession}
            </h4>
          </div>
        )}

        <p className="text-gray-600 mt-6">
          Time since component mounted: {mountedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;
