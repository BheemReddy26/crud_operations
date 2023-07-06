const ValidateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return ('Please enter a valid email address');
    } else {
      return ('');
    }
  }

  export default ValidateEmail




