import React, {useState} from 'react';
import { Image, ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


//Utilizziamo JsonPlaceHolder come mock API
const getMockWeatherData = (city) => {
  // Simuliamo dati meteo casuali
  const MockData = {
  temp: Math.floor(Math.random() * (30-10) + 10), //temper tra 10 e 30
  humidity: Math.floor(Math.random() * (100-40) + 40), //umidità tra 40 e 100%
  windspeed: Math.floor(Math.random() * (50-0) + 0), //vento tra 0 e 50
  condictions: ['Soleggiato', 'Piovoso', 'Nuvoloso', 'Nevoso'][Math.floor(Math.random() * 4)],
  immagine:''
  };
  
  //Simuliamo una chiamata asincrona
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(MockData);
    }, 2000); //Ritardo di 2 secondi per simulare una chiamata al servizio internet
  } );
};





export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    if(!city.trim()){
      Alert.alert('Errore','Per favore inserisci una città');
      return;
    }

    setLoading(true);
    setError(null);

    try{
      const data = await getMockWeatherData(city);
      setWeatherData(data);
    }catch {
      setError('Errore nel recupero dei dati');
      Alert.alert('Errore', 'Impossibile recuperare i dati meteo');
    }finally {
      setLoading(false);
    }
  };

  const WeatherInfo = ({data}) => {
    if(data.condictions=='Nuvoloso'){
      immagine = 'https://as1.ftcdn.net/jpg/00/50/17/80/1000_F_50178012_xpBUHaTK4QW4BRWaFXD4QI19K3GAzqcn.jpg';
    }else if(data.condictions=='Nevoso'){
      immagine = 'https://c8.alamy.com/compit/pe84yb/icona-meteo-neve-pe84yb.jpg';
    }else if(data.condictions=='Piovoso'){
      immagine = 'https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/xlarge/2015/03/61b19da99bcd6a1dd49dac11a8f9d4bf.png?w=480&h=382&gravity=auto&func=crop';
    }else{
      immagine = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZURIP_gSOUtMkTDMdxrN6moqfk7niI_fRw&s';
    }

    return(
      <View style={styles.weaterContainer}>
        <Text style = {styles.cityName}>{city}</Text>
        <Text style = {styles.temperature}>{data.temp} °C</Text>
        <Text style = {styles.description}>{data.condictions}</Text>
        <Image
          source={{uri:immagine}}
          style={{width: 200, height: 200}}
        />
        <View style = {styles.detailsContainer}>
          <Text style = {styles.details}>Umidità: {data.humidity} %</Text>
          <Text style = {styles.details}>Vento: {data.windspeed} km/h</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsione Meteo (DEMO)</Text>

      <View style= {styles.inputContainer}>
        <TextInput style={styles.inputContainer} placeholder = 'Inserisci una città' value={city} onChangeText={setCity}></TextInput>
        <TouchableOpacity style={styles.button} onPress={fetchWeatherData} disabled={loading}>
          <Text style={styles.buttonText}>CERCA</Text>
        </TouchableOpacity>

      </View>
      {loading && (<ActivityIndicator size="large" color='#0000ff' />)}

      {!loading && weatherData && (<WeatherInfo data={weatherData}/>)}

      {error && (
        <Text style={styles.error}> {error}</Text>
      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  weatherContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 15,
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

