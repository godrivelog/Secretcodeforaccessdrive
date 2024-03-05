const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Video' && password === 'vdo') {
        
        window.location.href = "https://drive.google.com/drive/folders/1oBVFgtBfdKvGTEoyClhwsh8jl_ZNWBTa?usp=sharing";
    } else {
        message.textContent = 'churi korte aiso beda ?';
    }
    if (username === 'Photo' && password === 'pic') {
        
        window.location.href = "https://drive.google.com/drive/folders/1YBeTj1zuNOCTO8Eko_AT3QGEToRptQjG?usp=sharing";
    } if (username === 'Document' && password === 'doc') {
        
        window.location.href = "https://drive.google.com/drive/folders/1z7MAuNqoDFF0Vc6iPW3Blxr-loGQ7DUn?usp=sharing";
    } 
});
