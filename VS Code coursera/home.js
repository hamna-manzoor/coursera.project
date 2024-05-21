function githubaccount(){
    window.location.href = 'https://github.com/hamna-manzoor/git-hub';
}
function closerlook(){
    var imagePath = 'illustrator.png';
    window.open(imagePath, '_blank');
}
function tryit(){
    window.location.href = 'eurorbit.html'
}
function subtractValues() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const result = value1 - value2;
    document.getElementById('result').value = result;
}