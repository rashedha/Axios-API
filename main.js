// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button


/*
const RickAndMrty=()=>{
    const API='https://rickandmortyapi.com/api/character/1,2,3,4,5';
    axios
    .get(API)
    .then((response)=>{
        console.log('response:',response)
        const name_1=response.data.results[0].name;
        const pic1=response.data.results[0].image;
        $("#charachter1").text(name_1)
        $("#imageOfCharacterOne").attr("src",pic1)
        console.log(pic1)
       
    })
    .catch((error)=>{
console.log(error)
    })
}
console.log(RickAndMrty());
//////////////////////////////////////////////////2////////////////////////
const RickAndMrty_2=()=>{
    const API='https://rickandmortyapi.com/api/character/1,2,3,4,5';
    axios
    .get(API)
    .then((response)=>{
        console.log('response:',response)
        const name_2=response.data.results[1].name;
        const pic2=response.data.results[1].image;
        name_2.$("#charachter2").text(name_2)
        pic2.$("#imageOfCharacterTwo").attr("src",pic2)
        console.log(pic2)
       
    })
    .catch((error)=>{
        console.log(error)
    })
}
console.log(RickAndMrty_2());


///////////////////////////////////////3/////////////////////////
const RickAndMrty_3=()=>{
    const API='https://rickandmortyapi.com/api/character/1,2,3,4,5';
    axios
    .get(API)
    .then((response)=>{
        console.log('response:',response)
        const name_3=response.data.results[2].name;
        const pic3=response.data.results[2].image;
        name_3.$("#charachter3").text(name_3)
        pic3.$("#imageOfCharacterThree").attr("src",pic3)
        console.log(pic3)
       
    })
    .catch((error)=>{
        console.log(error)
    })
}
console.log(RickAndMrty_3());
//////////////////////////////4/////////////////////////////////////


const RickAndMrty_4=()=>{
    const API='https://rickandmortyapi.com/api/character/1,2,3,4,5';
    axios
    .get(API)
    .then((response)=>{
        console.log('response:',response)
        const name_4=response.data.results[3].name;
        const pic4=response.data.results[3].image;
        name_4.$("#charachter4").text(name_4)
        pic4.$("#imageOfCharacterFour").attr("src",pic4)
        console.log(pic4)
       
    })
    .catch((error)=>{
    console.log(error)
    })
}
console.log(RickAndMrty_4());
/////////////////////////////////////5////////////////////////////////
const RickAndMrty_5=()=>{
    const API='https://rickandmortyapi.com/api/character/1,2,3,4,5';
    axios
    .get(API)
    .then((response)=>{
        console.log('response:',response)
        const name_5=response.data.results[4].name;
        const pic5=response.data.results[4].image;
        name_5.$("#charachter5").text(name_5)
        pic5.$("#imageOfCharacterFive").attr("src",pic5)
        console.log(pic5)
       
    })
    .catch((error)=>{
    console.log(error)
    })
}
console.log(RickAndMrty());

*/
const RickAndMrty=()=>{
    const API=`https://rickandmortyapi.com/api/character/1,2,3,4,5`;
    axios
    .get(API)
    .then((response)=>{
        console.log('response:',response)
        const name_1=response.data.results[0].name;
        const pic1=response.data.results[0].image;

        $("#charachter1").text(name_1)
        $("#imageOfCharacterOne").attr("src",pic1)
        console.log(name_1)
        console.log(pic1)
        const name_2=response.data.results[1].name;
        const pic2=response.data.results[1].image;
        $("#charachter2").text(name_2)
        $("#imageOfCharacterTwo").attr("src",pic2)
        console.log(pic2)  
        const name_3=response.data.results[2].name;
        const pic3=response.data.results[2].image;
        $("#charachter3").text(name_3)
        $("#imageOfCharacterThree").attr("src",pic3)
        console.log(pic3)
        const name_4=response.data.results[3].name;
        const pic4=response.data.results[3].image;
        $("#charachter4").text(name_4)
        $("#imageOfCharacterFour").attr("src",pic4)
        console.log(pic4)   
        const name_5=response.data.results[4].name;
        const pic5=response.data.results[4].image;
        $("#charachter5").text(name_5)
        $("#imageOfCharacterFive").attr("src",pic5)
        console.log(pic5)
    })
    .catch((error)=>{console.log(error)
    })
}
const btn = $('#random');
btn.on('click', RickAndMrty);