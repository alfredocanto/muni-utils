### Utils
Paquete de funciones utilitarias comunes a muchos proyectos.
  
- [validateCUIT()](#validatecuitstring-guiones)
- [validateEmail()](#validateemailstring)
- [formatFecha()](#formatfechadate-withhours)
- [formatMoney()](#formatmoneyany)
- [getWeekDay()](#getweekdaydate)
- [capitalize()](#capitalizestring)
- [randomNumber()](#randomnumbermin-max)
- [sleep()](#sleepduration)
- [groupBy()](#groupbyarray-key)

## validateCUIT(``string``, ``guiones``)  
```javascript
validateCUIT('20456178556') 
// returns true

validateCUIT('20-12345678-9', true);
// returns true

validateCUIT('20-123456AA');
// returns false
```

## validateEmail(``string``)  
```javascript
validateEmail('test@mail.com');
// returns true

validateEmail('testmail.com');
// returns false
```


## formatFecha(``date``, ``withHours``)  
```javascript
Formatea fecha a 'dd/mm/yyyy' o 'dd/mm/yyyy hh:mm'

formatDate(new Date());
// returns 'dd/mm/yyyy'

formatDate(new Date(), true);
// returns 'dd/mm/yyyy hh:mm'

```

## formatMoney(``any``)  
```javascript
//Formatea fecha a 'dd/mm/yyyy' o 'dd/mm/yyyy hh:mm'

formatDate(new Date());
// returns 'dd/mm/yyyy'

formatDate(new Date(), true);
// returns 'dd/mm/yyyy hh:mm'

```
## getWeekDay(``date``)  
```javascript
getWeekDay(new Date());
// returns 'Lunes'
```
## capitalize(``string``)  
```javascript
capitalize('hello');
// returns 'Hello'
```
## randomNumber(``min``, ``max``)  
```javascript
capitalize('hello');
// returns 'Hello'
```
## sleep(``duration``)  
```javascript
sleep(1000)
// pauses execution for 1000ms
```
## groupBy(``array``, ``key``)  
```javascript
Groups an array of objects by a specified key.
array - The array of objects to group.
key - The key to group the objects by.
returns Object An object where the keys are the values of the specified key in the objects, 
and the values are arrays of objects that have that key value.
  
const data = [
{ category: 'fruit', name: 'apple' },
{ category: 'fruit', name: 'banana' },
{ category: 'vegetable', name: 'carrot' }
];

const groupedData = groupBy(data, 'category');
groupedData will be:
{
fruit: [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' }
],
vegetable: [
    { category: 'vegetable', name: 'carrot' }
]
}
```


