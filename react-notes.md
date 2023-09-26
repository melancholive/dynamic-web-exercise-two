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
    // OR (more unsafe)
    new Date(date).toDateString()
- Dynamic Routing: https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
    // rename file name index.js --> [slug].js
    import { useRouter } from "next/router";
    export default function Article(){
        const router = useRouter();

        return(
            <main>
                <h1>Article</h1>
                <p>testing: {router.query.slug}</p>
            </main>
        )
    }
- Linking and Navigating: https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
    - Rather than hard coding the link, the above method is more preferred because it doesn't refresh the DOM, but edits the link
- Strings:
    - double quotes and single quotes function the same 
    - escape characters (\) are used when quotes break the string
    - however, using `` to declare a string circumvents this problem and you can also use dynamic values within these strings using ${variable} syntax ( which converts variable into a string )-- // you cannot use this method in the JSON //
- Array Methods:
    const simpleArray = ['hi', "hello", "bye"];
    const ValueIWant = simpleArray.find(
        // loops through the array to the value ( in this case val ) and returns true if found
        (val) => { // callback function
            val === 'hello'
        }
    );

    const complexArray = [
        { id: 'article-one", title: "hi"},
        { id: "article-two", title: "hello"},
        { id: "article-three", title: "bye"}
    ]
    const slug = "article-three";
    cont articleData = complexArray.find((val) => val.id === slug); // when nothing is found it throws "undefined" which causes errors
        
    if(!articleData) return null; // early return -- stops the page from crashing

    