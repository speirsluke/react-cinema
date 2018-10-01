This app is a movie search engine. It has been created using HTML, React and CSS. The app has several functions, each of which have a different purpose.

The Search component displays the search bar and passes the search string to app on submit, which then updates the state and performs the fetch with the entered string.
Posters and titles

The PostersAndTitles component maps through the array of movies, and passes them to the Poster component, which then displays them.

The Details component fetches additional information and displays it when the 'more' button is clicked.

The youtube component was going to fetch the trailers for movies via the youtube api, however this could not be completed in time.

![screenshot of app](https://image.ibb.co/frM5eK/Screen_Shot_2018_10_01_at_08_42_21.png)
