import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
    render() {
        return (
        <ScrollView>
                <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"}
                poster={require("./img/doctor-sleep.jpg")}/>
                <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"green"}
                       poster={require("./img/midway.jpg")}/>
                <Movie title={"The Dark Knight"} year={2008} icon_name={"cat"} icon_color={"red"}
                       poster={{uri:"https://i.pinimg.com/736x/b4/22/37/b42237eb02a184ae56d6cb5cfdfaa9e0.jpg"}} />
        </ScrollView>
        );
    };
};

export default AllMovies;