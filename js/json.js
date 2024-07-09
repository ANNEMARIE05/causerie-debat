async function request() {
    let recup = await fetch("https://jsonplaceholder.org/posts");
    console.log(recup);
    console.log(recup.status);
    recup = recup.json();
    console.log(recup);
}
request()

