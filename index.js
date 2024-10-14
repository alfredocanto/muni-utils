/**
 * Validar CUIT (Código Único de Identificación Tributaria).
 * 
 * @param {string} cuit - CUIT 
 * @param {boolean} [guiones=false] - Contiene guiones.
 * @returns {boolean}  true / false
 * @example
 * validateCUIT('20-12345678-9', true);
 * // returns true
 * 
 * @example
 * validateCUIT('20123456789'); 
 * // returns true
 * 
 */
exports.validateCUIT = (cuit, guiones = false) => {
    let re;
    if (guiones) {
        re = /^\d{2}\-\d{8}\-\d{1}$/;
    } else {
        re = /^\d{11}$/;
    }
    return re.test(String(cuit));
}

/**
 * @param {string} email 
 * @returns {boolean} true / false
 * 
 * @example
 * validateEmail('test@mail.com');
 * // returns true
 * 
 * @example
 * validateEmail('testmail.com');
 * // returns false
 */
exports.validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Formatear fecha a 'dd/mm/yyyy' o 'dd/mm/yyyy hh:mm'
 * 
 * @param {Date} date 
 * @param {boolean} withHours 
 * @returns {string}
 * 
 * @example
 * formatDate(new Date());
 * // returns 'dd/mm/yyyy'
 * 
 * @example
 * formatDate(new Date(), true);
 * // returns 'dd/mm/yyyy hh:mm'
 */
exports.formatDate = (date, withHours = false)  => {
    let f = new Date(date)
    if (!f instanceof Date || isNaN(f.getTime())) return "Invalid Date"

    let a = f.toISOString()
    let str = a.substring(8, 10) + "/" + a.substring(5, 7) + "/" + a.substring(0, 4)
    if (withHours) str += " " + a.substring(11, 16)

    return str;
}


/**
 * Formatea un valor numérico a moneda con 2 puntos de precision.
 * @param {any} input 
 * @returns {string}
 * @example
 * formatMoney(1234.56);
 * // returns '1.234,56'
 * 
 */
exports.formatMoney = (input) => {
    let strInput = String(input).replace(',', '.');
    let number = parseFloat(strInput);
    if (isNaN(number)) {return 'NaN';}
    let formato = Intl.NumberFormat('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2});
    return formato.format(number);
}

/**
 * Devuelve el día de la semana.
 * @param {Date} date 
 * @returns {string}
 * @example
 * getWeekDay(new Date());
 * // returns 'Domingo'
 */
exports.getWeekDay = (date) => {
    const daysOfWeek = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ]
    return daysOfWeek[date.getUTCDay()]
  }
  
/**
 * Capitaliza un string.
 * @param {string} str 
 * @returns {string}
 * @example
 * capitalize('hola');
 * // returns 'Hola'
 */
exports.capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}


/**
 * Genera un numero aleatorio.
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */ 
exports.randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pausa la ejecucion 
 * @param {ms} duration 
 * @returns 
 */
exports.sleep = (duration) => {
    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
}

/**
 * Groups an array of objects by a specified key.
 * 
 * @param {Array<Object>} array - The array of objects to group.
 * @param {string} key - The key to group the objects by.
 * @returns {Object} An object where the keys are the values of the specified key in the objects, 
 * and the values are arrays of objects that have that key value.
 * 
 * @example
 * const data = [
 *   { category: 'fruit', name: 'apple' },
 *   { category: 'fruit', name: 'banana' },
 *   { category: 'vegetable', name: 'carrot' }
 * ];
 * 
 * const groupedData = groupBy(data, 'category');
 * // groupedData will be:
 * // {
 * //   fruit: [
 * //     { category: 'fruit', name: 'apple' },
 * //     { category: 'fruit', name: 'banana' }
 * //   ],
 * //   vegetable: [
 * //     { category: 'vegetable', name: 'carrot' }
 * //   ]
 * // }
 */
exports.groupBy = (array, key) => {
    return array.reduce((group, element) => {
        const keyValue = element[key];
        return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
    }, {});
}

/**
 * Limita la frecuencia de ejecución de una función.
* Comunmente se usa para limintar llamadas a la API
 * @param {Function} func 
 * @param {number} wait 
 * @returns {Function}
 * @example 
 * const debounced = debounce(() => console.log('Hello World'), 1000);
 * debounced();
 */
exports.debounce = (func, wait) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Limita la frecuencia de ejecución de una función, garantizando la ejecución periódica.
 * @param {Function} func 
 * @param {number} limit 
 * @returns {Function}
 * @example
 * const throttled = throttle(() => console.log('Hello World'), 1000);
 * throttled();
 */
exports.throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}