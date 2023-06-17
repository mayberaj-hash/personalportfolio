const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientx, clienty } = event;

    blob.style.left = '${clientx}px';
    blob.style.top = '${clienty}px';
}