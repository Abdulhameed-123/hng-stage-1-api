import AppError from "../../common/utils/appError.js";
import { catchAsync } from "../../common/utils/errorHandler.js";
import geoip from 'geoip-lite'
import axios from 'axios'
import { ENVIRONMENT } from '../../common/config/environment.js'

const getUserIp = (req) => {
    const remoteAddress = req.ip
    let ipAddress

    if (remoteAddress) {
        if (remoteAddress.includes(':')) {
            ipAddress = remoteAddress.replace('[', '').replace(']', '')
        } else {
            ipAddress = remoteAddress
        }
    }

    return ipAddress ?? ''
}


const getGeoLocation = async (ip) => {
   const geo = await geoip.lookup('102.89.47.144') // 1000 : remove when deploying

   console.log('geo', geo)

   if (!geo) {
    throw new AppError(`Unable to get user's data`, 400)
   }

  const { data } = await axios.get(`http://ipwho.is/${ip}`)

  if(!data) {
    throw new AppError('Unable to get user IP', 400)
  }

  const { city, region, country } = data

  return {
      city,
      region,
      country,
  }
}

const getTemperatureInCelsius = async (city) => {
  try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${ENVIRONMENT.OPEN_WEATHER.API_KEY}&q=${city}&aqi=no`
      )

      console.log('res axios', res?.data)

      if (!res?.status === 200 || !res?.data?.current?.temp_c) {
          throw new AppError(
              'Sorry we are having network issue , please try again',
              400
          )
      }

      return res.data.current.temp_c
  } catch (error) {
      throw new AppError(
          'Sorry we are having network issue , please try again',
          400
      )
  }
}

export const getHello = catchAsync(async (req, res) => {
  const { visitor_name } = req.query

  const ip = getUserIp(req)
  const { city } = await getGeoLocation(ip)
  const temperature = await getTemperatureInCelsius(city)

  let requesterCity = city ?? 'New York'


  if (!ip) {
    throw new AppError('Unable to get user IP', 400)
  }

  
  const data = {
    client_ip: ip, // The IP address of the requester
    location: requesterCity, // The city of the requester
    greeting: `Hello, ${visitor_name ?? 'Visitor'}!, the temperature is ${temperature} degrees Celsius in ${requesterCity}`,
}

  return res.status(200).json(data);
})