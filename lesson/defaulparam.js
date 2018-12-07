function say(name="friend",language="vn"){
    if(language=="vn"){
        console.log(`Xin chào ${name}`);
    }
    else if(language=="ja"){
        console.log(`Konichiwa ${name}`);
    }
    else{
        console.log(`Hi ${name}`);
    }
    
}
say("Ua","en");