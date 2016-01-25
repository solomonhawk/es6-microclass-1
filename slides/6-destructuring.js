// https://gist.github.com/getify/2328160ffd24270a742c
// http://www.2ality.com/2015/01/es6-destructuring.html

let milleniumFalcon = {
  shipClass: 'Light Freighter',
  maxSpeed: '1050',
  hyperdriveActive: false
}

let { shipClass, maxSpeed, hyperdriveActive } = milleniumFalcon

// The above is equivalent to ...

// var shipClass        = milleniumFalcon.shipClass
// var maxSpeed         = milleniumFalcon.maxSpeed
// var hyperdriveActive = milleniumFalcon.hyperdriveActive



let jedis = ['Luke Skywalker', 'Yoda']
let [luke, yoda] = jedis

// luke === 'Luke Skywalker'
// yoda === 'Yoda'


function respond({ type, payload }) {
  switch type {
    case 'ADD':
      let { id, data } = payload
      cache.set(id, data)
      break
    case 'REMOVE':
      let { id } = payload
      cache.delete(id)
      break
    case 'UPDATE':
      let { id, data } = payload
      cache.set(id, merge(cache.get(id), data))
      break
  }
}






let defaults = {
  options: {
    remove: true,
    enable: false,
    instance: {}
  },
  log: {
    warn: true,
    error: true
  }
}

let config = {
  options: {
    remove: false,
    instance: null
  }
}

// merge `defaults` into `config`

// destructure (with default value assignments)
let {
  options: {
    remove = defaults.options.remove,
    enable = defaults.options.enable,
    instance = defaults.options.instance
  } = {},
  log: {
    warn = defaults.log.warn,
    error = defaults.log.error
  } = {}
} = config

// restructure
config = {
  options: { remove, enable, instance },
  log: { warn, error }
}


console.log(config)

/*
  {
    options: {
      remove: false,
      enable: false,
      instance: null,
    },
    log: {
      warn: true,
      error: true
    }
  }
*/




function make({ type = 'box', size = 20, ...props }) {
  return new entities[type](props).setSize(20)
}
