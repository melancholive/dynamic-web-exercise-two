09/19/2023 - REACT NOTES
- when we export or import something, we are referencing a location to GET CODE
- './' access a file at the same level
- '../' access a file at a higher level
- an arrow declaration for prop (properies) passing dynamic data between components
    function CoolFunction(props){
        const {title} = props; // destructuring --> grabs the exact key value
        return title;
    }
- Accessing JSON elements
    const json = {
        {
            itemOne: 'hi'
        }
    }

    json[0].itemOne
- Array Methods: Loop
    for(let i = 0; i++; i <0){
        //
    }
    array.forEach(() => {
        //
    })
- Array Methods: Map
    const array = ['hi', 'hello'];
    array.map((text) => {
        console.log(text)
    })
- Display Date:
    const articleDate = (date) => {
        if (!date) return "";
        const parsedDate = new Date(date)
        return parsedDate.toDateString();
    }

    OR (more unsafe)
    new Date(date).toDateString()