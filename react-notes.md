09/19/2023 - REACT NOTES
- when we export or import something, we are referencing a location to GET CODE
- './' access a file at the same level
- '../' access a file at a higher level
- an arrow declaration for prop (properies) passing dynamic data between components
    function CoolFunction(props){
        const {title} = props; // destructuring --> grabs the exact key value
        return title;
    }

