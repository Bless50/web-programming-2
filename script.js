


const handleclick = () => {
    alert("hello, you have click the button");
}


// function to handle the form submittion

const formsubmit = (event) => {
    event.preventDefault();

    const userName = document.getElementById('user_name').value;
    const selectedColor = document.getElementById('color').value;
    alert(`Hello, ${userName}! you choose ${selectedColor} as your favorite color.`);
}
