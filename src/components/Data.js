import aboutImage from "../images/undraw_progressive_app_m-9-ms.svg";
import discoverImage from "../images/undraw_searching_p-5-ux.svg";
import signUpImage from "../images/undraw_personal_website_re_c8dv.svg";

export const about = {
  id: "about",
  containerId: "about-container",
  buttonLabel: "Discover",
  description:
    "As you may have noticed, dabank isn't like a typical bank. For one thing, we don’t have expensive brick-and-mortar branches, which means we can pass those savings on to you. One way we do this is by paying you more interest on your money without charging you unfair fees. But that's just the start.",
  dark: true,
  darkText: false,
  headline: "Digital Bank",
  img: aboutImage,
  imgStart: false,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  primary: true,
  to: "discover",
  topLine: "About Us",
};

export const discover = {
  id: "discover",
  containerId: "discover-container",
  buttonLabel: "Sign Up",
  description:
    "Life is busy and complicated enough, right? No one wants their banking to be one more complicated thing to worry about. Your money should work as hard as you do, and you shouldn’t have to work hard to make that happen. It’s why we make it simple to save, simple to understand, and simple to do all of your everyday banking with us.",
  dark: true,
  darkText: true,
  headline: "Looking for a Sweet Deal?",
  img: discoverImage,
  imgStart: false,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  primary: false,
  to: "sign-up",
  topLine: "Discover",
};

export const signup = {
  id: "sign-up",
  containerId: "sign-up-container",
  buttonLabel: "Get Started",
  description:
    "We’re committed to helping customers live better lives. It’s why we come in to work each and every day. And it’s our purpose for delivering forward banking to everyone. We can only do this by making some important promises, and more importantly, by keeping them!",
  dark: false,
  darkText: true,
  headline: "Dive into Digital",
  img: signUpImage,
  imgStart: true,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  primary: false,
  to: "sign-up",
  topLine: "Sign Up",
};
