function myFunction() {
    const x = document.querySelector("#myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


