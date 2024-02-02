export interface weatherDataType {
    location: {
      name: string;
      region: string;
      country: string;  
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      last_updated_epoch: number;
      last_updated: string;
      temp_c: number;
      temp_f: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      wind_mph: number;
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      precip_in: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      feelslike_f: number;
      vis_km: number;
      vis_miles: number;
      uv: number;
      gust_mph: number;
      gust_kph: number;
    };
  }
  
 export const weatherData: weatherDataType = {
    location: {
      name: "Kedarnath",
      region: "Uttarakhand",
      country: "India",
      lat: 30.73,
      lon: 79.07,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1706645097,
      localtime: "2024-01-31 1:34"
    },
    current: {
      last_updated_epoch: 1706644800,
      last_updated: "2024-01-31 01:30",
      temp_c: -12.2,
      temp_f: 10.1,
      is_day: 0,
      condition: {
        text: "Clear ",
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        code: 1000
      },
      wind_mph: 13.2,
      wind_kph: 21.2,
      wind_degree: 16,
      wind_dir: "NNE",
      pressure_mb: 1028,
      pressure_in: 30.36,
      precip_mm: 0,
      precip_in: 0,
      humidity: 66,
      cloud: 13,
      feelslike_c: -20.8,
      feelslike_f: -5.5,
      vis_km: 10,
      vis_miles: 6,
      uv: 1,
      gust_mph: 21.3,
      gust_kph: 34.2
    }
  };
  