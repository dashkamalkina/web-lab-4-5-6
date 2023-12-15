import {Spinner} from '../node_modules/spin.js/spin.js';

window.addEventListener("load", async function() {
    const container = document.getElementById("user-container")
    const button = document.getElementById("get-user")
    const preloader = document.getElementById("preloader")
    const errorText = document.getElementById("error-text");
    new Spinner({ color: '#fff', lines: 12,animation: 'spinner-line-shrink',top: '20%' }).spin(preloader);

    let initialAmount = Math.round(Math.random() * 7 + 1)
    for (let i = 0; i < initialAmount; i++) {
        try {
            let user = await getRandomUser()
            addUserToContainer(user)
        }
        catch (error){
            break;
        }
    }
    async function getRandomUser() {
        preloader.style.display = 'block'
        try {
            let r = Math.round(Math.random() * 100 + 1);
            const response = await fetch("https://dummyjson.com/users/" + r);

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            Toastify({
                text: "User data fetched successfully!",
                duration: 2000, // Set the duration for how long the toast should be visible
                gravity: "top", // You can adjust the position (top, bottom, left, right)
                backgroundColor: "green", // Customize the background color
            }).showToast();

            return await response.json();
        } catch (error) {
            handleRequestError(error);
            throw error;
        } finally {
            preloader.style.display = 'none';
        }
    }
    function addUserToContainer(user){
        let name = user.firstName;
        let lastName = user.lastName;
        let email = user.email;
        let phone = user.phone;
        let imageSrc = user.image;
        let data = `<div class="flex_contacts"><p>FullName: ${name} ${lastName}</p><p>email: ${email}</p><p>phone: ${phone}</p></div>`
        let image = `<img src="${imageSrc}" alt="img">`
        let div = `<div class="flex_row">${image} ${data}</div>`
        setTimeout(()=> {
            preloader.style.display = 'none'
            container.innerHTML += div
            }, 1000)

    }
    button.addEventListener('click', async function () {
        errorText.textContent = "";
        try {
            let user = await getRandomUser();
            addUserToContainer(user);
        } catch (error) {
        }
    });
    function handleRequestError(error) {
        errorText.textContent = "Error: " + error.message;
        errorText.style.color = "red";
        Toastify({
            text: "Error!",
            duration: 2000, // Set the duration for how long the toast should be visible
            gravity: "top", // You can adjust the position (top, bottom, left, right)
            backgroundColor: "red", // Customize the background color
        }).showToast();
    }



})

