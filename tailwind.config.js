/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1E90FF",
        secondaryColor: "#1A7AC0", 
        accentColor: "#FFD700",
        backgroundColor:'#f8f9fa' ,
           textColor: {
          DEFAULT: "#404040", 
          heading: "#1A1A1A", 
          paragraph: "#595959",
        },
      },
      boxShadow: {
        company: "2px -4px 25px 0px #f1f1fd",
        drop: "2px -4px 10px 0px #f1f1fd",
      },
    },
  },
  plugins: [],
};
